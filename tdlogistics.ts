import axios, { AxiosResponse } from "axios";

class UsersAuthenticate {
    private baseUrl: string;
    constructor() {
        this.baseUrl = "https://tdlogistics.govt.hu/api/v1/users";
        // this.baseUrl = "http://localhost:5000/api/v1/users";
    }

    async sendOTP(phoneNumber: string, email: string): Promise<any> {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/send_otp`, {
                phone_number: phoneNumber,
                email: email,
            }, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error) {
            console.log("Error sending OTP: ", error.response.data);
            return error.response.data;
        }
    }

    async verifyOTP(phoneNumber: string, email: string, otp: string): Promise<any> {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/verify_otp`, {
                phone_number: phoneNumber,
                email: email,
                otp: otp,
            }, {
                withCredentials: true,
            },);

            const data = response.data;
            return { error: data.error, valid: data.valid, message: data.message };
        } catch (error) {
            console.log("Error verifying OTP:", error.response.data);
            return error.response.data;
        }
    }
}

class StaffsAuthenticate {
    private baseUrl: string;
    constructor() {
        // this.baseUrl = "https://tdlogistics.govt.hu/api/v1/staffs";
        this.baseUrl = "http://localhost:5000/api/v1/staffs";
    }

    async login(username: string, password: string): Promise<any> {
        try {
            const response = await axios.post(`${this.baseUrl}/login`, {
                username: username,
                password: password,
            }, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error) {
            console.log("Error logging in: ", error.response.data);
            return error.response.data;
        }
    }

    async sendOTP(phone_number: string, email: string) : Promise<any> {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/send_otp`, {
                phone_number: phone_number,
                email: email,
            }, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error) {
            console.log("Error sending OTP: ", error.response.data);
            return error.response.data;
        }
    }

    async verifyOTP(phone_number: string, email: string, otp: string): Promise<any> {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/verify_otp`, {
                phone_number: phone_number,
                email: email,
                otp: otp,
            }, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error) {
            console.log("Error verify OTP", error.response.data);
            return error.response.data;
        }
    }
}

interface CreatingUserInfo {
    fullname: string,
    phone_number: string,
    email: string,
}

interface FindingUserByUserCondition {
    phone_number: string,
}

interface FindingUserByAdminConditions {
    user_id: string,
    fullname: string,
    phone_number: string,
    email: string,
}

interface UpdatingUserInfo {
    fullname: string,
    email: string,
}

interface UpdatingUserCondition {
    user_id: string,
}

class UsersOperation {
    private baseUrl: string;

    constructor(phoneNumber: string) {
        // this.baseUrl = "https://tdlogistics.govt.hu/api/v1/users";
        this.baseUrl = "http://localhost:5000/api/v1/users";
    }

    async findByUser(condition: FindingUserByUserCondition) : Promise<any> {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/search`, condition, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error) {
            console.log("Error get one user: ", error.response.data);
            return error.response.data;
        }
    }

    async findByAdmin(conditions: FindingUserByAdminConditions) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/search`, conditions, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error) {
            console.log("Error get one user: ", error.response.data);
            return error.response.data;
        }
    }

    async create(info: CreatingUserInfo) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error) {
            console.log("Error create new user: ", error.response.data);
            return error.response.data;
        }
    }

    async update(info: UpdatingUserInfo, condition: UpdatingUserCondition) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?user_id=${condition.user_id}`, info, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error) {
            console.log("Error create new user: ", error.response.data);
            return error.response.data;
        }
    }
}


interface CreatingAgencyInfo {
    username: string,
    user_password: string,
    user_fullname: string,
    user_phone_number: string,
    user_email: string,
    user_date_of_birth: string,
    user_cccd: string,
    user_province: string,
    user_district: string,
    user_town: string,
    user_detail_address: string,
    user_position: string,
    user_bin: string,
    user_bank: string,
    user_salary: number,

    type: string,
    level: string,
    postal_code: string,
    agency_name: string,
    province: string,
    district: string,
    town: string,
    detail_address: string,
    latitude: string,
    longitude: string,
    managed_wards: string,
    phone_number: string,
    email: string,
    commission_rate: string,
    bin: string,
    bank: string,
}

interface FindingAgencyByAgencyInfo {
    agencyId: string,
}

interface FindingAgencyByAdminInfo {
    agency_id: string,
    agency_name: string,
    level: string,
    province: string,
    district: string,
    town: string,
    phone_number: string,
    email: string,  
    bin: string,
    bank: string,
}

interface UpdatingAgencyInfo {
    agency_name: string,
    province: string,
    district: string,
    town: string,
    detail_address: string,
    latitude: string,
    longitude: string,
    email: string,
    phone_number: string,
    revenue: string,
    commission_rate: string,
    bin: string,
    bank: string,
}

interface UpdatingAgencyCondition {
    agency_id: string,
}

interface DeletingAgencyCondition {
    agency_id: string,
}

class AgencyOperation {
    private baseUrl: string;
    constructor() {
        // this.baseUrl = "https://tdlogistics.govt.hu/api/v1/users";
        this.baseUrl = "http://localhost:5000/api/v1/agencies";
    }

    async create(info: CreatingAgencyInfo): Promise<any> {
        try {
            const response = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
            });
    
            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error) {
            console.log("Error creating agency: ", error.response.data);
            return error.response.data;
        }
    }

    async findByAgency(conditions: FindingAgencyByAgencyInfo) {
        try {
            const response = await axios.post(`${this.baseUrl}/search`, conditions, {
                withCredentials: true,
            });
    
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error) {
            console.log("Error finding agency: ", error.response.data);
            return error.response.data;
        }
    }

    async findByAdmin(conditions: FindingAgencyByAdminInfo) {
        try {
            const response = await axios.post(`${this.baseUrl}/search`, conditions, {
                withCredentials: true,
            });
    
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error) {
            console.log("Error finding agency: ", error.response.data);
            return error.response.data;
        }
    }

    async update(info: UpdatingAgencyInfo, condition: UpdatingAgencyCondition) {
        try {
            const response = await axios.put(`${this.baseUrl}/update?agency_id=${condition.agency_id}`, info, {
                withCredentials: true,
            });
    
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error) {
            console.log("Error finding agency: ", error.response.data);
            return error.response.data;
        }
    }

    async delete(condition: DeletingAgencyCondition) {
        try {
            const response = await axios.delete(`${this.baseUrl}/delete?agency_id=${condition.agency_id}`, {
                withCredentials: true,
            });
    
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error) {
            console.log("Error finding agency: ", error.response.data);
            return error.response.data;
        }
    }
}

export {
    UsersAuthenticate,
    StaffsAuthenticate,
    UsersOperation,
    AgencyOperation,
}