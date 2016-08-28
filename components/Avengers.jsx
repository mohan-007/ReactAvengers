import React from 'react'
import SuperHero from './SuperHero.jsx'

var Avengers = React.createClass({
	render(){
		return(<div>
			{this.props.avengersProperty.map((Avenger,index)=><SuperHero Avenger={Avenger} key={index}></SuperHero>)}
			</div>
			)
	}
})

export default Avengers