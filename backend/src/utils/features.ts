import mongoose from "mongoose";

export const connectDB = ()=> {
  mongoose
    .connect("mongodb+srv://shivasoni8528:Shiva%408528@cluster0.mdf4o8v.mongodb.net/library", {
      dbName: "Ecommerce_24",
    })
    .then((c) => console.log(`DB Connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
    
};
