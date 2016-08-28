import React from 'react'

var SuperHero = React.createClass({

	render(){
		var style = {
			backgroundColor : this.props.Avenger.color
		}
		var textShadow = {
			textShadow: "4px 4px 6px rgba(0,0,0,0.5) , 0 0 9px "+this.props.Avenger.color 

		}
		return(
			<div className="SuperHero">
			<label className="heroName" style={style}>{this.props.Avenger.name}</label>
			<label className="heroPosition" style={textShadow}>{this.props.Avenger.position}</label>
			</div>

		)
	}
})

export default SuperHero