import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategorieDto } from '../core/dtos/categorie.dto';
import { Observable } from 'rxjs';
import { Categorie } from '../core/models/categorie.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class CategorieService {

  private baseUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient){}

  creerCategorie(dto: CategorieDto): Observable<Categorie> {
    return this.http.post<Categorie>(this.baseUrl, dto);
  }

  listerCategories(): Observable<CategorieDto[]> {
    return this.http.get<CategorieDto[]>(this.baseUrl);
  }

  trouverCategorieParId(id: string): Observable<CategorieDto> {
    return this.http.get<CategorieDto>(`${this.baseUrl}/${id}`);
  }

  modifierCategorie(id: string, dto: CategorieDto): Observable<CategorieDto> {
    return this.http.put<CategorieDto>(`${this.baseUrl}/${id}`, dto);
  }

  supprimerCategorie(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
}
