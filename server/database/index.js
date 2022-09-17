import mongoose from "mongoose"
import { MONGO_URI } from "../configs.js";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Database connected")
  })
  .catch(err => console.log(err))