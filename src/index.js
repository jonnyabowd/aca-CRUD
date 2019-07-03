import express from "express";
import mongoose from "mongoose";
import router from "../client/src/router";
const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:8K85Xfl@pecancluster-hgdpy.mongodb.net/test?retryWrites=true&w=majority')

app.use(router)
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
