import { department } from "./department.model";
import { role } from "./role.model";

export interface employee {

    employeeId?: number,
    firstName: String,
    lastName:String;
    gender: String,
    dateOfBirth: String,
    email: String,
    phone: String,
    address: String,
    nationalId: String,
    maritalStatus: String,
    emergencyContactName: String,
    emergencyContactPhone: String,
    department: department | null,
    position: String,
    skillSet: String,
    employmentStartDate: String,
    employmentEndDate: String | null,
    salary: String,
    employmentStatus: String,
    bankAccountNumber: String,
    manager: employee | null,
    role: role | null
}