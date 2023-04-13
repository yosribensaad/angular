import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/Emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  ngOnInit(): void {
      }
  ListeEmploi: Emploi[] = [{reference:"1", titre:"Developpeur", entreprise:"Sopra", etat:true},
  {reference:"2", titre:"editeur", entreprise:"Sopra", etat:false},
  {reference:"3", titre:"testeur", entreprise:"Sopra", etat:false}, 
  ]
  Bilan() {
    const nonCloturees = this.ListeEmploi.filter(emploi => emploi.etat === true).length;
    alert(`Il y a ${nonCloturees} offres d'emploi non clôturées.`);}
    search='';
}
     