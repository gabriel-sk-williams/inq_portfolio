import React, { Component } from 'react';
import NavTop from './NavTop';
import '../gskwStyles.css';

class Contact extends Component {

  constructor () {
    super();

    this.state = {
      blogNumber: true,
    }
  }

  description = () => {
    return (
      <div className="appear grid-break">
        <h3>gskw was founded in 2015 in New York City as an interdisciplinary studio dedicated to technology-drived processes and product development.</h3><br/><br/>
        <h3>Our written research cultivates a framework for new approaches to contemporary problems; we espouse rigorous methodologies drawing from philosophy, economics, and historiography to achieve a deeper understanding of complex systems and develop technology projects to address them.</h3>
      </div>
    )
  };

  render() { 
    return (
        <section>
          <div className="container table">
            <NavTop activePage="contact"/>
            <div className="flex table grid-break">
              <div className="main col-8-12">
                <h4 className="quick-appear">Research | Tech | Cities | Design | Architecture</h4>
                {this.description()}
              </div>
              <div className="col-1-12" />
              <div className="slow-appear right col-3-12">
                <div className="mobile-break flex-right">
                  <div className="mobile-destroy clear-divider col-6-12" />
                  <div className="mobile-destroy divider col-6-12" />
                </div>
                  <h5>Gabriel Williams</h5>
                  <h5>gabrielskwilliams@gmail.com</h5>
                  <h5>917.755.8500</h5>
                  <div className="flex-right">
                    <div className="clear-divider col-6-12" />
                    <div className="divider col-6-12" />
                  </div>
                  <h5>Follow us on:</h5>
                  <h5>Instagram | Twitter</h5>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Contact;