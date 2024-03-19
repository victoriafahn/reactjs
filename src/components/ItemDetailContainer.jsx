import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {


    const [productos, setProductos] = useState([])

    useEffect(() => {
        const db= getFirestore()
        const itemsCollection = collection(db, "deporte")
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setProductos(docs)
        })
    })


    return (
        <>
            <ItemDetail product={productos} />
        </>
    )
}

export default ItemDetailContainer