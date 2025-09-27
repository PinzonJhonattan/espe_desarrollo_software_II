import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list';
  
interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent],
  templateUrl: './dragonball-super.html', 
})
export class DragonballSuper {
  name = signal<string>('');
  power = signal<number>(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 10000},
    { id: 2, name: 'Vegeta', power: 9000},
    {id: 3, name: 'piccolo', power: 8000},
    {id: 4, name: 'yamcha', power: 500}
  ]);

  poweClass = computed(() => {
    
    return {
      'text-danger': true,
    }
  });

  addCharacter() {
    if(!this.name() && !this.power() && this.power() < 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }    

    const newListCharacters = [...this.characters(), newCharacter];

    //this.characters().push(newCharacter);
    this.characters.update((list) => [...list, newCharacter]);
    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }
}
