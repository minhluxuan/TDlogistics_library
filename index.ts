import { UsersAuthenticate , StaffsAuthenticate, UsersOperation } from "./tdlogistics";

const phoneNumber = "0981430418";
const email = "minh.luxuanhcmut.edu.vn";
const otp = "8646";

const usersAuthenticate = new UsersAuthenticate();
usersAuthenticate.verifyOTP(phoneNumber, email, otp)
.then(result => console.log(result))
.catch(error => console.log(error));
