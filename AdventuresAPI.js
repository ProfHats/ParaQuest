import _ from 'lodash';


var Adventures = [
{
id: "start",
text: "You stand in a vast, white room with no features. Before you are two doors.",
previous: "",
next: [
{
id:"orangeRoom1",
btnTxt: "Open The Left Door"
},
{
 id:"earthRoom1",
 btnTxt: "Open The Right Door"
}
],
tests: []
},
{
id: "orangeRoom1",
text: "The door swings open noiselessly, revealing a floor of orange tiles. The room you step into feels cool, and you notice strange shrines in alcoves hidden in the walls.",
previous: "start",
next: [
{
id:"orangeRoomShrine1",
btnTxt: "Inspect one of the Shrines"
},
{
id:"orangeRoom2",
btnTxt: "Walk to the other end of the room"	
}
],
tests: []
},
{
id: "earthRoom1",
text: "The door heaves open slowly, with a horrific grinding noise. It is obviously very heavily rusted. At last it opens, and you see a room with an earthen floor, with copper pots strewn everywhere.",
previous: "start",
next: [
{
id: "earthRoomCopperPot",
btnTxt: "Pick up one of the pots"
},
{
id:"earthRoom2",
btnTxt: "Walk past the pots"	
}
],
tests: []
},
{
id: "orangeRoomShrine1",
text: "All but one of the Shrines has been defaced. You do not recognise the statue within, though the abundant carvings of grapevines lead you to believe this figure is a wine lord of sorts. In a corner, someone has painted the words 'All Lions Abhor The Vine' in red. Could this be a clue?",
previous: "orangeRoom1",
next:[],
tests: []
},
{
id: "orangeRoom2",
text: "As you cross the room, it becomes apparent that it is (or used to be) a temple of some sort. The walls are decorated with elaborate designs depicting serpents, clouds, and giants. It is not clear to you what any of this means, but eventually you come to the opposite end of the room.",	
previous: "orangeRoom1",
next:[],
tests: []
},
{
id: "earthRoomCopperPot",
text: "The pot bears the mark of a tiger's head, and is bright and burnished, as if it had recently been cleaned. Either this strange place is inhabited, or these pots are of very recent make. Of course, it's also possible that you have gone mad. Never a possibility to be discounted lightly.",	
previous: "earthRoom1",
next:[],
tests: []
},
{
id: "earthRoom2",
text: "The earth is cool and dry beneath your feet. You cross the hallway and find a stone door at the other side of the room. It contains carved images of oranges. You attempt to open it, but it is locked, and you see no keyhole. Below the door are three carved images, different from the others. They depict a goat, a tiger, and an eagle. Are these clues to something?", 	
previous: "earthRoom1",
next:
[
{
id: "openDoorTestResult",
btnTxt: "Try to open the door"
}
],
tests: []
},
{
id: "openDoorTestResult",
text: "How do you plan on opening this massive door?",
previous: "earthRoom2",
next:[
{
	
}
],
tests: [
{
name: 'Open it with raw strength',
threshold: 5,
statRequired: 'strength'	
},
{
name: 'Try to deciper the meaning of the symbols',
threshold: 4,
statRequired: 'brains'	
}
] 	
}
];

     export const AdventureAPI = {
         getAll : function() {
            return Adventures ;
          },
		  getAdventure : function(id) {
			             var result = null ;
             var index = _.find(Adventures, function(adv) {
                    return adv.id === id;
                    } );     
             if (index !== -1) {                 
                result = index;
                    }
            return result ;  
		  },
		 statTest : function(stat, threshold50pc) {
			var modifier = stat - threshold50pc;
			var rando = Math.floor(Math.random() * (1,10)) + 1;
			var temp = rando + modifier;
			console.log("The character rolled a " + rando + ", and had a relevant stat of " + stat + " on a threshold of " + threshold50pc + ", resulting in a modifier of " + modifier);
			if(temp>5){
				return true;
			}
			else {
				return false;
			}
		 }
	 }
	 
export default Adventures;
