import chai from 'chai'
import sinon from 'sinon'
import supertest from 'supertest'

import app from './../../src/app.js'

const request = supertest(app)
const expect = chai.expect

describe('Test test', () => {
    describe('Greeting test', () => {
        it('Should return sup', () => {
            let greeting = 'sup'
            expect(greeting).to.equal('sup')
        })
    })
})
