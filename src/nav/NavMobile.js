import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavTopMobile from './NavTopMobile';

class NavMobile extends Component {

    constructor (props) {
        super(props);
    
        this.state = {
            activePage: props.activePage,
            entries: props.entries,
            projects: props.projects,
            productionTab: props.activePage === "production",
            researchTab: props.activePage === "research"
        }
    }

    changeProject = (id) => { this.props.changeProject(id); }

    menuToggle = () => { this.props.menuToggle(); }

    toggleProduction = () => { 
        this.setState((prevState) => ({
            productionTab: !prevState.productionTab,
        }));
    }
    toggleResearch = () => { 
        this.setState((prevState) => ({
            researchTab: !prevState.researchTab,
        }));
    }

    render() {

        const { entries, projects, productionTab, researchTab } = this.state;

        const productList = productionTab
            ? projects.map((img, i) => {
                return (
                    <h4 key={i+'pr'} className="click" onClick={() => this.changeProject(i) }>
                        • {img.title}
                    </h4>
                );
              })
            : null;

        const researchList = researchTab
            ? entries.map((entry, i) => {
                const link = /research/ + entry.number;
                return (
                    <Link key={i+'rs'} to={link} >
                        <h4 className="click">{entry.number + ": " + entry.title}</h4>
                    </Link>
                );
              })
            : null;

	    return (
            <div id="nav-mobile" className={this.props.status}>
                <div className="mobile-container">
                <NavTopMobile menuToggle={this.menuToggle} onClick={this.menuToggle}/>
                    <ul className="flex-column triple-break">
                        <li className="left" onClick={this.menuToggle}>
                            <Link to='/'><h1 className="click grey">machine</h1><br/></Link>
                            <Link to='/'><h1 className="click black">inq</h1></Link>
                            <Link to='/'><h1 className="click grey">uiry</h1><br/></Link>
                            <Link to='/'><h1 className="click black">studio</h1></Link>
                        </li>
                        <li className="left half-break">
                            <h1 onClick={this.toggleProduction}>Production</h1>
                            <div className="list-select" onClick={this.menuToggle}>
                                {productList}
                            </div>
                        </li>
                        <li className="left half-break">
                            <h1 onClick={this.toggleResearch}>Research</h1>
                            <div className="list-select" onClick={this.menuToggle}>
                                {researchList}
                            </div>
                        </li>
                        <li className="left half-break" onClick={this.menuToggle}>
                            <Link to='/profile/'><h1>Profile</h1></Link>
                        </li>
                    </ul>
                </div>
            </div>
	    );
    }
}

export default NavMobile;