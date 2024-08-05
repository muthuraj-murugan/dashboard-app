import React, { useState } from 'react'
import './ActivityContainer.css'
import { Col, Dropdown } from 'react-bootstrap'
import { BiTargetLock } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";

import Chart from './../Chart/Chart';

function ActivityContainer() {
    const [status, setStatus] = useState('Weekly')


    return (
        <>
            <Col lg='8' md='8' style={{ marginBottom: '20px' }}>
                <div className='chart' style={{ position: 'relative' }}>
                    <Chart />
                    <div className='chart-header'>
                        <p>Activity</p>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                {status}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setStatus('Monthly')} href="#/action-1">Monthly</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStatus('Weekly')} href="#/action-2">Weekly</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStatus('Yearly')} href="#/action-3">Yearly</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Col >
            <Col lg='4' md='4' style={{ marginBottom: '20px' }}>
                <div className='activitycontainer-right'>
                    <div className='buttons'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <BiTargetLock className='target' />
                            <p>Goals</p>
                        </div>
                        <div className='arrow-btn'>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                    <div className='buttons'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaHamburger className='target' style={{ background: '#373775', color: '#4545ff' }} />
                            <p>Popular Dishes</p>
                        </div>
                        <div className='arrow-btn'>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                    <div className='buttons'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <IoMdRestaurant className='target' style={{ color: '#07a4bc', background: '#2a647a' }} />
                            <p>Menus</p>
                        </div>
                        <div className='arrow-btn'>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </div>

            </Col>
        </>
    )
}

export default ActivityContainer