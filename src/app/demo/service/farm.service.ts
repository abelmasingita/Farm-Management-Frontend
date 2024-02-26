import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFarm } from '../utils/IFarm';

@Injectable({
    providedIn: 'root',
})
export class FarmService {
    private BaseUrl: string =
        'https://farm-management-sys-backend.onrender.com';
    constructor(private http: HttpClient) {}

    getFams() {
        return this.http.get<IFarm[]>(`${this.BaseUrl}/api/farm`);
    }

    deleteFarm(id: string) {
        return this.http.delete(`${this.BaseUrl}/api/farm/${id}`);
    }

    createFarm(payload: IFarm) {
        return this.http.post(`${this.BaseUrl}/api/farm`, payload);
    }

    updateFarm(id: string, payload: IFarm) {
        return this.http.put(`${this.BaseUrl}/api/farm/${id}`, payload);
    }
}
