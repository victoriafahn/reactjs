import { Stack } from '@chakra-ui/react';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'


const SendOrders = ({ cart }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState(null);

    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(ordersCollection, order).then(({ id }) =>
            setOrderId(id));
    }

    const order = {
        Cliente: {
            name,
            email
        },
        Items: cart
    }

    const ordersCollection = collection(db, "MiOrden")

    return (
        <div>
            <Stack bg="gray" maxWidth="400" m="20">

                <form onSubmit={handleSubmit} >
                    <h1>Formulario de compra.</h1>
                    <input type="text" placeholder='Nombre' onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <button type='submit'>Enviar</button>
                    <p>Número de compra: {orderId}</p>
                </form>
            </Stack>
        </div>
    )
}

export default SendOrders