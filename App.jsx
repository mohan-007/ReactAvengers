import React from 'react';
import Avengers from './components/Avengers.jsx'

var App = React.createClass( {

   getInitialState : function(){
   	return {
   		Avengers : [
   			{name:"Ironman",position:"Lead",color:"#ff6666"},
   			{name:"CaptainAmerica",position:"Cap",color:"#0099ff"},
   			{name:"Witch",position:"Beautiful",color:"#cc3300"},
   			{name:"HawkEye",position:"Archer",color:"#00cc44"},
   			{name:"Hulk",position:"Monster",color:"#006600"},
   			{name:"AntMan",position:"Funnyguy",color:"#990000"}
   		]
   	}
   },
   render() {
      return (
         <div className="teamUp" >
           	<Avengers avengersProperty={this.state.Avengers}></Avengers>
         </div>
      );
   }
})

export default App;