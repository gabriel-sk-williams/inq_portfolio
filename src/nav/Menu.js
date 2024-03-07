import React, { Component } from 'react';
 
class Menu extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			isOpen: false
		};
	}

	prepareCoords() {
    let coords = {
      	x1: this.props.x1,
		x2: this.props.x2,
		ytop: 11,
		ymid: 22,
		ybot: 33,
    }
    	return coords;
	}

	handleClick(e) {
			this.setState({
				isOpen: !this.state.isOpen
			});
			this.props.onClick();
	}
	

	render() {
		var coords = this.prepareCoords();
		let coords0 = { 
			x1: coords.x1,
			y1: coords.ytop,
			x2: coords.x2,
			y2: coords.ytop,
		}
		let coords1 = { 
			x1: coords.x1,
			y1: coords.ymid,
			x2: coords.x2,
			y2: coords.ymid,
		}
		let coords2 = { 
			x1: coords.x1,
			y1: coords.ybot,
			x2: coords.x2,
			y2: coords.ybot,
		}
		return (
			<svg 	
				ref="hamburger" 
				onClick={this.handleClick} 
				className={this.props.className} 
				style={{cursor: 'pointer'}}
				width="55" height="55" xmlns="http://www.w3.org/2000/svg" 
			>
				<line {...coords0} strokeWidth={2.5} />
				<line {...coords1} strokeWidth={2.5} />
				<line {...coords2} strokeWidth={2.5} />
			</svg>
		);
	}
}

export default Menu;