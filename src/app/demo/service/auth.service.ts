import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { SessionService } from './session.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private BaseUrl: string =
        'https://farm-management-sys-backend.onrender.com';
    private isLoggedIn: boolean = false;

    constructor(
        private http: HttpClient,
        private session: SessionService,
        private cookieService: CookieService
    ) {}

    login(credentials: { username: string; password: string }) {
        return this.http
            .post(`${this.BaseUrl}/api/auth/login`, credentials, {
                withCredentials: true,
            })
            .pipe(
                tap(() => {
                    this.isLoggedIn = true;
                    this.session.startSessionTimer();
                }),
                catchError((error) => {
                    this.isLoggedIn = false;
                    return throwError(error);
                })
            );
    }

    logout() {
        this.isLoggedIn = false;
        this.cookieService.deleteAll();
    }

    isAuthenticated(): boolean {
        const jwt = this.cookieService.get('jwt');

        if (jwt != null && jwt !== '') {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
        return !!this.isLoggedIn;
    }
}
