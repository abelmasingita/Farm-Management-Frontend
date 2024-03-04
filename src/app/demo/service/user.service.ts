import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRole, IUser } from '../utils/IUser.Management';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private BaseUrl: string =
        'https://farm-management-sys-backend.onrender.com';
    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<IUser[]>(`${this.BaseUrl}/api/user`);
    }

    deleteUser(id: string) {
        return this.http.delete(`${this.BaseUrl}/api/user/${id}`);
    }

    createUser(payload: IUser) {
        return this.http.post(`${this.BaseUrl}/api/user`, payload);
    }

    updateUser(id: string, payload: IUser) {
        return this.http.put(`${this.BaseUrl}/api/user/${id}`, payload);
    }
    getRoles() {
        return this.http.get<IRole[]>(`${this.BaseUrl}/api/user/role`);
    }
}
