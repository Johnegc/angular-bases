import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age:  number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`
  }

  public changeHero(): void {
    this.name = 'Spiderman';
  }

  public changeAge(): void {
    this.age = 35;
  }

  public resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;

    //* Cambiar el h1 principal
    //document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>'

    //* Actualizar todos los selectores h1
    //document.querySelectorAll('h1')!.forEach(element => {
    //  element.innerHTML = '<h1>Desde Angular</h1>'
    //})
  }
}
