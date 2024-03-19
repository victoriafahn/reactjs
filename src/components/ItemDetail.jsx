import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Center } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ItemDetail = ({ product }) => {
    const { id } = useParams()
    const { addToCart } = useCart();
    const filteredProduct = product.filter((product) => product.id == id)

    const handleAddToCart = () =>{
        addToCart(filteredProduct[0])
    };

    return (
        <>
            {
                filteredProduct.map((p) => {
                    return (
                        <Center p="0" key={p.id}>
                            <div>
                                <Card maxW='sm'>
                                    <CardBody>
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{p.nombre}</Heading>
                                            <img src={p.imagen} alt="imagen" />
                                            <Text>
                                                {p.descripcion}
                                            </Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                ${p.precio}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter>
                                        <>
                                            <ItemCount />
                                        </>
                                        <ButtonGroup spacing='2'>
                                            <Button variant='solid' colorScheme='blue'>
                                                Buy now
                                            </Button>
                                            <Button onClick={handleAddToCart} variant='ghost' colorScheme='blue'>
                                                Add to cart
                                            </Button>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                            </div>
                        </Center>
                    );
                })
            }
        </>
    )
}
export default ItemDetail