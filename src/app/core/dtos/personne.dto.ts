import { ProfilDto } from "./profil.dto";

export interface PersonneDto{
    id: string;
    nom: string;
    prenoms: string;
    email: string;
    motDePasse: string;
    telephone?: string;
    adresse?: string;
    dateInscription: Date;
    statut: boolean;
    profils: ProfilDto[];
}

export interface CreerPersonneDto {
    nom: string;
    prenoms: string;
    email: string;
    motDePasse: string;
    telephone?: string;
    adresse?: string;
}

export interface LoginRequest{
    email: string;
    motDePasse: string;
}

export interface ReinitialisationMotDePasseDto {
    token: string;
    nouveauMotDePasse: string;
    confirmationMotDePasse: string;
}

 export interface ChangerMotDePasseDto {
    ancienMotDePasse: string;
    nouveauMotDePasse: string;
    confirmationMotDePasse: string;
 }

 export interface AuthResponse{
    
    token: string;

    personneId: string;

    nom: string;

    prenoms: string;

    email: string;

    profilList: ProfilDto[];

 }