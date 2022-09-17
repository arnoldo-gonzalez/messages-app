import { User } from "./models.js";

export function getOneUser(query) {
  return User.findOne(query)
    .then(user => user)
    .catch(err => {
      console.log(err)
      return {error: true}
    })
}

export function emailAlredyExist({email}) {
  return User.findOne({email: email})
    .then(user => user)
    .catch(err => {
      console.log(err)
      return false
    })
}

export function createUser({email, hashPassword, username, uuid}) {
  const newUser = new User({username, password: hashPassword, email, uuid})

  return newUser.save()
}
