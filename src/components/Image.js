import React, { Component } from 'react';
//import PropTypes from 'prop-types'

class Image extends Component {

    render() {       
        return (
            <div
                id={this.props.id}
                ref={this.image}
                onLoad={this.handleLoad} 
                alt={this.props} 
                className={this.props.className} 
                style={{
                    backgroundImage: "url("+this.props.src+")", 
                    zIndex: this.props.zIndex,
                    cursor: "pointer"
                }}
            / >
        );
    }
}

export default Image;