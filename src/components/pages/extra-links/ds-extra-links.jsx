/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import ExtraLinks from "../extra-links/extra-links";

export default class ExLinks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showLinks: false
        }
        this.handleLinks = this.handleLinks.bind(this);
    }

    handleLinks() {
        this.setState({showLinks: !this.state.showLinks})
    }

    render() {
        return (
        <div className = "ex-links-div">
        <div className = "extra-links-btn">
            <a onClick = {this.handleLinks} className = "headTopBtn" target = "_title">More Resources</a>
        </div>
        {this.state.showLinks === true ? <div className = "link-div"><ExtraLinks arr = {this.props.arr} btnLink = {this.props.btnLink} /></div> : null}
        </div>
        )
    }
}

