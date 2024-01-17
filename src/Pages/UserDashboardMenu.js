import React, { useEffect, useState } from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';
import support from './Images/support.png'
import checkout from './Images/checkout.png'
import dollar from './Images/dollar-sign.png'
import "./UserDashboardMenu.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const UserDashboardMenu = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info));
    }, []);

    const paidOrders = orders.filter(order => order.paymentStatus === 'Paid' && order.customerEmail === user?.email);
    const totalSpent = paidOrders.reduce((total, order) => total + parseFloat(order.price), 0)



    return (
        <div>
            <div className='user-cards'>
                <div className='single-card'>
                    <Link to='/my-order'> <div className='icon-img' ><img src={checkout}/></div> <p>My Orders</p></Link>
                </div>
                <div className='single-card'>
                    <Link to='/'> <div className='icon-img' ><img src={dollar}/></div> <p>Total Spent $ {totalSpent.toFixed(2)} USD</p></Link>
                </div>
                <div className='single-card'>
                    <Link to='/support'> <div className='icon-img' ><img src={support}/></div> <p>Support</p></Link>
                </div>
            </div>
        </div>
    );
};

export default UserDashboardMenu;
