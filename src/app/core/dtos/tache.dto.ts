import { Priorite } from "../enums/priorite.enum";
import { Statut } from "../enums/statut.enum";
import { TypeTache } from "../enums/type-tache.enum";

export interface TacheDto{
    id?: string;
    titre: string;
    description: string;
    dateDebut?: string;
    dateFin?: string;
    creerParId: string;
    assignedId?: string;
    priorite: Priorite;
    statut: Statut;
    typeTache: TypeTache;
    categorieId?: string;
    dateCreation?: string;
    dateModification?: string;
}

export interface CreerTacheDto {
  titre: string;
  description?: string;
  dateDebut?: string;
  dateFin?: string;
  priorite: Priorite;
  statut: Statut;
  assignedId?: string;
  categorieId?: string;
  typeTache?: TypeTache;
}

export interface ModifierStatutTacheDto{
    statut: Statut;
}


