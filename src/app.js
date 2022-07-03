import { WebAuth } from 'auth0-js'

export default function testFunction () {
  return new WebAuth({
    domain: 'example.auth0.com',
    clientID: 'fakeid'
  })
}
