export class Character {
	name: string;
	strength: number;
	dexterity: number;
	mind: number;
	presence: number;
	damage: number;
	tenacityModifier: number;
	skills = {
		strength: {
			fighting: 0
		},
		dexterity: {
			fighting: 0,
			thievery: 0,
			stealth: 0,
			archery: 0
		},
		mind: {
			learned: 0,
			survival: 0,
			perception: 0,
			apothecary: 0,
			power: 0
		},
		presence: {
			intimidation: 0,
			performance: 0,
			manipulation: 0,
			insight: 0,
			power: 0,
		}
	};
	
	constructor() {
		this.name = 'New Character';
		this.strength = 0;
		this.dexterity = 0;
		this.mind = 0;
		this.presence = 0;
		this.damage = 0;
		this.tenacityModifier = 0;
	}
	
	
	getVitality() {
		return (Number(this.strength) + 3) - Number(this.damage);
	}
	
	getEvasion() {
		return Number(this.dexterity) + 10;
	}
	
	getArmor() {
		return this.getEvasion();
	}
	
	getAlacrity() {
		return Number(this.dexterity) + Number(this.mind);
	}
	
	getTenacity() {
		return (Number(this.presence) + 1) + Number(this.tenacityModifier);
	}
	
	getPower() {
		return 0;
	}
	
	incrementDamage() {
		this.damage++;
	}
	
	decrementDamage() {
		this.damage--;
	}
	
	incrementTenacity() {
		this.tenacityModifier++;
	}
	
	decrementTenacity() {
		this.tenacityModifier--;
	}
	
	incrementSkill(skillname: string) {
		switch(skillname) {
			case 'strfighting':
				if(this.skills.strength.fighting < 5 && this.skills.strength.fighting < this.strength)
					this.skills.strength.fighting++;
				break;
			case 'dexfighting':
				if(this.skills.dexterity.fighting < 5 && this.skills.dexterity.fighting < this.dexterity)
					this.skills.dexterity.fighting++;
				break;
			case 'dexthievery':
				if(this.skills.dexterity.thievery < 5 && this.skills.dexterity.thievery < this.dexterity)
					this.skills.dexterity.thievery++;
				break;
			case 'dexstealth':
				if(this.skills.dexterity.stealth < 5 && this.skills.dexterity.stealth < this.dexterity)
					this.skills.dexterity.stealth++;
				break;
			case 'dexarchery':
				if(this.skills.dexterity.archery < 5 && this.skills.dexterity.archery < this.dexterity)
					this.skills.dexterity.archery++;
				break;
			case 'mindlearned':
				if(this.skills.mind.learned < 5 && this.skills.mind.learned < this.mind)
					this.skills.mind.learned++;
				break;
			case 'mindsurvival':
				if(this.skills.mind.survival < 5 && this.skills.mind.survival < this.mind)
					this.skills.mind.survival++;
				break;
			case 'mindperception':
				if(this.skills.mind.perception < 5 && this.skills.mind.perception < this.mind)
					this.skills.mind.perception++;
				break;
			case 'mindapothecary':
				if(this.skills.mind.apothecary < 5 && this.skills.mind.apothecary < this.mind)
					this.skills.mind.apothecary++;
				break;
			case 'mindpower':
				if(this.skills.mind.power < 5 && this.skills.mind.power < this.mind)
					this.skills.mind.power++;
				break;
			case 'presintimidation':
				if(this.skills.presence.intimidation < 5 && this.skills.presence.intimidation < this.presence)
					this.skills.presence.intimidation++;
				break;
			case 'presperformance':
				if(this.skills.presence.performance < 5 && this.skills.presence.performance < this.presence)
					this.skills.presence.performance++;
				break;
			case 'presmanipulation':
				if(this.skills.presence.manipulation < 5 && this.skills.presence.manipulation < this.presence)
					this.skills.presence.manipulation++;
				break;
			case 'presinsight':
				if(this.skills.presence.insight < 5 && this.skills.presence.insight < this.presence)
					this.skills.presence.insight++;
				break;
			case 'prespower':
				if(this.skills.presence.power < 5 && this.skills.presence.power < this.presence)
					this.skills.presence.power++;
				break;
		}
	}
	
}