var Character = function(name, alignment, strength, charisma ){
	this.name = name;
	this.alignment = alignment;
	this.strength = strength;
	this.charisma = charisma
	this.armor = 10 + charisma;
	this.hitPoints = 5 + strength;
	this.experience = 0;
	this.level = 0;

}



Character.prototype.attack = function(armor){

	if(priti.dice === 20){
		enemy.hitPoints -= 2;
	} else if (priti.dice() >= enemy.armor){
		enemy.hitPoints--;
	} else if (priti.dice() < enemy.armor){
		priti.hitPoints--;
	}

	if(print().hitPoints === 0){
		priti = null;
		window.alert('You Lose');
	}

	if(enemy.hitPoints === 0){
		enemy = null;
		priti.experience = priti.experience + 10;
		window.alert('You Win');
	}


	console.log(enemy.hitPoints);
	
}

Character.prototype.dice = function (){
		var number = Math.floor(Math.random() * 20);
		if(number === 0){
			return number + 1;
		}
		return number;
	}

var priti = new Character('Priti', 'Good');



var enemy = new Character('Bad Guy', 'Evil');



priti.attack();








// var enemies = [];

// var n = 0;
// (function(){
// 	for (var i = 0; i < 10; i++){
// 		 n = new Character(i, 'Evil');
// 		enemies.push(n);
		
// 	};

// })();

