import { Component, Input } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {

  minions: Minion[] = [
      {
        name: "Kevin",
        bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
        img: "assets/img/kevin.jpg",
        birth: "1951",
        side:"de los buenos"
      },
      {
        name: "Josua",
        bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
        img: "assets/img/Josua.jpg",
        birth: "1672",
        side:"malvado"
      },
      {
        name: "Dave",
        bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
        img: "assets/img/dave.jpg",
        birth: "1723",
        side: "de los buenos"
      },
      {
        name: "Mudito",
        bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
        img: "assets/img/mudito.jpeg",
        birth: "1379",
        side:"de los buenos"
      },
      {
        name: "Llongueras",
        bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
        img: "assets/img/llongueras.jpg",
        birth: "1687",
        side: "malvado"
      },
      {
        name: "Kevin",
        bio: "Le va el cante, dar la nota, ama los karaokes, es el rey y reina de la fiesta. Invítalo a tu fiesta o te arrepentirás.",
        img: "assets/img/minionce.jpg",
        birth: "1976",
        side: "de los buenos"
      },
      {
        name: "Lobeznion",
        bio: "No lo enfades, este bichillo tiene muy malas pulgas...aunque sólo mide medio metro y ¡no puede ser más gracioso!",
        img: "assets/img/lobeznion.jpg",
        birth: "2017",
        side: "malvado"
      },
      {
        name: "Minion Presley",
        bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
        img: "assets/img/minion-presley.jpg",
        birth: "2017",
        side: "malvado"
      }
  ];

  favoriteMinion: string[] = [];

  favorite(minionName:string){
    if(this.favoriteMinion.includes(minionName)){
      this.favoriteMinion.filter(minion => minion != minionName);
    }else{
      this.favoriteMinion.push(minionName);
    }
  }

  @Input() name:string = ''

  get filterMinions(){
      return this.minions.filter(minion => minion.name === this.name)
  }



}
