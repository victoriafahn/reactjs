import React from 'react'
import Item from './Item'

const ItemList = ({ product }) => {
    console.log(product);
    return (
        <div>
            {
                product.map((p) => {
                    return (
                        <>
                            <Item
                                id={p.id}
                                nombre={p.nombre}
                                descripcion={p.descripcion}
                                precio={p.precio}
                                imagen={p.imagen}
                            />
                        </>
                    )
                })
            }
        </div>
    )
}

export default ItemList