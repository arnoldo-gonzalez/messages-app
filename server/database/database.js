import { mockUsers, mockMessages } from "./mockData.js";

export function getAllUsers() {
  return mockUsers
}

export function getOneUser({email, password}) {
  return mockUsers.find(user => user.email === email && user.password === password)
}

export function getAllMessage() {
  return mockMessages
}

export function addOneMessage(msg) {
  mockMessages.push(msg)
  return mockMessages
}