import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFarm } from '../utils/IFarm';

@Injectable({
    providedIn: 'root',
})
export class FarmService {
    constructor(private http: HttpClient) {}

    getFams() {
        return this.http.get<IFarm[]>(
            'https://farm-management-sys-backend.onrender.com/api/farm'
        );
    }

    deleteFarm(id: string) {
        return this.http.delete(
            `https://farm-management-sys-backend.onrender.com/api/farm/${id}`
        );
    }
}
