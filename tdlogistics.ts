import axios, { AxiosResponse } from "axios";
import { io } from 'socket.io-client';
const FormData = require("form-data");

// const socket = io("http://localhost:5000", {
//     withCredentials: true,
// });

// socket.on("connect", () => {
//     console.log("Connected to server.");
// });

// socket.on("notifyError", message => {
//     // showing custome notification on UI
// });

// socket.on("notifySuccessCreatedNewOrder", message => {
//     // showing custome notification on UI
// });

// socket.on("notifyFailCreatedNewOrder", message => {
//     // showing custome notification on UI
// });

class UsersAuthenticate {
    private baseUrl: string;
    constructor() {
        // this.baseUrl = "https://tdlogistics.govt.hu/api/v1/users";
        this.baseUrl = "http://localhost:5000/api/v1/users";
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
        } catch (error: any) {
            console.log("Error sending OTP: ", error.response.data);
            return error.response.data;
        }
    }

    async verifyOTP(phoneNumber: string, otp: string): Promise<any> {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/verify_otp`, {
                phone_number: phoneNumber,
                otp: otp,
            }, {
                withCredentials: true,
            },);

            const data = response.data;
            return { error: data.error, valid: data.valid, message: data.message };
        } catch (error: any) {
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
            return { error: data.error, valid: data.valid, message: data.message };
        } catch (error: any) {
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
        } catch (error: any) {
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
        } catch (error: any) {
            console.log("Error verify OTP", error.response.data);
            return error.response.data;
        }
    }
}

export interface CreatingUserInfo {
    fullname: string,
    phone_number: string,
    email: string,
}

export interface FindingUserByUserCondition {
    phone_number: string,
}

export interface FindingUserByAdminConditions {
    user_id: string,
    fullname: string,
    phone_number: string,
    email: string,
}

export interface UpdatingUserInfo {
    fullname: string,
    email: string,
}

export interface UpdatingUserCondition {
    user_id: string,
}

class UsersOperation {
    private baseUrl: string;

    constructor() {
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
        } catch (error: any) {
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
        } catch (error: any) {
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
        } catch (error: any) {
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
        } catch (error: any) {
            console.log("Error update new user: ", error.response.data);
            return error.response.data;
        }
    }
}

export interface CheckingExistAgencyCondition {
    agency_id: string,
}

export interface CreatingAgencyInfo {
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

export interface FindingAgencyByAgencyInfo {
    agencyId: string,
}

export interface FindingAgencyByAdminInfo {
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

export interface UpdatingAgencyInfo {
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

export interface UpdatingAgencyCondition {
    agency_id: string,
}

export interface DeletingAgencyCondition {
    agency_id: string,
}

class AgencyOperation {
    private baseUrl: string;
    constructor() {
        // this.baseUrl = "https://tdlogistics.govt.hu/api/v1/agencies";
        this.baseUrl = "http://localhost:5000/api/v1/agencies";
    }

    async checkExist(condition: CheckingExistAgencyCondition) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/check?agency_id=${condition.agency_id}`, {
                withCredentials: true,
            });
    
            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error: any) {
            console.log("Error checking exist agency: ", error.response.data);
            return error.response.data;
        }
    }

    async create(info: CreatingAgencyInfo): Promise<any> {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
            });
    
            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error: any) {
            console.log("Error creating agency: ", error.response.data);
            return error.response.data;
        }
    }

    async findByAgency(conditions: FindingAgencyByAgencyInfo) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/search`, conditions, {
                withCredentials: true,
            });
    
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error finding agency: ", error.response.data);
            return error.response.data;
        }
    }

    async findByAdmin(conditions: FindingAgencyByAdminInfo) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/search`, conditions, {
                withCredentials: true,
            });
    
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error finding agency: ", error.response.data);
            return error.response.data;
        }
    }

    async update(info: UpdatingAgencyInfo, condition: UpdatingAgencyCondition) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?agency_id=${condition.agency_id}`, info, {
                withCredentials: true,
            });
    
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error finding agency: ", error.response.data);
            return error.response.data;
        }
    }

    async delete(condition: DeletingAgencyCondition) {
        try {
            const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete?agency_id=${condition.agency_id}`, {
                withCredentials: true,
            });
    
            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error finding agency: ", error.response.data);
            return error.response.data;
        }
    }
}

export interface CreatingTransportPartnerByAdminInfo {
    // Representor information
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
    user_bank: string

    // Transport partner information
    agency_id: string,
    tax_code: string,
    transport_partner_name: string,
    province: string,
    district: string,
    town: string,
    detail_address: string,
    phone_number: string,
    email: string,
    bin: string,
    bank: string,
}

export interface CreatingTransportPartnerByAgencyInfo {
    // Representor information
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
    user_bank: string

    // Transport partner information
    tax_code: string,
    transport_partner_name: string,
    province: string,
    district: string,
    town: string,
    detail_address: string,
    phone_number: string,
    email: string,
    bin: string,
    bank: string,
}

export interface FindingTransportPartnerByTransportPartnerCondition {
    transport_partner_id: string,
}

export interface FindingTransportPartnerByAdminConditions {
    transport_partner_id: string,
    tax_code: string,
    transport_partner_name: string,
    province: string,
    district: string,
    town: string,
    detail_address: string,
    phone_number: string,
    email: string,
    bin: string,
    bank: string,
}

export interface UpdatingTransportPartnerInfo {
    tax_code: string,
    transport_partner_name: string,
    province: string,
    district: string,
    town: string,
    detail_address: string,
    phone_number: string,
    email: string,
    bin: string,
    bank: string,
    debit: string,
}

export interface UpdatingTransportPartnerCondition {
    transport_partner_id: string,
}

export interface DeletingTransportPartnerCondition {
    transport_partner_id: string,
}

class TransportPartnersOperation {
    private baseUrl: string;

    constructor() {
        // this.baseUrl = "https://tdlogistics.govt.hu/api/v1/transport_partners";
        this.baseUrl = "http://localhost:5000/api/v1/transport_partners";
    }

    async createByAdmin(info: CreatingTransportPartnerByAdminInfo) {
        try {
            const response = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error: any) {
            console.log("Error creating new transport partner: ", error.response.data);
            return error.response.data;
        }
    }

    async createByAgency(info: CreatingTransportPartnerByAgencyInfo) {
        try {
            const response = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error: any) {
            console.log("Error creating new transport partner: ", error.response.data);
            return error.response.data;
        }
    }

    async findByTransportPartner(condition: FindingTransportPartnerByTransportPartnerCondition) {
        try {
            const response = await axios.post(`${this.baseUrl}/search`, condition, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error finding transport partner: ", error.response.data);
            return error.response.data;
        }
    }

    async findByAdmin(conditions: FindingTransportPartnerByAdminConditions) {
        try {
            const response = await axios.post(`${this.baseUrl}/search`, conditions, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error finding transport partner: ", error.response.data);
            return error.response.data;
        }
    }

    async update(info: UpdatingTransportPartnerInfo, condition: UpdatingTransportPartnerCondition) {
        try {
            const response = await axios.put(`${this.baseUrl}/update?transport_partner_id=${condition.transport_partner_id}`, info, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error: any) {
            console.log("Error updating transport partner: ", error.response.data);
            return error.response.data;
        }
    }

    async remove(condition: DeletingTransportPartnerCondition) {
        try {
            const response = await axios.delete(`${this.baseUrl}/delete?transport_partner_id=${condition.transport_partner_id}`, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error: any) {
            console.log("Error deleting transport partner: ", error.response.data);
            return error.response.data;
        }
    }
}

export interface CheckingExistVehicleCondition {
    vehicle_id: string,
}

export interface CreatingVehicleByAdminInfo {
    agency_id: string,
    transport_partner_id: string,
    staff_id: string,
    type: string,
    license_plate: string,
    max_load: number,
}

export interface CreatingVehicleByAgencyInfo {
    transport_partner_id: string,
    staff_id: string,
    type: string,
    license_plate: string,
    max_load: number,
}

export interface FindingVehicleByStaffCondition {
    staff_id: string,
}

export interface FindingVehicleByAdminConditions {
    vehicle_id: string,
    transport_partner_id: string,
    staff_id: string,
    type: string,
    license_plate: string,
    mass: number,
}

export interface GettingShipmentsContainedByVehicleCondition {
    vehicle_id: string,
}

export interface UpdatingVehicleInfo {
    transport_partner_id: string,
    staff_id: string,
    type: string,
    max_load: number,
}

export interface UpdatingVehicleCondition {
    vehicle_id: string,
}

export interface AddingShipmentsToVehicleInfo {
    shipment_ids: Object,
}

export interface AddingShipmentsToVehicleCondition {
    vehicle_id: string,
}

export interface DeletingShipmentsFromVehicleInfo {
    shipment_ids: Object,
}

export interface DeletingShipmentsFromVehicleCondition {
    vehicle_id: string,
}

export interface DeletingVehicleCondition {
    vehicle_id: string,
}

class VehicleOperation {
    private baseUrl: string;

    constructor() {
        // this.baseUrl = "https://tdlogistics.govt.hu/api/v1/vehicles";
        this.baseUrl = "http://localhost:5000/api/v1/vehicles";
    }

    async checkExist(condition: CheckingExistVehicleCondition) {
        try {
            const response = await axios.post(`${this.baseUrl}/check?vehicle_id=${condition.vehicle_id}`, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, existed: data.existed, message: data.message };
        } catch (error: any) {
            console.log("Error checking exist vehicle: ", error.response.data);
            return error.response.data;
        }
    }

    async createByAgency(info: CreatingVehicleByAgencyInfo) {
        try {
            const response = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error: any) {
            console.log("Error creating new vehicle: ", error.response.data);
            return error.response.data;
        }
    }

    async createByAdmin(info: CreatingVehicleByAdminInfo) {
        try {
            const response = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error: any) {
            console.log("Error creating new vehicle: ", error.response.data);
            return error.response.data;
        }
    }

    async findByStaff(condition: FindingVehicleByStaffCondition) {
        try {
            const response = await axios.post(`${this.baseUrl}/search?staff_id=${condition.staff_id}`, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error finding vehicle: ", error.response.data);
            return error.response.data;
        }
    }

    async findByAdmin(conditions: FindingVehicleByAdminConditions) {
        try {
            const response = await axios.post(`${this.baseUrl}/search`, conditions, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error finding vehicle: ", error.response.data);
            return error.response.data;
        }
    }

    async getShipment(condition: GettingShipmentsContainedByVehicleCondition) {
        try {
            const response = await axios.get(`${this.baseUrl}/get_shipments?vehicle_id=${condition.vehicle_id}`, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error getting shipments contained by vehicle: ", error.response.data);
            return error.response.data;
        }
    }


    async update(info: UpdatingVehicleInfo, condition: UpdatingVehicleCondition) {
        try {
            const response = await axios.put(`${this.baseUrl}/update?vehicle_id=${condition.vehicle_id}`, info, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error: any) {
            console.log("Error updating vehicle: ", error.response.data);
            return error.response.data;
        }
    }

    async addShipments(info: AddingShipmentsToVehicleInfo, condition: AddingShipmentsToVehicleCondition) {
        try {
            const response = await axios.patch(`${this.baseUrl}/add_shipments?vehicle_id=${condition.vehicle_id}`, info, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, info: data.info, message: data.message };
        } catch (error: any) {
            console.log("Error adding shipments to vehicle: ", error.response.data);
            return error.response.data;
        }
    }

    async deleteShipments(info: DeletingShipmentsFromVehicleInfo, condition: DeletingShipmentsFromVehicleCondition) {
        try {
            const response = await axios.patch(`${this.baseUrl}/delete_shipments?vehicle_id=${condition.vehicle_id}`, info, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, info: data.info, message: data.message };
        } catch (error: any) {
            console.log("Error deleting shipments from vehicle: ", error.response.data);
            return error.response.data;
        }
    }

    async deleteVehicle(condition: DeletingVehicleCondition) {
        try {
            const response = await axios.delete(`${this.baseUrl}/delete?vehicle_id=${condition.vehicle_id}`, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error: any) {
            console.log("Error deleting vehicle: ", error.response.data);
            return error.response.data;
        }
    }
}

export interface CreatingStaffByAgencyInfo {
	fullname: string,
    username: string,
    password: string,
    date_of_birth: string,
    cccd: string,
    email: string,
    phone_number: string,
    role: string,
    position: string,
    salary: number, 
    paid_salary: number,
    province: string,
    district: string,
    town: string,
    detail_address: string,
}

export interface CreatingStaffByAdminInfo {
    agency_id: string,
    fullname: string,
    username: string,
    password: string,
    date_of_birth: string,
    cccd: string,
    email: string,
    phone_number: string,
    role: string,
    position: string,
    salary: number, 
    paid_salary: number,
    province: string,
    district: string,
    town: string,
    detail_address: string,
}
  
export interface FindingStaffByStaffCondition {
    staff_id: string,
}
  
export interface FindingStaffByAdminConditions {
    staff_id: string,
    fullname: string,
    username: string,
    date_of_birth: string, 
    cccd: string, 
    email: string,
    phone_number: string,
    role: string,
    province: string,
    district: string,
    town: string,
}
  
export interface UpdatingStaffInfo {
    fullname: string,
    username: string,
    date_of_birth: string, 
    email: string,
    phone_number: string,
    role: string,
    salary: number, 
    paid_salary: string, 
    province: string,
    district: string,
    town: string,
    detail_address: string,
}
  
export interface UpdatingStaffCondition {
    staff_id: string,
}
  
export interface DeletingStaffCondition {
    staff_id: string,
};
  
export interface UpdatingAvatarStaffInfo {
    avatarFile: Buffer,
};
  
export interface UpdatingPasswordsInfo {
    new_password: string,
    confirm_password: string
};
  
export interface FindingAvatarCondition {
    staff_id: string,
}
  
class StaffsOperation {
	private baseUrl: string;

	constructor() {
		// this.baseUrl = "https://tdlogistics.govt.hu/api/v1/staffs";
		this.baseUrl = "http://localhost:5000/api/v1/staffs";
	}

	// ROLE: any
	async getAuthenticatedStaffInfo() {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/get_info`, {
                withCredentials: true,
            });
            
            const data = response.data;
            return { error: data.error, data: data.info, message: data.message };
        } catch (error: any) {
            console.log("Error get authenticated staff information: ", error.response.data);
            return error.response.data;
        }
    }

	// ROLE: any
	async findByStaff(condition: FindingStaffByStaffCondition) : Promise<any> {
		try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}search?staff_id=${condition.staff_id}`, {
				withCredentials: true,
			});
			
			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error get one staff: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: ADMIN, TELLER, HUMAN_RESOURCE_MANAGER, COMPLAINTS_SOLVER, AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER
	async findByAdmin(conditions: FindingStaffByAdminConditions) {
		try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/search`, conditions, {
				withCredentials: true,
			});
			
			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		}     
		catch (error: any) {
			console.log("Error get one staff: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: ADMIN, MANAGER, HUMAN_RESOURCE_MANAGER
	async createByAdmin(info: CreatingStaffByAdminInfo) {
		try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info, {
				withCredentials: true,
			});
			
			const data = response.data;
			return { error: data.error, message: data.message };
		} 
		catch (error: any) {
			console.log("Error create new staff: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER
	async createByAgency(info: CreatingStaffByAgencyInfo) {
		try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info, {
				withCredentials: true,
			});
			
			const data = response.data;
			return { error: data.error, message: data.message };
		} 
		catch (error: any) {
			console.log("Error create new staff: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: ADMIN, MANAGER, HUMAN_RESOURCE_MANAGER, AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER
	async update(info: UpdatingStaffInfo, condition: UpdatingStaffCondition) {
		try {
			const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?staff_id=${condition.staff_id}`, info, {
				withCredentials: true,
			});
			
			const data = response.data;
			return { error: data.error, message: data.message };
		} 
		catch (error: any) {
			console.log("Error create new staff: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: ADMIN, MANAGER, HUMAN_RESOURCE_MANAGER, AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER
	async deleteStaff(condition: DeletingStaffCondition) {
		try {
			const response = await axios.delete(`${this.baseUrl}/delete?staff_id=${condition.staff_id}`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} 
		catch (error: any) {
			console.log("Error deleting staff: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: ADMIN, MANAGER, HUMAN_RESOURCE_MANAGER, AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER
	async updateAvatar(info: UpdatingAvatarStaffInfo, condition: UpdatingStaffCondition) {
		try {       
			// Tạo FormData object và thêm hình ảnh vào đó
			const formData = new FormData();
			formData.append('avatar', info.avatarFile);
	
			// Gửi yêu cầu POST để tải lên hình ảnh
			const response: AxiosResponse = await axios.patch(`${this.baseUrl}/update_avatar?staff_id=${condition.staff_id}`, formData , {
				withCredentials: true,
			});
		
			console.log('Image uploaded successfully:', response.data);
			return response.data; // Trả về dữ liệu phản hồi từ máy chủ
	
		} catch (error: any) {
			console.error('Error uploading image:', error.response.data);
			throw error; // Ném lỗi để xử lý bên ngoài
		}   
	}

    async logout() {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/logout`, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error: any) {
            console.log("Error logging out: ", error.response.data);
            return error.response.data;
        }
    }

	// ROLE: any. But one staff can just change his/her own password.
	// So that, the staff_id in session must be the same with the staff_id in the query. 
	async updatePassword(info: UpdatingPasswordsInfo, condition: UpdatingStaffCondition) {
		try {
			const response: AxiosResponse = await axios.patch(`${this.baseUrl}/update_password?staff_id=${condition.staff_id}`, info , {
				withCredentials: true,
			});
			
			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} 
		catch (error: any) {
			console.log("Error update password: ", error.response.data);
			return error.response.data;
		}    
	}

	// ROLE: any.
	async findAvatar (condition: FindingAvatarCondition) {
		try {
			const response: AxiosResponse = await axios.get(`${this.baseUrl}/get_avatar?staff_id=${condition.staff_id}`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error finding partner staff: ", error.response.data);
			return error.response.data;
		}
	}
}
  
export interface CreateBusinessByAgencyInfo {
	// Representor information
    user_fullname: string,
    user_phone_number: string,
    user_email: string,
    user_date_of_birth: string,
    user_cccd: string,
    user_province: string,
    user_district: string,
    user_town: string,
    user_detail_address: string,
    user_bin: string,
    user_bank: string,

    // Business information
    username: string,
    password: string,
    business_name: string,
    email: string,
    phone_number: string,
    tax_number: string, 
    province: string,
    district: string,
    town: string,
    detail_address: string,
    bin: string,
    bank: string,
}
  
export interface CreateBusinessByAdminInfo {
	// Representor information
    username: string,
    password: string,
    user_fullname: string,
    user_phone_number: string,
    user_email: string,
    user_date_of_birth: string,
    user_cccd: string,
    user_province: string,
    user_district: string,
    user_town: string,
    user_detail_address: string,
    user_bin: string,
    user_bank: string,

    // Business information
    agency_id: string,
    business_name: string,
    email: string,
    phone_number: string,
    tax_number: string, 
    province: string,
    district: string,
    town: string,
    detail_address: string,
    bin: string,
    bank: string,
}
  
export interface FindingBusinessByBusinessCondition {
    business_id: string,
}
  
export interface FindingBusinessByAdminCondition {
	business_id: string,
	agency_id: string,
	username: string,
	business_name: string,
	email: string,
	phone_number: string,
	tax_number: string,
	province: string,
	district: string,
	town: string,
	bin: string,
	bank: string,
}
  
export interface FindingRepresentorByBusinessCondition {
    business_id: string,
}
  
export interface FindingRepresentorByAdminCondition {
	agency_id:string,
	business_id: string,
	fullname: string,
	phone_number: string,
	email: string,
	date_of_birth: string,
	cccd: string,
	province: string,
	district: string,
	town: string,
	bin: string,
	bank: string,
}
  
export interface CheckingExistBusinessCondition {
    tax_number: string,
}
  
export interface UpdatingBusinessCondition {
    business_id: string,
}
  
export interface UpdatingBusinessInfo {
	business_name: string,
	email: string,
	phone_number: string,
	debit: string, 
	province: string,
	district: string,
	town: string,
	detail_address: string,
	bin: string,
	bank: string,
}
  
export interface UpdatingBusinessRepresentorInfo {
	fullname: string,
	phone_number: string,
	email: string,
	date_of_birth: string,
	cccd: string,
	province: string,
	district: string,
	town: string,
	detail_address: string,
	bin: string,
	bank: string,
}
  
export interface DeletingBusinessCondition {
	business_id: string,
	agency_id: string,
}
  
export interface UpdatingContractInfo {
    contractFile: Buffer,
}
  
export interface FindingContractCondition {
    business_id: string,
}
  
class BusinessOperation {
	private baseUrl: string;

	constructor() {
		// this.baseUrl = "https://tdlogistics.govt.hu/api/v1/business";
		this.baseUrl = "http://localhost:5000/api/v1/business";

	}

	async createByAdmin(info: CreateBusinessByAdminInfo) {
		try {
			const response = await axios.post(`${this.baseUrl}/create`, info, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error creating new business: ", error.response.data);
			return error.response.data;
		}
	}

	async createByAgency(info: CreateBusinessByAgencyInfo) {
		try {
			const response = await axios.post(`${this.baseUrl}/create`, info, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error creating new business: ", error.response.data);
			return error.response.data;
		}
	}

	async findByBusiness(condition: FindingBusinessByBusinessCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/search?business_id=${condition.business_id}`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error finding business: ", error.response.data);
			return error.response.data;
		}
	}

	async findByAdmin(conditions: FindingBusinessByAdminCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/search`, conditions, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error finding business: ", error.response.data);
			return error.response.data;
		}
	}

	async findByRepresentorByBusiness(condition: FindingRepresentorByBusinessCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/search_representor`, condition, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error finding representor: ", error.response.data);
			return error.response.data;
		}
	}

	async findByRepresentorByAdmin(conditions: FindingRepresentorByAdminCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/search_representor`, conditions, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error finding representor: ", error.response.data);
			return error.response.data;
		}
	}

	async updateBusiness(info: UpdatingBusinessInfo, condition: UpdatingBusinessCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/update?business_id=${condition.business_id}`, info, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error updating business: ", error.response.data);
			return error.response.data;
		}
	}

	async updateBusinessRepresentor(info: UpdatingBusinessRepresentorInfo, condition: UpdatingBusinessCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/update_business_representor?business_id=${condition.business_id}`, info, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error updating business: ", error.response.data);
			return error.response.data;
		}
	}

	async checkExist(condition: CheckingExistBusinessCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/check?tax_number=${condition.tax_number}`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, existed: data.existed, message: data.message };
		} catch (error: any) {
			console.log("Error checking exist business: ", error.response.data);
			return error.response.data;
		}
	}

	async removeBusiness(condition: DeletingBusinessCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/delete?business_id=${condition.business_id}&agency_id=${condition.agency_id}`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error deleting business: ", error.response.data);
			return error.response.data;
		}
	}

	async updateContract(info: UpdatingContractInfo, condition: UpdatingBusinessCondition) {
		try {        
			// Tạo FormData object 
			const formData = new FormData();
			formData.append('contract', info.contractFile);
	
			// Gửi yêu cầu POST để tải lên hình ảnh
			const response: AxiosResponse = await axios.patch(`${this.baseUrl}/update_contract?business_id=${condition.business_id}`, formData , {
				withCredentials: true,
			});
		
			console.log('File uploaded successfully:', response.data);
			return response.data; // Trả về dữ liệu phản hồi từ máy chủ
	
			} catch (error: any) {
			console.error('Error uploading file:', error.response.data);
			throw error; // Ném lỗi để xử lý bên ngoài
			} 
	}

	async findContract(condition: FindingContractCondition) {
		try {
			const response = await axios.get(`${this.baseUrl}/get_contract?business_id=${condition.business_id}`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error finding contract: ", error.response.data);
			return error.response.data;
		}
	}
}

export interface CreatingPartnerStaffInfo {
	partner_id: string,
	username: string,
	password: string,
	fullname: string,
	email: string,
	phone_number: string,
	date_of_birth: string, 
	cccd: string,
	province: string,
	district: string,
	town: string,
	detail_address: string,
	role: string,
	position: string,
	bin: string,
	bank: string,
}

export interface FindingPartnerStaffByPartnerStaffCondition {
	staff_id: string,
}

export interface FindingPartnerStaffsByPartnerCondtions {
	partner_id: string,
	agency_id: string,
	staff_id: string,
	username: string,
	fullname: string,
	date_of_birth: string, 
	cccd: string,
	email: string,
	phone_number: string,
	province: string,
	district: string,
	town: string,
	position: string,
	bin: string,
	bank: string,
}

export interface FindingPartnerStaffsByAdminConditions {
	partner_id: string,
	agency_id: string,
	staff_id: string,
	username: string,
	fullname: string ,
	date_of_birth: string, 
	email: string,
	phone_number: string,
	province: string,
	district: string,
	town: string,
	position: string,
	bin: string,
	bank: string,
}

export interface UpdatingPartnerStaffCondition {
	staff_id: string,
}

export interface UpdatingPartnerStaffInfo {
	fullname: string,
	username: string,
	date_of_birth: string, 
	email: string,
	phone_number: string,
	province: string,
	district: string,
	town: string,
	detail_address: string,
	position: string,
	bin: string,
	bank: string,
}

export interface DeletingPartnerStaffCondition {
	staff_id: string,
}

export interface CheckingExistPartnerStaffCondition {
	username: string,
	email: string,
	phone_number: string,
	bin: string,
	cccd: string,
}


export interface UpdatingPartnerLicenseImg {
	license_before: Buffer,
	license_after: Buffer,
}

export interface UpdatingPartnerStaffAvatarInfo {
	avatarFile: Buffer
}

export interface FindingPartnerAvatarAndLicenseCondition {
	staff_id: string
};
  
class PartnerStaffOperation {
	private baseUrl: string;

	constructor() {
		// this.baseUrl = "https://tdlogistics.govt.hu/api/v1/partner_staffs";
		this.baseUrl = "http://localhost:5000/api/v1/partner_staffs";
	}

	// ROLE: PARTNER_DRIVER, PARTNER_SHIPPER
	async getAuthenticatedPartnerStaffInfo() {
		try {
			const response = await axios.get(`${this.baseUrl}/get_info`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error getting authenticated partner staff information: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: ADMIN, MANAGER, HUMAN_RESOURCE_MANAGER, AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER
	async create(info: CreatingPartnerStaffInfo) {
		try {
			const response = await axios.post(`${this.baseUrl}/create`, info, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error creating partner staff: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: PARTNER_DRIVER, PARTNER_SHIPPER
	async findByPartnerStaff(condition: FindingPartnerStaffByPartnerStaffCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/search`, condition, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error finding partner staff: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: TRANSPORT_PARTNER_REPRESENTOR
	async findByPartner(conditions: FindingPartnerStaffsByPartnerCondtions) {
		try {
			const response = await axios.post(`${this.baseUrl}/search`, conditions, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error finding partner staff: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: ADMIN, MANAGER, HUMAN_RESOURCE_MANAGER, TELLER, COMPLAINTS_SOLVER, AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER, AGENCY_TELLER, AGENCY_COMPLAINTS_SOLVER 
	async findByAdmin(conditions: FindingPartnerStaffsByAdminConditions) {
		try {
			const response = await axios.post(`${this.baseUrl}/search`, conditions, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error finding partner staff: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: ADMIN, MANAGER, HUMAN_RESOURCE_MANAGER, AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER
	async updatePartnerStaff(info: UpdatingPartnerStaffInfo, condition: UpdatingPartnerStaffCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/update?staff_id=${condition.staff_id}`, info, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error updating partner staff: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: any
	async checkExist(condition: CheckingExistPartnerStaffCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/check?cccd=${condition.cccd}`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, existed: data.existed, message: data.message };
		} catch (error: any) {
			console.log("Error checking exist partner staff: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: ADMIN, MANAGER, HUMAN_RESOURCE_MANAGER, AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER
	async deletePartnerStaff(condition: DeletingPartnerStaffCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/delete?staff_id=${condition.staff_id}`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error deleting business: ", error.response.data);
			return error.response.data;
		}
	}

	// ROLE: PARTNER_DRIVER, PARTNER_SHIPPER
	async updatePassword(info: UpdatingPasswordsInfo) {
		try {
			const response: AxiosResponse = await axios.patch(`${this.baseUrl}/update_password`, info , {
				withCredentials: true,
			});
			
			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} 
		catch (error: any) {
			console.log("Error update password: ", error.response.data);
			return error.response.data;
		}    
	}

	// ROLE: ADMIN, MANAGER, HUMAN_RESOURCE_MANAGER, AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER
	async updatePartnerStaffAvatar(info: UpdatingPartnerStaffAvatarInfo, condition: UpdatingPartnerStaffCondition) {
		try {      
			// Tạo FormData object và thêm hình ảnh vào đó
			const formData = new FormData();
			formData.append('avatar', info.avatarFile);

			const response: AxiosResponse = await axios.patch(`${this.baseUrl}/update_avatar?staff_id=${condition.staff_id}`, formData , {
			withCredentials: true,
		});
		
			console.log('Image uploaded successfully:', response.data);
			return response.data; // Trả về dữ liệu phản hồi từ máy chủ

		} catch (error: any) {
			console.error('Error uploading image:', error.response.data);
			throw error; // Ném lỗi để xử lý bên ngoài
		}
	}
	
	// ROLE: ADMIN, MANAGER, HUMAN_RESOURCE_MANAGER, AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER
	async updatePartnerStaffLicense(info: UpdatingPartnerLicenseImg, condition: UpdatingPartnerStaffCondition) {
		try {
			// Tạo FormData object và thêm hình ảnh vào đó
			const formData = new FormData();

			formData.append('license_before', info.license_before);
			formData.append('license_after', info.license_after);

			// Gửi yêu cầu POST để tải lên hình ảnh
			const response: AxiosResponse = await axios.patch(`${this.baseUrl}/update_licenses?staff_id=${condition.staff_id}`, formData , {
			withCredentials: true,
		});
		
			console.log('Image uploaded successfully:', response.data);
			return response.data; // Trả về dữ liệu phản hồi từ máy chủ

		} catch (error: any) {
			console.error('Error uploading image:', error.response.data);
			throw error; // Ném lỗi để xử lý bên ngoài
		}
	}

	// ROLE: ADMIN, MANAGER, HUMAN_RESOURCE_MANAGER, AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER, PARTNER_DRIVER, PARTNER_SHIPPER
	async findPartnerStaffAvatar(condition: FindingPartnerAvatarAndLicenseCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/get_avatar?staff_id=${condition.staff_id}`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error finding partner staff: ", error.response.data);
			return error.response.data;
		}
	} 

	// ROLE: ADMIN, MANAGER, HUMAN_RESOURCE_MANAGER, AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER, PARTNER_DRIVER, PARTNER_SHIPPER
	async findPartnerStaffLicenseBefore(condition: FindingPartnerAvatarAndLicenseCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/get_license_before?staff_id=${condition.staff_id}`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error finding partner staff: ", error.response.data);
			return error.response.data;
		}
	} 

	// ROLE: ADMIN, MANAGER, HUMAN_RESOURCE_MANAGER, AGENCY_MANAGER, AGENCY_HUMAN_RESOURCE_MANAGER, PARTNER_DRIVER, PARTNER_SHIPPER
	async findPartnerStaffLicenseAfter(condition: FindingPartnerAvatarAndLicenseCondition) {
		try {
			const response = await axios.post(`${this.baseUrl}/get_license_after?staff_id=${condition.staff_id}`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error finding partner staff: ", error.response.data);
			return error.response.data;
		}
	} 
}
  
export interface GettingTasksCondition {
	option?: number,
}

export interface ConfirmingCompletedTaskInfo {
	id: number,
}

export interface GettingHistoryInfo {
	option?: number,
}

class ShippersOperation {
	private baseUrl: string;
	constructor() {
		this.baseUrl = "http://localhost:5000/api/v1/shippers";
	}

	async getTask(condition: GettingTasksCondition) {
		try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/get_tasks`, condition, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error getting tasks: ", error.response.data);
			return error.response.data;
		}
	}

	async confirmCompletedTask(info: ConfirmingCompletedTaskInfo) {
		try {
			const response: AxiosResponse = await axios.patch(`${this.baseUrl}/confirm_completed`, info, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error confirming completed task: ", error.response.data);
			return error.response.data;
		}
	}

	async getHistory(condition: GettingHistoryInfo) {
		try {
			const response: AxiosResponse = await axios.post(`${this.baseUrl}/get_history`, condition, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error getting history: ", error.response.data);
			return error.response.data;
		}
	}
}

//Shipment Operation
export interface CreatingShipmentInfo {
    transport_partner_id?: string
}

export interface FindingShipmentConditions {
    shipment_id?: string,
    tranport_partner_id?: string,
    staff_id?: string
}

export interface DecomposingShipmentInfo {
    order_ids: object
}

export interface OperatingWithOrderInfo {
    order_ids: object
}

export interface ShipmentID {
    shipment_id: string
}

export interface UndertakingShipmentInfo {
    shipment_id: string,
    status_code: number
}

class ShipmentsOperation {
    private baseUrl: string;
	constructor() {
        // this.baseUrl = "https://tdlogistics.govt.hu/api/v1/shipments";
		this.baseUrl = "http://localhost:5000/api/v1/shipments";
	}

    async check(condition: ShipmentID) {
        try {
			const response = await axios.get(`${this.baseUrl}/check?shipment_id=${condition.shipment_id}`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, existed: data.existed, message: data.message };
		} catch (error: any) {
			console.log("Error checking exist shipment: ", error.response.data);
			return error.response.data;
		}
    }

    // ROLE: ADMIN, MANAGER, TELLER, AGENCY_MANAGER, AGENCY_TELLER
	async create(info: CreatingShipmentInfo) {
		try {
			const response = await axios.post(`${this.baseUrl}/create`, info, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error creating shipment: ", error.response.data);
			return error.response.data;
		}
	}

    async getOrdersFromShipment(condition: ShipmentID) {
        try {
			const response = await axios.get(`${this.baseUrl}/get_orders?shipment_id=${condition.shipment_id}`, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error getting orders from shipment: ", error.response.data);
			return error.response.data;
		}
    }

    // ROLE: ADMIN, MANAGER, TELLER, AGENCY_MANAGER, AGENCY_TELLER
    async addOrdersToShipment(condition: ShipmentID, info: OperatingWithOrderInfo) {
        try {
			const response = await axios.post(`${this.baseUrl}/add_orders?shipment_id=${condition.shipment_id}`, info, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error adding orders to shipment: ", error.response.data);
			return error.response.data;
		}
    }

    // ROLE: ADMIN, MANAGER, TELLER, AGENCY_MANAGER, AGENCY_TELLER
    async deleteOrderFromShipment(condition: ShipmentID, info: OperatingWithOrderInfo) {
        try {
			const response = await axios.post(`${this.baseUrl}/remove_orders?shipment_id=${condition.shipment_id}`, info, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error deleting order from shipment: ", error.response.data);
			return error.response.data;
		}
    }

    // ROLE: AGENCY_MANAGER, AGENCY_TELLER
    async confirmCreate(condition: ShipmentID) {
        try {
			const response = await axios.post(`${this.baseUrl}/confirm_create`, condition, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error confirming creat shipment: ", error.response.data);
			return error.response.data;
		}  
    }

    // ROLE: ADMIN, MANAGER, TELLER, AGENCY_MANAGER, AGENCY_TELLER
    async get(condition: FindingShipmentConditions) {
        try {
			const response = await axios.post(`${this.baseUrl}/get`, condition, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, data: data.data, message: data.message };
		} catch (error: any) {
			console.log("Error getting shipments: ", error.response.data);
			return error.response.data;
		} 
    }

    // ROLE: ADMIN, MANAGER, TELLER, AGENCY_MANAGER, AGENCY_TELLER
    async delete(condition: ShipmentID) {
        try {
			const response = await axios.delete(`${this.baseUrl}/delete?shipment_id=${condition.shipment_id}`,{
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error deleting shipment: ", error.response.data);
			return error.response.data;
		} 
    }

    // ROLE: ADMIN, MANAGER, TELLER, AGENCY_MANAGER, AGENCY_TELLER
    async decompose(condition: ShipmentID, info: DecomposingShipmentInfo) {
        try {
			const response = await axios.post(`${this.baseUrl}/decompose?shipment_id=${condition.shipment_id}`, info, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error decomposing shipment: ", error.response.data);
			return error.response.data;
		} 
    }

    // ROLE: AGENCY_MANAGER, AGENCY_TELLER
    async receive(condition: ShipmentID) {
        try {
			const response = await axios.post(`${this.baseUrl}/receive`, condition, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error receiving shipment: ", error.response.data);
			return error.response.data;
		} 
    }
    
    // ROLE: SHIPPER, AGENCY_SHIPPER, PARTNER_SHIPPER
    async undertake(info: UndertakingShipmentInfo) {
        try {
			const response = await axios.post(`${this.baseUrl}/undertake`, info, {
				withCredentials: true,
			});

			const data = response.data;
			return { error: data.error, message: data.message };
		} catch (error: any) {
			console.log("Error undertaking shipment: ", error.response.data);
			return error.response.data;
		}
    }
}

export interface CheckingExistOrderCondition {
    order_id: string,
}

export interface GettingOrdersConditions {
    name_receiver?: string,
    phone_receiver?: string,
    province_source?: string,
    district_source?: string,
    ward_source?: string,
    province_dest?: string,
    district_dest?: string,
    ward_dest?: string,
    service_type?: number,
}

export interface CreatingOrderInformation {
    name_receiver: string,
    phone_number_receiver: string,
    mass: number,
    height: number,
    width: number,
    length: number,
    province_source: string,
    district_source: string,
    ward_source: string,
    detail_source: string,
    province_dest: string,
    district_dest: string,
    ward_dest: string,
    detail_dest: string,
    long_source: number,
    lat_source: number,
    long_destination: number,
    lat_destination: number,
    COD: number,
    service_type: number,
}

export interface UpdatingOrderCondition {
    order_id: string,
}

export interface UpdatingOrderInfo {
    mass: number,
    height: number,
    width: number,
    length: number,
    COD: number,
}

export interface CancelingOrderCondition {
    order_id: string,
}

class OrdersOperation {
    private baseUrl: string;
    constructor() {
        this.baseUrl = "http://localhost:5000/api/v1/orders";
    }

    async get(conditions: GettingOrdersConditions) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/search`, conditions, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, data: data.data, message: data.message };
        } catch (error: any) {
            console.log("Error getting orders: ", error.response.data);
            return error.response.data;
        }
    }

    async checkExist(condition: CheckingExistOrderCondition) {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/check?order_id=${condition.order_id}`, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, exist: data.existed, message: data.message };
        } catch (error: any) {
            console.log("Error checking exist order: ", error.response.data);
            return error.response.data;
        }
    }

    async create(socket: any, info: CreatingOrderInformation) {
        try {
            socket.emit("notifyNewOrderFromUser", info)
        } catch (error: any) {
            console.log("Error creating new order: ", error);
        }
    }

    async update(info: UpdatingOrderInfo, condition: UpdatingOrderCondition) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?order_id=${condition.order_id}`, info, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error: any) {
            console.log("Error updating order: ", error.response.data);
            return error.response.data;
        }
    }

    async cancel(condition: CancelingOrderCondition) {
        try {
            const response: AxiosResponse = await axios.delete(`${this.baseUrl}/cancel?order_id=${condition.order_id}`, {
                withCredentials: true,
            });

            const data = response.data;
            return { error: data.error, message: data.message };
        } catch (error: any) {
            console.log("Error canceling order: ", error.response.data);
            return error.response.data;
        }
    }
}

export interface GettingTasksConditions {
    task?: string,
    priority?: number,
    deadline?: string,
    completed?: boolean,
}

export interface CreatingNewTaskInfo {
    task: string,
    priority: number,
    deadline: string,
}

export interface UpdatingTaskInfo {
    task: string,
    priority: number,
    completed: boolean,
}

export interface TaskId {
    id: number,
}

class ScheduleOperation {
    private baseUrl: string;
    constructor() {
        this.baseUrl = "http://localhost:5000/api/v1/schedules";
    }

    async get(conditions: GettingTasksConditions) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/search`, conditions, {
                withCredentials: true
            });

            const data = response.data;
            return { error: data, data: data.data, message: data.message }
        } catch (error: any) {
            console.log("Error getting tasks: ", error.response.data);
            return error.response.data;
        }
    }

    async create(info: CreatingNewTaskInfo) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info, {
                withCredentials: true
            });

            const data = response.data;
            return { error: data, message: data.message }
        } catch (error: any) {
            console.log("Error creating new tasks: ", error.response.data);
            return error.response.data;
        }
    }

    async update(info: UpdatingTaskInfo, condition: TaskId) {
        try {
            const response: AxiosResponse = await axios.put(`${this.baseUrl}/update?id=${condition.id}`, info, {
                withCredentials: true
            });

            const data = response.data;
            return { error: data, message: data.message }
        } catch (error: any) {
            console.log("Error updating tasks: ", error.response.data);
            return error.response.data;
        }
    }

    async deleteTask(condition: TaskId) {
        try {
            const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete?id=${condition.id}`, {
                withCredentials: true
            });

            const data = response.data;
            return { error: data, message: data.message }
        } catch (error: any) {
            console.log("Error deleting tasks: ", error.response.data);
            return error.response.data;
        }
    }
}

export interface AdministrativeInfo {
    province?: string,
    district?: string,
    ward?: string
}

class AdministrativeOperation {
    private baseUrl: string;
    constructor() {
        this.baseUrl = "http://localhost:5000/api/v1/administrative";
    }

    async get(conditions: AdministrativeInfo) {
        try {
            const response: AxiosResponse = await axios.post(`${this.baseUrl}/search`, conditions, {
                withCredentials: true
            });

            const data = response.data;
            return { error: data, data: data.data, message: data.message }
        } catch (error: any) {
            console.log("Error getting tasks: ", error.response.data);
            return error.response.data;
        }
    }
}

export {
	UsersAuthenticate,
	StaffsAuthenticate,
	UsersOperation,
	AgencyOperation,
	TransportPartnersOperation,
	StaffsOperation,
	VehicleOperation,
	BusinessOperation,
	PartnerStaffOperation,
	ShippersOperation,
    ShipmentsOperation,
    OrdersOperation,
    ScheduleOperation,
    AdministrativeOperation,
}