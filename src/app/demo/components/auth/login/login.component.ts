import { Component } from '@angular/core';
import { AuthService } from 'src/app/demo/service/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';

interface LoginResponse {
    token: string;
    message: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
    providers: [MessageService],
})
export class LoginComponent {
    valCheck: string[] = ['remember'];

    password!: string;
    username!: string;
    loading = false;
    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService,
        private cookieService: CookieService
    ) {}

    login() {
        this.loading = true;
        this.authService
            .login({
                username: this.username,
                password: this.password,
            })
            .subscribe(
                (res: LoginResponse) => {
                    this.cookieService.set('jwt', res?.token);
                    this.loading = false;
                    this.router.navigate(['/demo']);
                },
                (err) => {
                    this.loading = false;
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: err.error.message,
                    });
                }
            );
    }
}
