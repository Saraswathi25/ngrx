import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../../src/environments/environment';
import { AuthRes } from "../models/authRes.model";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthRes> {
    return this.http.post<AuthRes>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`,
      { email, password, returnSecureToken: true }
    );
  }
  formatUser(data: AuthRes) {
    const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000)
    const user = new User(data.email, data.idToken, data.localId, expirationDate);
    return user;
  }
}
