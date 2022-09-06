import { randomUUID } from "crypto";

export const mockUsers = [
  {
    name: "Arnoldo Gonzalez",
    email: "email_real@gmail.com",
    password: "123",
    id: randomUUID(),
  },
  {
    name: "Pepito Perez",
    email: "pepito@gmail.com",
    password: "123",
    id: randomUUID(),
  },
  {
    name: "Juanito Hernandez",
    email: "juanito@gmail.com",
    password: "123",
    id: randomUUID(),
  }
]

export const mockMessages = []