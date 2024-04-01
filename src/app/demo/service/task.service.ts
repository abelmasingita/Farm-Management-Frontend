import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee, ITask } from '../utils/IEmployee.Management';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private BaseUrl: string =
        'https://farm-management-sys-backend.onrender.com';
    constructor(private http: HttpClient) {}

    getTasks() {
        return this.http.get<ITask[]>(`${this.BaseUrl}/api/task`);
    }

    deleteTask(id: string) {
        return this.http.delete(`${this.BaseUrl}/api/task/${id}`);
    }

    createTask(payload: ITask) {
        return this.http.post(`${this.BaseUrl}/api/task`, payload);
    }

    updateTask(id: string, payload: ITask) {
        return this.http.put(`${this.BaseUrl}/api/task/${id}`, payload);
    }
}
