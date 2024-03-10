import React, { Component } from 'react';
import ExitShape from '../icons/ExitShape';
 
class NavTopMobile extends Component {

	handleClick = () => {
        this.props.menuToggle();
	}

	render() {
        return 	(
            <nav className="nav-table flex">
                <div className="col-10-12" onClick={this.handleClick}>
                    <div className="mobile-left">
                        <h1 className="click black">gskw</h1>
                    </div>
                </div>
                
                <div className="col-2-12">
                    <div className="mobile-right">
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