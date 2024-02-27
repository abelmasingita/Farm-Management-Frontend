import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICrop } from '../utils/IFarm.Management';

@Injectable({
    providedIn: 'root',
})
export class CropService {
    private BaseUrl: string =
        'https://farm-management-sys-backend.onrender.com';
    constructor(private http: HttpClient) {}

    getCrops() {
        return this.http.get<ICrop[]>(`${this.BaseUrl}/api/crop`);
    }

    deleteCrop(id: string) {
        return this.http.delete(`${this.BaseUrl}/api/crop/${id}`);
    }

    createCrop(payload: ICrop) {
        return this.http.post(`${this.BaseUrl}/api/crop`, payload);
    }

    updateCrop(id: string, payload: ICrop) {
        return this.http.put(`${this.BaseUrl}/api/crop/${id}`, payload);
    }
}
