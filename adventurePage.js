import React from 'react';
import {AdventureAPI} from './AdventuresAPI';


	var StatsBar = React.createClass({
			 //TODO: Make a CSS file that turns the "statsbar" elements into an actual bar, 
		 //so they don't stick together like glue anymore
		render : function(){
		console.log(this.props.foo.strength);
		return(
		<div>
		 <td>
	
		   Strength: {this.props.foo.strength}
		  
		  </td>
		   <td>
		   Brains: {this.props.foo.brains}
		   </td>
		   <td>
		   Charm: {this.props.foo.charm}
		   </td>
		   </div>
		);		
		}
	});

var Adventure = React.createClass({
	render : function(){
		
	return(
	<a href={this.props.adventure.id}>{this.props.adventure.btnTxt}</a>
	
	);
	}
	//should set up links where the text is of the form "Open the left door" and the 
	//effect is to take you to "localhost:3000/area1left"
});

var NextAdventures = React.createClass({

render : function(){
	var dataForButtons = this.props.nextOnes.map(function(nextAdv,index) {
		return <Adventure adventure={nextAdv} />; 
	}.bind(this) )
	return(
	<div>
	{dataForButtons}
		
	
	</div>
	);
}	
});

var BackArea = React.createClass({
render : function(){
if(this.props.previous != null){
return (

<a href={this.props.previous}>Go Back</a>	
);
}	
}	
});

var AdventureView = React.createClass({

performTest : function(pos, adventure, test){
var passed;
var statReq = adventure.tests[pos].statRequired;
console.log("When Clicked: test is " + test);
console.log("Also upon Click: Required Stat is " + adventure.tests[pos].statRequired);
if(statReq === 'strength'){	
console.log("pTest: position is " + pos);
passed = AdventureAPI.statTest(this.props.route.character.strength, adventure.tests[pos].threshold);	
console.log("pTest: pos is " + pos + ", adventure is " + adventure + ", test is " + test[0] + ", passed is " + passed); 	
}
else if(statReq === 'brains'){
console.log("pTest: position is " + pos);
passed = AdventureAPI.statTest(this.props.route.character.brains, adventure.tests[pos].threshold);	
console.log("pTest: pos is " + pos + ", adventure is " + adventure + ", test is " + test[0] + ", passed is " + passed); 		
}
else if(statReq === 'charm'){
console.log("pTest: position is " + pos);
passed = AdventureAPI.statTest(this.props.route.character.charm, adventure.tests[pos].threshold);	
console.log("pTest: pos is " + pos + ", adventure is " + adventure + ", test is " + test[0] + ", passed is " + passed); 		
}
//after the refactoring, the app isn't broken, but there's no response from the console.log statements, so things are probably not
//getting accessed. Prior to refactoring, the filtering was done inside the render method, and performTest contained only
//the strength code, and did not check the type of stat required.
if(passed){
 test.push(<p>...and you succeeded!</p>);	
}
else{
 test.push(<p>...but you failed!</p>);	
}	
},

render: function(){
var test = [];
var buttons = [];
var advId = this.props.params.advID;
console.log("This ID is " + advId);
var adventure = AdventureAPI.getAdventure(advId);
console.log("This Adventure is " + adventure);
var next = adventure.next;
var line = <p>{adventure.text}</p>
console.log("This character is " + this.props.route.character);


if(adventure.tests.length>0){
for(var i = 0; i<adventure.tests.length; i++)
{
//make this draw up a button, which when clicked calls a function that carries out this
var difficulty;
var thresh = adventure.tests[i].threshold;
var stat = adventure.tests[i].statRequired;
if(stat === 'strength'){ 	
difficulty = this.props.route.character.strength - thresh;
}
else if(stat === 'brains'){
difficulty = this.props.route.character.brains - thresh;	
}
else if(stat === 'charm'){
difficulty = this.props.route.character.charm - thresh;	
}
if(difficulty<-5){
difficulty = -5;	
}
else if(difficulty>10){
difficulty = 10;	
}
//a little counterintuitive, but in this difficulty system, high numbers mean easy and low numbers mean hard.
var PercentChance = (difficulty * 10) + 50;
buttons.push(<button onClick={() => this.performTest(i-1, adventure, test)}>{adventure.tests[i].name + ' (' + PercentChance + '% chance)'}</button>) 
//check how it is you implement multiple {} functions within a single button, by the way. That should let you put the % chance in there
//this worked prior to the addition of the {PercentChance} bit, I suspect this is to blame
}
//anonymous function is to stop the default behavior, otherwise it won't wait for the button to be clicked
//sending in i-1 is a quick-n-dirty workaround to get around the bizarre fact that i somehow winds up being
//passed in as 1 point higher than it's supposed to be (there's only one element in the array tests[], so
//i should only ever equal 0, which is not a problem. However, it inexplicably equals 1, which doesn't exist
//and causes a crash. Also, the buttons always seem to execute the last option in the array, all the buttons will do
//the same thing. Really unfortunate.

}
//this.forceUpdate();


return(
<div>
<StatsBar foo={this.props.route.character}/>
{line}
{test}
{buttons}
<NextAdventures nextOnes={next} adventure={adventure}/>
<BackArea previous={adventure.previous} />
</div>
);	
}	
});

export default AdventureView;