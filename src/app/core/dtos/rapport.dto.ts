import { StatutRapport } from "../enums/statut-rapport.enum";
import { TacheDto } from "./tache.dto";

export interface RapportDto{
    id: string;
    titre: string;
    contenu: string;
    auteurId: string;
    nomFichier: string;
    chemeinFichier: string;
    dateRapport: Date;
    statutRapport: StatutRapport;
    tache: TacheDto;
}

