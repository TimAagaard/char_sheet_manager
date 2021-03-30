import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
	
	@Input() character?: Character;
	
	exportCharacter() {
		let dataStr = JSON.stringify(this.character);
		let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
		let filename = 'character.json';
		let linkElement = document.createElement('a');
		linkElement.setAttribute('href', dataUri);
		linkElement.setAttribute('download', filename);
		linkElement.click();
	}
	
	importCharacter(e: any) {
		
		
		let file = e.target.files[0];
		
		let a = this.read_file(file);
		
		a.then((str) => {
			let c = JSON.parse(<string>str);
			/*
			for(const property in c) {
				this.character![property] = c[property];
			}
			*/
			this.character!.name = c.name;
			this.character!.strength = c.strength;
			this.character!.dexterity = c.dexterity;
			this.character!.mind = c.mind;
			this.character!.presence = c.presence;
			this.character!.damage = c.damage;
			this.character!.tenacityModifier = c.tenacityModifier;
			this.character!.skills = c.skills;
		})
		
		
		
	}
	
	read_file(file: any) {
		
		let reader = new FileReader();
		
		
		
		reader.readAsText(file);
		
		return new Promise(function(resolve, reject) {
			reader.onload = function() {
				resolve(reader.result);
			};
		});
		
	}
	

  constructor() { }

  ngOnInit(): void {
  }

}