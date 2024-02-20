"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = void 0;
const user_1 = require("../models/user");
const utility_class_1 = __importDefault(require("../utils/utility-class"));
const error_1 = require("../middlewares/error");
// export const newUser = async (
//   req: Request<{}, {}, NewUserRequestBody>,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {      
//     const { name, email, photo, _id, dob,gender } = req.body;
//     console.log(name, email, photo, _id, dob,gender);
//     const user = await User.create({
//         name,
//         email,
//         photo,
//         gender,
//         _id,
//         dob:new Date(dob),
//     });
//     return res.status(201).json({
//       success: true,
//       message: `Welcome,${user.name}`,
//     });
//   } catch (error) {
//     return res.status(401).json({
//         success: false,
//         message: error,
//       });
//   }
// };
exports.newUser = (0, error_1.TryCatch)(async (req, res, next) => {
    const { name, email, photo, gender, _id, dob } = req.body;
    let user = await user_1.User.findById(_id);
    if (user)
        return res.status(200).json({
            success: true,
            message: `Welcome, ${user.name}`,
        });
    if (!_id || !name || !email || !photo || !gender || !dob)
        return next(new utility_class_1.default("Please add all fields", 400));
    user = await user_1.User.create({
        name,
        email,
        photo,
        gender,
        _id,
        dob: new Date(dob),
    });
    return res.status(201).json({
        success: true,
        message: `Welcome, ${user.name}`,
    });
});
