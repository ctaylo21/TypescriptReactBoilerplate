// Make common library methods available on global object
let chai = require('chai')
let chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

global.assert = chai.assert
global.sinon = require('sinon')
