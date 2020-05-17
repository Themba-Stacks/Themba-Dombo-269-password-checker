const {passwordIsValid} = require("../src/password_checker.js");

describe("passwordIsValid", function(){
    it("should not pass a empty string", function(){
        expect(()=>passwordIsValid("")).toThrow(new Error("password should exist"));
    });
    it("should display error", function(){
        expect(()=>{passwordIsValid("")}).toThrow(new Error("password should be longer than than 8 characters"));
    });
});