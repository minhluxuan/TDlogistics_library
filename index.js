"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tdlogistics_1 = require("./tdlogistics");
var phoneNumber = "0981430418";
var email = "minh.luxuanhcmut.edu.vn";
var otp = "8647";
var usersAuthenticate = new tdlogistics_1.UsersAuthenticate();
var partnerStaff = new tdlogistics_1.PartnerStaffOperation();
var businessOperation = new tdlogistics_1.BusinessOperation();
var staffOperation = new tdlogistics_1.StaffOperation();
var partnerInfo = {
    partner_id: "26546556",
    username: "nhantd",
    password: "12355648979",
    fullname: "Nguyễn Thành Nhân",
    email: "thanhan.nguyen@gmail.com",
    phone_number: "090807964604",
    date_of_birth: "06-01-2004",
    cccd: "079206589515",
    province: "string",
    district: "string",
    town: "string",
    detail_address: "string",
    role: "string",
    position: "string",
    bin: "string",
    bank: "string",
};
usersAuthenticate.verifyOTP(phoneNumber, email, otp)
    .then(function (result) { return console.log(result); })
    .catch(function (error) { return console.log(error); });
var staffsAuthenticate = new tdlogistics_1.StaffsAuthenticate();
var username = "ntdung@tdlogistics";
var password = "NTDung@tdlogistics2k24";
staffsAuthenticate.login(username, password)
    .then(function (result) { return console.log(result); })
    .catch(function (error) { return console.log(error); });
partnerStaff.create(partnerInfo)
    .then(function (result) { return console.log(result); })
    .catch(function (error) { return console.log(error); });
;
