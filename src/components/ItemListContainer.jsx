import ItemList from './ItemList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const db = getFirestore();
                const itemsCollection = collection(db, 'deporte');

                let productsQuery = query(itemsCollection);
                if (category) {
                    productsQuery = query(itemsCollection, where('categoria', '==', category));
                }

                const snapshot = await getDocs(productsQuery);
                const docs = snapshot.docs.map((doc) => doc.data());
                setProductos(docs);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        console.log(productos);

        fetchProducts();
    }, [category]);
    return (
        <ItemList product={productos} />
    );
};

export default ItemListContainer;
