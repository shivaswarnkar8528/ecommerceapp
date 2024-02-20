"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const features_1 = require("./utils/features");
const error_1 = require("./middlewares/error");
(0, features_1.connectDB)();
const app = (0, express_1.default)();
//adding middleware
app.use(express_1.default.json());
const port = 4000;
app.get("/", (req, res) => {
    res.send("API is working fine");
});
app.use("/api/v1/user", user_1.default);
//middleware for handle error
app.use(error_1.errorMiddleware);
app.listen(port, () => {
    console.log("server is running", port);
});
