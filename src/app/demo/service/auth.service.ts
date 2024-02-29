import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private BaseUrl: string =
        'https://farm-management-sys-backend.onrender.com';

    constructor(private http: HttpClient, private session: SessionService) {}

    login(credentials: { username: string; password: string }) {
        return this.http
            .post(`${this.BaseUrl}/api/auth/login`, credentials, {
                withCredentials: true,
            })
            .pipe(
                tap(() => {
                    this.session.startSessionTimer();
                }),
                catchError((error) => {
                    return throwError(error);
                })
            );
    }

    logout() {
        return this.http.post('/api/logout', {}, { withCredentials: true });
    }

    isAuthenticated() {
        return true;
    }
}
