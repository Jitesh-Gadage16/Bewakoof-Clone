import React from 'react'
import './TopHeader.css';
import {  Container, Row,  Col } from 'reactstrap';

const TopHeader = () => {
    return(
        <div className='TopHeader'>
            <Container>
                <Row className='d-flex p-2'>
                    <Col className='left-col'>
                       <a>Offers</a>
                       <a>Fanbook</a>
                       <a>Download App</a>
                       <a>Tribe Membership</a>
                    </Col>
                    <Col className='left-col'>
                       <a>contact Us</a>
                       <a>Track Orders</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopHeader;