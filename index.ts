import { UsersAuthenticate , StaffsAuthenticate, UsersOperation, BusinessOperation, StaffOperation, PartnerStaffOperation } from "./tdlogistics";

const phoneNumber = "0981430418";
const email = "minh.luxuanhcmut.edu.vn";
const otp = "8647";

const usersAuthenticate = new UsersAuthenticate();
const partnerStaff = new PartnerStaffOperation();
const businessOperation = new BusinessOperation();
const staffOperation = new StaffOperation(); 

const partnerInfo = {
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
}





usersAuthenticate.verifyOTP(phoneNumber, email, otp)
.then(result => console.log(result))
.catch(error => console.log(error));

const staffsAuthenticate = new StaffsAuthenticate();
const username = "ntdung@tdlogistics";
const password = "NTDung@tdlogistics2k24";


staffsAuthenticate.login(username, password)
.then(result => console.log(result))
.catch(error => console.log(error));

partnerStaff.create(partnerInfo)
.then(result => console.log(result))
.catch(error => console.log(error));;
