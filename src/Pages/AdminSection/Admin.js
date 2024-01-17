import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const Admin = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [currentPageOrders, setCurrentPageOrders] = useState(1);
    const [currentPageSubscribers, setCurrentPageSubscribers] = useState(1);
    const [ordersPerPage] = useState(5); // Adjust the number of orders per page
    const [subscribersPerPage] = useState(5); // Adjust the number of subscribers per page

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/subscribers`)
            .then((res) => res.json())
            .then((info) => setSubscribers(info.reverse())); // Reverse the array initially
    }, []);

    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info.reverse())); // Reverse the array initially
    }, []);

    const paidOrders = orders.filter(order => order.paymentStatus === 'Paid');
    const totalSalesAmount = paidOrders.reduce((total, order) => total + parseFloat(order.price), 0).toFixed(2);

    // Pagination for Orders
    const indexOfLastOrder = currentPageOrders * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    // Pagination for Subscribers
    const indexOfLastSubscriber = currentPageSubscribers * subscribersPerPage;
    const indexOfFirstSubscriber = indexOfLastSubscriber - subscribersPerPage;
    const currentSubscribers = subscribers.slice(indexOfFirstSubscriber, indexOfLastSubscriber);

    const paginateOrders = (pageNumber) => setCurrentPageOrders(pageNumber);
    const paginateSubscribers = (pageNumber) => setCurrentPageSubscribers(pageNumber);

    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" className="services-area pt-4 pb-4 mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="text-center mb-4">Welcome to Admin Panel</h2>
                                <div className='total-sales'>
                                    <h4>Total Sales: ${totalSalesAmount}</h4>
                                </div>
                                <AdminMenu></AdminMenu>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <h2>Total Orders</h2>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sl.</th>
                                            <th scope="col">Order Date</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Customer Email</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Order Status</th>
                                            <th scope="col">Payment Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentOrders.map((order, index) => (
                                            <tr key={order._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{order.orderDate}</td>
                                                <td>{order.customerName}</td>
                                                <td>{order.customerEmail}</td>
                                                <td>${order.price}</td>
                                                <td>{order.orderStatus}</td>
                                                <td>{order.paymentStatus}</td>
                                                <td><Link className='btn btn-primary' to={`/admin/payment-status/${order._id}`}>Edit Status</Link></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* Bootstrap Pagination for Orders */}
                                <nav aria-label="Orders Page Navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className={`page-item ${currentPageOrders === 1 ? 'disabled' : ''}`}>
                                            <a className="page-link" onClick={() => paginateOrders(currentPageOrders - 1)} href="#" tabIndex="-1">Previous</a>
                                        </li>
                                        {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }, (_, i) => (
                                            <li key={i} className={`page-item ${currentPageOrders === i + 1 ? 'active' : ''}`}>
                                                <a className="page-link" onClick={() => paginateOrders(i + 1)} href="#">
                                                    {i + 1} {currentPageOrders === i + 1 && <span className="sr-only">(current)</span>}
                                                </a>
                                            </li>
                                        ))}
                                        <li className={`page-item ${currentPageOrders === Math.ceil(orders.length / ordersPerPage) ? 'disabled' : ''}`}>
                                            <a className="page-link" onClick={() => paginateOrders(currentPageOrders + 1)} href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="mt-5">Total Subscribers</h3>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sl No.</th>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentSubscribers.map((subscribe, index) => (
                                            <tr key={subscribe._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{subscribe.email}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* Bootstrap Pagination for Subscribers */}
                                <nav aria-label="Subscribers Page Navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className={`page-item ${currentPageSubscribers === 1 ? 'disabled' : ''}`}>
                                            <a className="page-link" onClick={() => paginateSubscribers(currentPageSubscribers - 1)} href="#" tabIndex="-1">Previous</a>
                                        </li>
                                        {Array.from({ length: Math.ceil(subscribers.length / subscribersPerPage) }, (_, i) => (
                                            <li key={i} className={`page-item ${currentPageSubscribers === i + 1 ? 'active' : ''}`}>
                                                <a className="page-link" onClick={() => paginateSubscribers(i + 1)} href="#">
                                                    {i + 1} {currentPageSubscribers === i + 1 && <span className="sr-only">(current)</span>}
                                                </a>
                                            </li>
                                        ))}
                                        <li className={`page-item ${currentPageSubscribers === Math.ceil(subscribers.length / subscribersPerPage) ? 'disabled' : ''}`}>
                                            <a className="page-link" onClick={() => paginateSubscribers(currentPageSubscribers + 1)} href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Admin;
