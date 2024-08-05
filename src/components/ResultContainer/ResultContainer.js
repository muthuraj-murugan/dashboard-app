import React from 'react'
import './ResultContainer.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaBasketShopping } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { TbAdjustmentsDollar } from "react-icons/tb";
import { BsFillHandbagFill } from "react-icons/bs";
import Progressbar from '../ProgressBar/Progressbar';

function ResultContainer() {
    return (
        <>
            <Col lg='8' md='12'>
                <Row className='left-result-tabs'>
                    <Col lg='3' md='6' xs='12' className='col'>
                        <div className='category'>
                            <div className='icon' style={{ background: '#3f4c92', position: 'relative' }}>
                                <FaBasketShopping style={{ color: '#0017ab' }} />
                                <span>+</span>
                            </div>
                            <p> Total Orders</p>
                            <div className='total'>
                                <span>75</span>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className='arrow-icon'>
                                        <IoMdArrowDropup />
                                    </div>
                                    <p>3%</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' md='6' xs='12' className='col'>
                        <div className='category'>
                            <div className='icon' style={{ background: '#2c562c', position: 'relative' }}>
                                <BsFillHandbagFill style={{ color: '#00c400' }} />
                                <span style={{ background: 'green', fontSize: '10px' }}>&#10003;</span>
                            </div>
                            <p> Total Delivered</p>
                            <div className='total'>
                                <span>70</span>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className='arrow-icon'>
                                        <IoMdArrowDropdown style={{ color: 'red' }} />
                                    </div>
                                    <p style={{ color: 'red' }}>3%</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' md='6' xs='12' className='col'>
                        <div className='category'>
                            <div className='icon' style={{ background: '#682e2e', position: 'relative' }}>
                                <BsFillHandbagFill style={{ color: 'red' }} />
                                <span style={{ background: 'red', fontSize: '10px' }}>x</span>
                            </div>
                            <p> Total Cancelled</p>
                            <div className='total'>
                                <span>05</span>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className='arrow-icon'>
                                        <IoMdArrowDropup />
                                    </div>
                                    <p>3%</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' md='6' xs='12' className='col'>
                        <div className='category'>
                            <div className='icon' style={{ background: '#5e2f48' }}>
                                <TbAdjustmentsDollar style={{ color: 'deeppink' }} />
                            </div>
                            <p> Total Revenue</p>
                            <div className='total'>
                                <span>$12k</span>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className='arrow-icon'>
                                        <IoMdArrowDropdown style={{ color: 'red' }} />
                                    </div>
                                    <p style={{ color: 'red' }}>3%</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col lg='4' md='12' style={{ marginBottom: '20px' }} >

                <div className="net-profit">
                    <div className="profit-data">
                        <p>Net Profit</p>
                        <h2>$ 67759.25</h2>
                        <div>
                            <IoMdArrowDropup />
                            <span>3%</span>
                        </div>
                    </div>
                    <div className="progress-row">
                        <Progressbar />
                        <p style={{ fontSize: '8px' }}>*The values here has been rounded off.</p>
                    </div>
                </div>

            </Col>
        </>
    )
}

export default ResultContainer