import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public deleteHero?: string;
  public heroNames: string [] = ['Spiderman','Ironman', 'Hulk', 'She Hulk', 'Thor'];

  public removeLastHero():void {
    this.deleteHero = this.heroNames.pop();
  }
}
