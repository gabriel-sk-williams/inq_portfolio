import React, { Component } from 'react';
 
class ExitShape extends Component {

	handleClick = (e) => {
		this.props.onClick();
	}
	
	render() {
		return (
			<svg 	
				onClick={this.handleClick} 
				className={this.props.className}  
				width={this.props.size} height={this.props.size}
				viewBox="0 0 15 15" 
				xmlns="http://www.w3.org/2000/svg" >
				<path d="M0.5,0.5l13.962,13.962" />
				<path d="M14.462,0.5l-13.962,13.962" />
			</svg>
		);
	}
}

export default ExitShape;