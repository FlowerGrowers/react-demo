import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Junda extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (<li onClick={this.deleteClick.bind(this, this.props.index)}>{this.props.content}</li>)
    }
    deleteClick(index) {
        console.log(index);

        this.props.deleteItem(index);
    }
}

Junda.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number.isRequired,
    deleteItem: PropTypes.func

}
Junda.defaultProps = {
    content: 'jiajunda'
}
export default Junda;