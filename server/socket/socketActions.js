import {generateKey} from "crypto";
import { addOneMessage } from "../database/database.js";

export const disconnect = ({socket}) => {
  console.log("user disconnected", socket.id);
};

export const new_message = ({io, data: {user, message, date}}) => {
  generateKey('hmac', { length: 64 }, (err, key) => {
    if (err) throw err;
    const id = key.export().toString('hex');

    const data = addOneMessage({body: message, date, user, id: id})
    console.log(data)
    io.emit("message", {body: message, date, user, id: id})
  });
};