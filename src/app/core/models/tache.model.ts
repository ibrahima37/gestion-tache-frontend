import { Priorite } from "../enums/priorite.enum";
import { Statut } from "../enums/statut.enum";
import { TypeTache } from "../enums/type-tache.enum";
import { Categorie } from "./categorie.model";

export interface Tache {
  id?: string;

  titre: string;
  description?: string;

  dateDebut?: string;
  dateFin?: string;

  creeParID: string;
  assignedId?: string;

  priorite: Priorite;
  statut: Statut;
  typeTache: TypeTache;

  categorie?: Categorie;

  dateCreation?: string;
  dateModification?: string;
}