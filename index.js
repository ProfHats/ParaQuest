  import React from 'react';
    import ReactDOM from 'react-dom';
    import ParaQuest from './main';
    import '../node_modules/bootstrap/dist/css/bootstrap.css';
	//import Adventures from './Adventures';
	import { Router, Route, IndexRoute, browserHistory } from 'react-router';
	import AdventureView from './adventurePage';
	
		    var App = React.createClass({
				
					changeStats : function (type, amount){
					switch(type){
					case 'strength':
					stats.strength += amount;
					break;	
					case 'brains':
					stats.brains += amount;
					break;
					case 'charm':
					stats.charm += amount;
					}	
					},

				
      render : function() {
        return (
            <div className="container">
               <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                     <div className="page-header">
                           {this.props.children}
							
								
                     </div>
                   </div>
                </div>
              </div>
        )
      }
    });
			var STR = 'Strength: ';		

	var stats = 
	{
	strength : 5,
    brains: 5,
    charm: 5	
	};//these are the beginning stats
	//we need these to be updated whenever a relevant update check passes in adventurePage.
	
/*	   ReactDOM.render(
      <ParaQuest character={stats} adventures={Adventures}/>,
      document.getElementById('root')
    ); */
	
	  ReactDOM.render(
     (
      <Router history={browserHistory} >
	  <Route path="/" component={App}>
           <IndexRoute component={ParaQuest} character={stats}/>
           <Route path="/:advID" component={AdventureView} character={stats}/>
		   </Route>
      </Router>
    ),
      document.getElementById('root')
  );