import React from 'react'
import Container from 'react-bootstrap/Container';
import ResultContainer from '../ResultContainer/ResultContainer';
import './Body.css'
import { Row } from 'react-bootstrap';
import ActivityContainer from '../ActivityContainer/ActivityContainer';
import FeedbackContainer from '../FeedbackContainer/FeedbackContainer';


function Body() {
    return (
        <Container fluid>
            <div className='dashboard'>
                <div className="title">
                    <h2>Dashboard</h2>
                </div>
                <Row>
                    <ResultContainer />
                </Row>
                <Row>
                    <ActivityContainer />
                </Row>
                <Row>
                    <FeedbackContainer />
                </Row>
            </div>
        </Container>
    )
}

export default Body



