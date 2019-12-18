import React, { Component } from 'react';


class SingleSeries extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p>Series ID:</p>
                <h3>{this.props.match.params.id}</h3>
            </div>
        )
    }
}

export default SingleSeries;