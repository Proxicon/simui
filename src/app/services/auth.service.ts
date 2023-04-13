import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  token$: Observable<string | null> = this.tokenSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<{ token: string }> {
    const body = { username, password };
    const url = 'https://sim.proxicon.co.za/token';

    return this.http.post<{ token: string }>(url, body).pipe(
      tap(({ token }) => {
        this.tokenSubject.next(token);
      })
    );
  }

  logout(): void {
    this.tokenSubject.next(null);
  }
}
