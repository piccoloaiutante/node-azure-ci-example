var assert = require("assert")
var request = require("supertest")
var app = require('../app');
  describe('calling root url', function(){
    it('should return 200', function(done){
     request(app)
        .get('/')
        .expect(200,done);
    })
  })

