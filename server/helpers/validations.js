export function validateEmail(email) {
  const regExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  return email && regExp.test(email)
}

const validVisibilities = ["public", "private"]

export function validateVisibility(visibility) {
  return validVisibilities.includes(visibility)
}

export function validateText(text) {
  const regExp = /<script>|<\/script>|<|>|\\|\/|\||\$|\&|\`|\^|\[|\]|\{|\}|\,/

  return text && !regExp.test(text) && text.length > 2
}

export function validatePassword(password, re_password) {
  const regExp = /<script>|<\/script>|<|>|\\|\/|\||\$|\&|\`|\^|\[|\]|\{|\}|\,|\W/

  return password && re_password && !regExp.test(password) && !regExp.test(re_password) && password === re_password && re_password.length > 2 && password.length > 2
}
