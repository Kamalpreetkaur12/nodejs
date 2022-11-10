import express from "express";
import cors from "cors";
import userRouter from "./routers/userRouter.js";
 import {errorHandler, notFound} from "./middleware/index.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello there");
});
app.use("/users", userRouter);
app.use(notFound)


app.use((req,res,next)=>{
    console.log("it's only test")
    next()
})


 app.use(errorHandler);
app.listen(PORT, () => {
  console.log(" 😀 the server is run on port " + PORT);
});
