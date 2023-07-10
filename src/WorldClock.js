import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';

import Clock from './Clock';


class WorldClock extends React.Component {

    constructor(props) {
        super(props);
        this.clockData = props.clockData;
    }

    render() {
        const clockRows = this.clockData.map((timeZone) =>
            <Row>
                <Col>{timeZone}</Col>
                <Col><Clock timeZone={timeZone} /></Col>
            </Row>
        );

        return (
            <Container fluid>
                <Row>
                    <Col>City</Col>
                    <Col>Clock</Col>
                </Row>
                {clockRows}
            </Container>
        );
    }

}

export default WorldClock;
