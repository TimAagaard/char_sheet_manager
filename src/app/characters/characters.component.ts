import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
	
	characters: Character[] = [];
	
	selectedCharacter?: Character;
	onSelect(character: Character): void {
		this.selectedCharacter = character;
	}
	
	addCharacter() {
		this.characters.push(new Character);
	}

  constructor() { }

  ngOnInit(): void {
  }

}
