"use strict";

describe("call",function(){

    it("should pass an object to its callback as a parameter",function(done){
        call("https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=batman",function(results){

            var result;
            result = results;
            expect(typeof result).toBe("object");
            done();
        });
    });

    it("should response status be 200 and response content be string",function(done){
        call("https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=batman",function(response){

            expect(response.status).toBe(200);
            expect(typeof response.content).toBe("string");
            done();
        });
    });

    it("should fail on non string url",function(){

        expect(function(){
            call(true,function(){});
        }).toThrowError(TypeError,"true is not a string");

        expect(function(){
            call(www.google.es, function(){});
        }).toThrowError(ReferenceError, "www is not defined");
    });

    it("should fail if url does not have an url format even though it is a string ", function(){

        expect(function(){
            call("false",function(){});
        }).toThrowError(SyntaxError, "false is not an url");

        expect(function(){
            call("hello-world.com", function(){});
        }).toThrowError(SyntaxError, "hello-world.com is not an url");
    });

    it("should fail on non-function expression", function(){

        expect(function(){
            call("https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=batman", true);
        }).toThrowError(TypeError, "true is not a function");

        expect(function(){
            call("https://skylabcoders.herokuapp.com/api/hotwheels/vehicles?q=batman", "hello-world");
        }).toThrowError(TypeError,  'hello-world is not a function');        
    });    

});