  import { Request, Response, NextFunction } from "express";
  import { User } from "../models/user";
  import { NewUserRequestBody } from "../types/types";
import ErrorHandler from "../utils/utility-class";
import { TryCatch } from "../middlewares/error";

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

  export const newUser = TryCatch(
    async (
      req: Request<{}, {}, NewUserRequestBody>,
      res: Response,
      next: NextFunction
    ) => {
      const { name, email, photo, gender, _id, dob } = req.body;
  
      let user = await User.findById(_id);
  
      if (user)
        return res.status(200).json({
          success: true,
          message: `Welcome, ${user.name}`,
        });
  
      if (!_id || !name || !email || !photo || !gender || !dob)
        return next(new ErrorHandler("Please add all fields", 400));
  
      user = await User.create({
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
    }
  );
  
