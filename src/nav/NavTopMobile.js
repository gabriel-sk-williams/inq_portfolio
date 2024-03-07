import React, { Component } from 'react';
import ExitShape from '../icons/ExitShape';
 
class NavTopMobile extends Component {

	handleClick = () => {
        this.props.menuToggle();
	}

	render() {
        return 	(
            <nav className="">
                <div className="nav-table">
                    <div className="mobile-left col-6-12" onClick={this.handleClick} />
                    <div className="mobile-right col-6-12">
                        <ExitShape
                            size={36}
                            className="exit-shape"
                            onClick={this.handleClick} 
                        />
                    </div>
                </div>
            </nav>
        );
    }
}





export default NavTopMobile;