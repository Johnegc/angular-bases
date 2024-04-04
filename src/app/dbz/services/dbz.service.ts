import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [{
      id: uuid()
    , name: "Krillin"
    , power: 1000
    },{
      id: uuid()
    , name: 'Goku'
    , power: 1000
    },{
      id: uuid()
    , name: 'Vegeta'
    , power: 7500
    }
  ];

  public onNewCharacter( character: Character): void {
    //console.log('MainPage');
    //console.log( {character} );

    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  public onDeleteCharacter(index: number): void {
    //console.log('MainPage');
    //console.log( {index} );

    this.characters.splice(index, 1);
  }

  public onDeleteCharacterById (id: string): void {
    this.characters = this.characters.filter( c => c.id !== id );
  }

}
