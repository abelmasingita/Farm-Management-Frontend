import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { timer, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SessionService {
    private timerSubscription: Subscription;

    constructor(private http: HttpClient, private router: Router) {}

    startSessionTimer() {
        this.timerSubscription = timer(3600000) // 1 hour in milliseconds
            .subscribe(() => {
                this.logout();
            });
    }

    resetSessionTimer() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
        this.startSessionTimer();
    }

    logout() {
        this.router.navigate(['/']);
    }
}
