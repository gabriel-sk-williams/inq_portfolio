import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../gskwStyles.css';

class I000 extends Component {

  constructor (props) {
    super(props);

    this.state = {
      entries: props.entries,
    }
  }

  super = (int) => {
    return <sup>{int}</sup>;
  }
  
  renderIntro = () => {
    return (
      <div className="appear half-break">
        <h3>
        Imagine a sculptor, if you will, that models his intentions in clay before moving to marble. The modern artisan, in effect, must do the same with writing: by drafting, revising, and rehashing conceptual noise into words and phrases, we impress meaning into what was once formless.
        </h3><br/>
        <h3>
        Consider the following essays as scale models of our own process. Here we attempt to reduce the intersections of science, philosphy, and politics to their core presuppositions and revisit their original bearings. Some dogmas must be refined, others discarded. These are sketches of a map which might eventually reflect the territory.
        </h3><br/>
      </div>
    );
  }

  render() {
    const order = this.state.entries.map((entry, index) => "click appear-"+index);
    const italo = this.state.entries.map((entry, index) => "italic appear-"+index);

    const list = this.state.entries.map((entry, i) => {
      const link = "/research/"+entry.number;
      return i === 0 
        ? null
        : <Link to={link} key={i}>
            <div className="left half-break">
              <h3 className={order[i]}>{entry.number}: {entry.title}</h3>
              <h2 className={italo[i]}>{entry.tags}</h2>
            </div>
          </Link>
    });

    return (
      <div>
          {this.renderIntro()}
          {list}
      </div>
    );
  }
}

export default I000;