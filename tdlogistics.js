"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.StaffsAuthenticate = exports.UsersAuthenticate = void 0;
var axios_1 = require("axios");
var UsersAuthenticate = /** @class */ (function () {
    function UsersAuthenticate() {
        this.baseUrl = "https://tdlogistics.govt.hu/api/v1/users";
        // this.baseUrl = "http://localhost:5000/api/v1/users";
    }
    UsersAuthenticate.prototype.sendOTP = function (phoneNumber, email) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/send_otp"), {
                                phone_number: phoneNumber,
                                email: email,
                            }, {
                                withCredentials: true,
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, message: data.message }];
                    case 2:
                        error_1 = _a.sent();
                        console.log("Error sending OTP: ", error_1.response.data);
                        return [2 /*return*/, error_1.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersAuthenticate.prototype.verifyOTP = function (phoneNumber, email, otp) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/verify_otp"), {
                                phone_number: phoneNumber,
                                email: email,
                                otp: otp,
                            }, {
                                withCredentials: true,
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, valid: data.valid, message: data.message }];
                    case 2:
                        error_2 = _a.sent();
                        console.log("Error verifying OTP:", error_2.response.data);
                        return [2 /*return*/, error_2.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UsersAuthenticate;
}());
exports.UsersAuthenticate = UsersAuthenticate;
var StaffsAuthenticate = /** @class */ (function () {
    function StaffsAuthenticate() {
        // this.baseUrl = "https://tdlogistics.govt.hu/api/v1/staffs";
        this.baseUrl = "http://localhost:5000/api/v1/staffs";
    }
    StaffsAuthenticate.prototype.login = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/login"), {
                                username: username,
                                password: password,
                            }, {
                                withCredentials: true,
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, message: data.message }];
                    case 2:
                        error_3 = _a.sent();
                        console.log("Error logging in: ", error_3.response);
                        return [2 /*return*/, error_3.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StaffsAuthenticate.prototype.sendOTP = function (phone_number, email) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/send_otp"), {
                                phone_number: phone_number,
                                email: email,
                            }, {
                                withCredentials: true,
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, message: data.message }];
                    case 2:
                        error_4 = _a.sent();
                        console.log("Error sending OTP: ", error_4.response.data);
                        return [2 /*return*/, error_4.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StaffsAuthenticate.prototype.verifyOTP = function (phone_number, email, otp) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/verify_otp"), {
                                phone_number: phone_number,
                                email: email,
                                otp: otp,
                            }, {
                                withCredentials: true,
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, message: data.message }];
                    case 2:
                        error_5 = _a.sent();
                        console.log("Error verify OTP", error_5.response.data);
                        return [2 /*return*/, error_5.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return StaffsAuthenticate;
}());
exports.StaffsAuthenticate = StaffsAuthenticate;
var User = /** @class */ (function () {
    function User(phoneNumber) {
        // this.baseUrl = "https://tdlogistics.govt.hu/api/v1/users";
        this.baseUrl = "http://localhost:5000/api/v1/users";
        this.phoneNumber = phoneNumber;
    }
    User.prototype.fetchInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/get"), {
                                phone_number: this.phoneNumber,
                            }, {
                                withCredentials: true,
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, data: data.data, message: data.message }];
                    case 2:
                        error_6 = _a.sent();
                        console.log("Error get one user: ", error_6.response.data);
                        return [2 /*return*/, error_6.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    User.prototype.setInfo = function (fullname, email) {
        this.fullname = fullname;
        this.email = email;
    };
    User.prototype.getInfo = function () {
        return new Object({
            fullname: this.fullname,
            phoneNumber: this.phoneNumber,
            email: this.email,
            role: "USER",
        });
    };
    return User;
}());
exports.User = User;
var Staff = /** @class */ (function () {
    function Staff() {
        // this.baseUrl = "https://tdlogistics.govt.hu/api/v1/staffs";
        this.baseUrl = "http://localhost:5000/api/v1/staffs";
    }
    return Staff;
}());
var Agency = /** @class */ (function () {
    function Agency() {
        // this.baseUrl = "https://tdlogistics.govt.hu/api/v1/users";
        this.baseUrl = "http://localhost:5000/api/v1/agencies";
    }
    Agency.prototype.createAgency = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.baseUrl, "/create"), info, {
                                withCredentials: true,
                            })];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, { error: data.error, message: data.message }];
                    case 2:
                        error_7 = _a.sent();
                        console.log("Error creating agency: ", error_7.response.data);
                        return [2 /*return*/, error_7.response.data];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Agency;
}());
