import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, ChangerMotDePasseDto, CreerPersonneDto, LoginRequest, PersonneDto, ReinitialisationMotDePasseDto } from '../core/dtos/personne.dto';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  
  private baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient){} 

  inscription(dto: CreerPersonneDto): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.baseUrl}/register`, dto);
  }

  connexion(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, request);
  }

  listerPersonnes(): Observable<PersonneDto[]> {
    return this.http.get<PersonneDto[]>(`${this.baseUrl}/personnes`);
  }

  personneConnecter(): Observable<PersonneDto> {
    return this.http.get<PersonneDto>(`${this.baseUrl}/personneconnecter`);
  }

  motDePasseOublie(email: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/forgot-password`, { email });
  }

  reinitialiserMotDePasse(dto: ReinitialisationMotDePasseDto): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/reset-password`, dto);
  }

  deconnexion(): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/logout`, {});
  }

  changerMotDePasse(dto: ChangerMotDePasseDto): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/change-password/${dto.ancienMotDePasse}`, dto);
  }
}
