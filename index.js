"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tdlogistics_1 = require("./tdlogistics");
var phoneNumber = "0981430418";
var email = "minh.luxuanhcmut.edu.vn";
var otp = "8646";
var usersAuthenticate = new tdlogistics_1.UsersAuthenticate();
usersAuthenticate.verifyOTP(phoneNumber, email, otp)
    .then(function (result) { return console.log(result); })
    .catch(function (error) { return console.log(error); });
// const user = new User(phoneNumber);
// user.getInfo()
// .then(result => console.log(result))
// .catch(error => console.log(error))
// const staffsAuthenticate = new StaffsAuthenticate();
// staffsAuthenticate.login("ntdung@tdlogistics", "NTDung@tdlogistics2k25")
// .then(result => console.log(result))
// .catch(error => console.log(error));
