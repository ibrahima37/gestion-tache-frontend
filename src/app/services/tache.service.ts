import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreerTacheDto, ModifierStatutTacheDto, TacheDto } from '../core/dtos/tache.dto';

@Injectable({
  providedIn: 'root',
})
export class TacheService {

  private baseUrl = `${environment.apiUrl}/taches`;
  
  constructor(private http: HttpClient){}

  // Créer une tâche
  creerTache(dto: CreerTacheDto): Observable<TacheDto> {
    return this.http.post<TacheDto>(this.baseUrl, dto);
  }

  // Attribuer une tâche à une personne
  attribuerTache(id: string, personneId: string): Observable<TacheDto> {
    return this.http.patch<TacheDto>(`${this.baseUrl}/${id}/attribution/${personneId}`, {});
  }

  // Lister toutes les tâches
  listerTaches(): Observable<TacheDto[]> {
    return this.http.get<TacheDto[]>(this.baseUrl);
  }

  // Trouver une tâche par ID
  trouverTacheParId(id: string): Observable<TacheDto> {
    return this.http.get<TacheDto>(`${this.baseUrl}/${id}`);
  }

  // Lister les tâches par personne
  listerTachesParPersonne(personneId: string): Observable<TacheDto[]> {
    return this.http.get<TacheDto[]>(`${this.baseUrl}/personne/${personneId}`);
  }

  // Modifier une tâche
  modifierTache(id: string, dto: CreerTacheDto): Observable<TacheDto> {
    return this.http.put<TacheDto>(`${this.baseUrl}/${id}`, dto);
  }

  // Modifier le statut d'une tâche
  modifierStatut(id: string, dto: ModifierStatutTacheDto): Observable<TacheDto> {
    return this.http.patch<TacheDto>(`${this.baseUrl}/${id}/statut`, dto);
  }

  // Supprimer une tâche
  supprimerTache(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
}
