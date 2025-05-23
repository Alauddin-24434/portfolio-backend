import { model, Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "./auth.inteface";


const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
    },
    password: { type: String, required: [true, "Password is required!"] },
    role: {
      type: String,
      enum: ["admin"],
      required: [true, "Role is required!"],
    },
  },
  {
    timestamps: true, 
  }
);

// password hash pre-save middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// instance method to compare password
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const UserModel = model<IUser>("User", userSchema);
