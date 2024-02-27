import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IField } from '../utils/IFarm.Management';

@Injectable({
    providedIn: 'root',
})
export class FieldService {
    private BaseUrl: string =
        'https://farm-management-sys-backend.onrender.com';
    constructor(private http: HttpClient) {}

    getFields() {
        return this.http.get<IField[]>(`${this.BaseUrl}/api/field`);
    }

    deleteField(id: string) {
        return this.http.delete(`${this.BaseUrl}/api/field/${id}`);
    }

    createField(payload: IField) {
        return this.http.post(`${this.BaseUrl}/api/field`, payload);
    }

    updateField(id: string, payload: IField) {
        return this.http.put(`${this.BaseUrl}/api/field/${id}`, payload);
    }
}
