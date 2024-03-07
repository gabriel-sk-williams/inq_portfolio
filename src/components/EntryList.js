import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../Inqstyles.css';

class EntryList extends Component {

  constructor (props) {
    super(props);

    this.state = {
      entries: props.entries || [],
      activeEntry: props.activeEntry,
    }
  }

  componentWillUpdate(nextProps) {
    if (this.props !== nextProps) this.setState({ activeEntry: nextProps.activeEntry })
  }
  
  handleClick = (index) => (event) => {
    this.setState({
      activeEntry: index,
    });
    this.props.onClick(index);
  }

  render() {
    const { entries, activeEntry } = this.state;
    const list = entries.map((entry, i) => {
      const link = "/research/" + entry.number;
      
      return i === activeEntry
        ? null
        : <Link to={link} key={i}>
            <div className="slow-appear grid-break right">
              <h3 className="click">{entry.number + ": " + entry.title}</h3>
              <h2 className="italic">{entry.tags}</h2>
            </div>
          </Link>  
    })

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default EntryList;