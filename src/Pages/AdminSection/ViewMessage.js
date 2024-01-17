import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/AdminMenu';
import { Link, useParams } from 'react-router-dom';

const ViewMessage = () => {

    const [message, setMessage] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        fetch(`https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/message/${id}`)
            .then((res) => res.json())
            .then((info) => setMessage(info));
    }, []);

    const handleMessage = (event) => {
        event.preventDefault();
    
        const messageStatus = event.target.messageStatus.value;

        const updateMessageStatus = {
 
            messageStatus,
        };

        const url = `https://rjnecommerceseo-88b17f4b1cb1.herokuapp.com/message/${message._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateMessageStatus),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Message is Read');
            });
    };




    return (
        <>
            <section id="services" class="services-area pt-120 pb-90 fix" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div>
                            <h2>Welcome to Admin Panel</h2>
                            <AdminMenu></AdminMenu>

                            <h4>Sender Name: {message.fullName} </h4>
                            <h4>Sender Email: {message.emailAddress} </h4>
                            <h4>Sender Phone: {message.phoneNumber} </h4>
                            <h4>Sender WebSite: {message.website} </h4>
                            <h4>Sender Subject: {message.subject} </h4>
                            <p>Message {message.message}</p>
                        </div>
                       


                    </div>
                    {
                        message.messageStatus === "UnRead" ?
                        <form onSubmit={handleMessage}>
                            <input type='text' hidden name='messageStatus' value='Read'></input>
                            <input className='template-btn' type='submit' value='Mark Read'></input>

                        </form>
                        :
                        <></>
                    }
                </div>
                
            </section>



        </>
    );
};

export default ViewMessage;