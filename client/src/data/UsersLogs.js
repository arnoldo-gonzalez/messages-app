import {BASE_URL} from "./vars.js"

export const allContent = {
  SING_IN: {
    title: "Sing in on your account",
    urlToFetch: `${BASE_URL}/api/sing_in`,
    link: "You don't have an account? Sing Up!",
    submit: "Sing in"
  },
  SING_UP: {
    title: "Create an account",
    urlToFetch: `${BASE_URL}/api/sing_up`,
    link: "You have an account? Sing In!",
    submit: "Sing up"
  }
}
