import React, { Component } from 'react';
import Research from './pages/Research';
import Production from './pages/Production';
import Profile from './pages/Profile';
import NavTop from './nav/NavTop';

class Content extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activePage: props.activePage,
            activeEntry: props.activeEntry || 0,
            entries: props.entries || [],
            projects: props.projects || [],
            activeProject: 0,
            displayViewer: false
        }
    }

    componentWillUpdate(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                activePage: nextProps.activePage,
                activeEntry: nextProps.activeEntry
            });
        }
    }

    handleMobileClick = (id) => {
        this.setState({
            activePage: "production",
            activeProject: id,
            displayViewer: true
        })
    }

    render() {
        const { activePage, activeEntry, entries, projects } = this.state;
        const { activeProject, displayViewer } = this.state; // from NavMobile
        const component = 
            activePage === "production"
            ? <Production 
                projects={projects} 
                activeProject={activeProject} 
                displayViewer={displayViewer}
              />
            : activePage === "research"
            ? <Research activeEntry={activeEntry} entries={entries} />
            : <Profile />

        return (
            <section>
                <div className="container table">
                    <NavTop 
                        activePage={activePage}
                        projects={projects} 
                        entries={entries} 
                        onClick={this.handleMobileClick}
                    />
                    {component}
                </div>
            </section> 
        );
    }
}

export default Content;