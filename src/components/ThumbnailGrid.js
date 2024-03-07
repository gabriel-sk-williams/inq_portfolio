import React, { Component } from 'react';
import '../Inqstyles.css';

class ThumbnailGrid extends Component {

  constructor (props) {
    super(props);

    this.state = {
      activeProject: props.activeProject || 0,
      projects: props.projects || [],
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateTranslateValue);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateTranslateValue);
  }

  handleClick = (index) => (event) => {
    this.setState({
      activeProject: index,
    })
    this.props.onClick(index);
  }

  render() {

    const thumbClass = this.state.projects.map((img, i) => "thumbnail appear-" + i);
    const thumbs = this.state.projects.map((image, i) => {
      const [ stillThumb, gifThumb ] = image.thumb;
      return (
        <div key={i} className="thumb-container" onClick={this.handleClick(i)}>
          <img  
            src={require("../images/" + stillThumb)}
            onMouseOver={e => (e.currentTarget.src = require("../images/" + gifThumb))}
            onMouseOut={e => (e.currentTarget.src = require("../images/" + stillThumb))}
            className={thumbClass[i]}
            alt={image.title}
          />
        </div>
      );
    });

    return (
      <section className="mobile-touch white-break">
        <div className="flex-grid">
          {thumbs}
        </div>
      </section>
    );
  }
}

export default ThumbnailGrid;