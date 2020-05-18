const { passwordIsOk } = require("../src/password_checker.js");

describe("passwordIsOk", () => {
  it("should contain a string", () => {
    expect(passwordIsOk("HelloworlD")).toBe(true);
  });

  it("should be longer than 8 characters", () => {
    expect(passwordIsOk("HelloworlD")).toBe(true);
  });

  it("should have at least one uppercase character", () => {
    expect(passwordIsOk("HelloworlD")).toBe(true);
  });
});
