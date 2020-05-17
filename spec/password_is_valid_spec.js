const {passwordIsValid} = require("../src/password_checker.js");

describe("passwordIsValid", ()=>{
    it("shouldn't allow a empty string", ()=>{
        expect(()=>passwordIsValid("")).toThrow(new Error("password should exist"));
    });

    it("shouldn't accept a string less than 9 characters", ()=>{
        expect(()=>{passwordIsValid("#th3mb@D")}).toThrow(new Error("password should be longer than than 8 characters"));
    });

    it("shouldn't allow uppercase characters only", ()=>{
        expect(()=>{passwordIsValid("THEMB@123D")}).toThrow(new Error("password should have at least one lowercase letter"));
    });

    it("shouldn't allow lowercase characters only", ()=>{
        expect(()=>{passwordIsValid("themb@dombo2")}).toThrow(new Error("password should have at least one uppercase letter"));
    });

    it("shouldn't only contain alphabetic characters", ()=>{
        expect(()=>{passwordIsValid("ThembaDombo")}).toThrow(new Error("password should at least have one digit"));
    });

    it("shouldn't only contain alphanumeric characters", ()=>{
        expect(()=>{passwordIsValid("Themb8Dombo")}).toThrow(new Error("password should have at least one special character"));
    });
});