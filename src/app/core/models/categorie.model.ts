import { Tache } from "./tache.model";

export interface Categorie {
  id?: string;
  nomCategorie: string;
  tacheList?: Tache[];
}