import React from 'react'
import { recentOrders } from '../../data';

function OrdersTable() {
    return (
        <div className='tableorder' style={{ overflow: 'scroll', marginTop: '1rem' }}>
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Order No.</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {recentOrders.map((orders) => {
                        return (
                            <tr key={orders.oderNo}>
                                <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src={orders?.img} alt='' />  {orders.name}</td>
                                <td>{orders.oderNo}</td>
                                <td>$ {orders.amount}</td>
                                <td >
                                    <span className={`${orders.status === 'Delivered' ? 'status-green' : 'status-red'}`}>{orders.status}</span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}





export default OrdersTable