import React, { Component } from 'react';
import Image from './Image';
import '../Inqstyles.css';

class Viewer extends Component {

  constructor (props) {
    super(props);

    this.state = {
      display: props.display || [],
      index: 0
    }
  }

  select = (index) => (event) => {
    this.setState({
      index: index,
    });
  }

  increment = () => {
    this.setState((prevState) => ({
      index: (prevState.index + 1) % prevState.display.files.length
    }))
  }

  componentWillUpdate(nextProps) {
    if(this.props !== nextProps) {
      this.setState({
        display: nextProps.display,
        index: 0
      });
    }
  }

  render() {
    const { title, subtext, files, link } = this.state.display;
    const index = this.state.index;

    const fileClass = files.map((f, i) => i === index 
      ? "pad-select click bold" 
      : "pad-select click"
    );

    const fileMap = files.map((img, i) =>
      <h6 key={i} className={fileClass[i]} onClick={this.select(i)}>
        {i+1}
      </h6>
    );

    // className="image-container"
    const viewer = 
      <div onClick={this.increment}>
        <Image
          src={require("../images/" + files[index])}
          className={"quick-appear center-fit"}
        />
      </div>
    
    const linkDisplay = <a href={link}>{link}</a>
                
    return (
        <section>
          {viewer}
          <div className="half-break" />
          <div className="flex table">
            <div className="col-9-12 blank">
              <h4>{title}</h4>
              <h5><i>{subtext}</i></h5>
              <h5><i>{linkDisplay}</i></h5>
            </div>
            <div className="col-2-12 right">
              {fileMap}
            </div>
            <div className="triple-break" />
          </div>
        </section>  
    );
  }
}

export default Viewer;