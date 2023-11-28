import { h } from 'preact'
import renderToString from 'preact-render-to-string'
import path from 'path'

import pages from './pages/index'
import htmlShell from './templates/default'

const fastify = require('fastify')
const fastifyStatic = require('@fastify/static')

// FASTIFY CONFIG
const app = fastify({ logger: true })
app.register(fastifyStatic, {
    root: path.join(__dirname, '../public')
})

// ROUTES
pages.forEach(page =>
    app.route({
        method: 'GET',
        url: page.route,
        schema: {
            response: {
                200: {
                    type: 'string'
                }
            }
        },
        handler: function (request, response) {
            response.header('Content-Type', 'text/html; charset=utf-8')
            return htmlShell(renderToString(<page.component />))
        }
    })
)

// START SERVER
const start = async () => {
    try {
        await app.listen({ port: 3000 })
    } catch (e) {
        app.log.error(e)
        process.exit(1)
    }
}
start()
