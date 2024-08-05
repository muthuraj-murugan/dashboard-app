import React from 'react'
import Table from './Table';
import { Col } from 'react-bootstrap';
import './FeedBack.css'
import { FaStar } from "react-icons/fa6";

function FeedbackContainer() {
    return (
        <>
            <Col lg='8' className='col-bottom'>
                <div className='ordertable'>
                    <h4>Recent Orders</h4>
                    <Table />
                </div>
            </Col>
            <Col lg='4' className='col-bottom'>
                <div className='feedbacks'>
                    <h4>Customer's Feedbacks</h4>
                    <div className='feedback'>
                        <div className='customer-feedback'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671157.jpg" alt="" />
                                <p style={{ margin: '0' }}>Jenny Wilson</p>
                            </div>
                            <div className='star-rating'>
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar />
                            </div>
                            <p>The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.</p>
                        </div>
                        <div className='customer-feedback'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671151.jpg" alt="" />
                                <p style={{ margin: '0' }}>Dianne Russell</p>
                            </div>
                            <div className='star-rating'>
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                            </div>
                            <p>We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service</p>
                        </div>
                        <div className='customer-feedback'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg" alt="" />
                                <p style={{ margin: '0' }}>Devon Lane</p>
                            </div>
                            <div className='star-rating'>
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar />
                            </div>
                            <p>Normally wings are wings but their are lean meaty and tender.</p>
                        </div>
                        <div className='customer-feedback'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671157.jpg" alt="" />
                                <p style={{ margin: '0' }}>Jenny Wilson</p>
                            </div>
                            <div className='star-rating'>
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar />
                            </div>
                            <p>The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.</p>
                        </div>
                        <div className='customer-feedback'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671151.jpg" alt="" />
                                <p style={{ margin: '0' }}>Dianne Russell</p>
                            </div>
                            <div className='star-rating'>
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                            </div>
                            <p>We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service</p>
                        </div>
                        <div className='customer-feedback'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg" alt="" />
                                <p style={{ margin: '0' }}>Devon Lane</p>
                            </div>
                            <div className='star-rating'>
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar style={{ color: 'gold' }} />
                                <FaStar />
                            </div>
                            <p>Normally wings are wings but their are lean meaty and tender.</p>
                        </div>
                    </div>

                </div>
            </Col>
        </>
    )
}

export default FeedbackContainer