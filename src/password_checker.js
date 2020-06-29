function passwordIsValid(password) {
  if (password == null) throw new Error("password should exist");

  if (/.{9}/.test(password) == false)
    throw new Error("password should be longer than than 8 characters");

  if (/[a-z]/.test(password) == false)
    throw new Error("password should have at least one lowercase letter");

  if (/[A-Z]/.test(password) == false)
    throw new Error("password should have at least one uppercase letter");

  if (/[0-9]/.test(password) == false)
    throw new Error("password should at least have one digit");

  if (/[^0-9a-zA-Z]/.test(password) == false)
    throw new Error("password should have at least one special character");
}

function passwordIsOk(password) {
  if ((password != null) & /.{9}/.test(password) & /[a-z]/.test(password))
    return true;

  return false;
}

module.exports = { passwordIsValid, passwordIsOk };
