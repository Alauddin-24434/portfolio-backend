
export interface IUser extends Document {
  _id:string;
  email: string;
  password: string;
  role: "admin";
  comparePassword(candidatePassword: string): Promise<boolean>;
}