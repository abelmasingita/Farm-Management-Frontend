import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../utils/IEmployee.Management';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    private BaseUrl: string =
        'https://farm-management-sys-backend.onrender.com';
    constructor(private http: HttpClient) {}

    getEmployees() {
        return this.http.get<IEmployee[]>(`${this.BaseUrl}/api/employee`);
    }

    deleteEmployee(id: string) {
        return this.http.delete(`${this.BaseUrl}/api/employee/${id}`);
    }

    createEmployee(payload: IEmployee) {
        return this.http.post(`${this.BaseUrl}/api/employee`, payload);
    }

    updateEmployee(id: string, payload: IEmployee) {
        return this.http.put(`${this.BaseUrl}/api/employee/${id}`, payload);
    }
}
