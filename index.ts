import { UsersAuthenticate , StaffsAuthenticate, UsersOperation, BusinessAuthenticate } from "./tdlogistics";

const phoneNumber = "0981430418";
const email = "minh.luxuanhcmut.edu.vn";
const otp = "8647";


const staffsAuthenticate = new BusinessAuthenticate();
const username = "minhluxuan";
const password = "AlphaSolutions@alphasolutions2k24";


staffsAuthenticate.login(username, password)
.then(result => console.log(result))
.catch(error => console.log(error));
