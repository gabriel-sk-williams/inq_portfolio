import React, { Component } from 'react';

class ClientList extends Component {
    constructor () {
        super();
        this.state = {
            logos:
            [{
              file: 'brillhart.png',
              link: 'https://brillhartarchitecture.com/',
              alt: 'Brillhart Architecture'
            },
            {
              file: 'builtinterest.png',
              link: 'https://builtinterest.com/',
              alt: 'Built Interest'
            },
            {
              file: 'canin.png',
              link: 'https://www.canin.com/',
              alt: 'Canin Associates'
            },
            {
              file: 'common.png',
              link: 'https://www.common.com/',
              alt: 'Common Coliving'
            },
            {
              file: 'mckenzie.png',
              link: 'https://www.buildmckenzie.com/',
              alt: 'McKenzie Design / Build'
            },
            {
              file: 'radu.png',
              link: 'https://www.raduarchitects.com/',
              alt:  'Radu Architects'
            },
            {
              file: 'sixpeak.png',
              link: 'https://www.sixpeakcapital.com/',
              alt: 'Six Peak Capital'
            },
            {
              file: 'sns.png',
              link: 'https://squatsandscience.com/',
              alt: 'S&S Strength Gym'
            },
            {
              file: 'wordcel.png',
              link: 'https://twitter.com/WordcelLabs',
              alt: 'WordCel Labs'
            }],
        }
    }

    render() {
        const logos = this.state.logos.map((logo, i) =>
          <li key={i} className="logo-container">
            <a rel="noopener noreferrer" href={logo.link} target="_blank">
              <img  
                src={require("../logos/" + logo.file)}
                className={"slow-appear logo"}
                alt={logo.alt}
              />
            </a>
          </li>
        );

        return (
            <footer id="footer">
              <div className="flex-column">
                <h3 className="bold">Previous clients and partners:</h3>
                <ul className="flex-grid gap">
                  {logos}
                </ul>
              </div>
            </footer>
        );
    }
}

export default ClientList;