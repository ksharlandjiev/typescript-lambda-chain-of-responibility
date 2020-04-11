'use strict'

const app = require('../../app')
process.env.MIXPANEL_TOKEN = '123123-test'
process.env.GA_TOKEN = '123123-test'
process.env.MIXPANEL_URI='http://localhost/'
import { expect } from 'chai'

describe('Tests index', function () {
    it('verifies 404 not found on empty event', async () => {
        const result = await app.lambdaHandler({}, {})

        expect(result).to.be.an('object')
        expect(result.statusCode).to.equal(404)
        expect(result.body).to.be.an('string')

        const response = JSON.parse(result.body)

       expect(response).to.be.an('object')
       expect(response.error).to.be.equal('path not found')
    })
})
