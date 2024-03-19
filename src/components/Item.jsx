import React from 'react'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, imagen, id }) => {
    return (
        <Center p="0" >
            <div><Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{nombre} </Heading>
                        <img src={imagen} alt="" />
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to={`/item/${id}`}>
                            <Button variant='solid' colorScheme='blue'>
                                Ver detalle
                            </Button>
                        </Link>

                    </ButtonGroup>
                </CardFooter>
            </Card></div>
        </Center>
    )
}

export default Item