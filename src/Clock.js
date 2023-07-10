import React from 'react';


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.timeZone = props.timeZone;
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
    }

    componentWillMount() {
        clearInterval(this.timerId);
    }

    render() {
        return <p>
            {this.state.date.toLocaleString('en-US', {timeZone: this.timeZone })}
        </p>;
    }

}

export default Clock;
