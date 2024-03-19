import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>

            <Flex bg='#b5838d'>
                <Box borderRadius='5' p='4' bg='#6d6875'>
                    <Link to={"/"}>
                        <h1>DeporShop</h1>
                    </Link>
                </Box>
                <Spacer />
                <Box borderRadius='5' p='4' bg='#6d6875'>
                    <Menu>
                        <MenuButton>
                            Categoria
                        </MenuButton>
                        <MenuList borderRadius='5' p='4' bg='#6d6875'>
                            <Link to={`/category/${"tenis"}`}>
                                <MenuItem>Tenis</MenuItem>
                            </Link>
                            <Link to={`/category/${"futbol"}`}>
                                <MenuItem>Futbol</MenuItem>
                            </Link>
                            <Link to={`/category/${"voley"}`}>
                                <MenuItem>Voley</MenuItem>
                            </Link>
                            <Link to={`/category/${"hockey"}`}>
                                <MenuItem>Hockey</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>

                </Box>
                <Spacer />
                <Box w='14' borderRadius='5' p='4' bg='#6d6875'>
                    <Link to={"/Cart"}>
                        <CartWidget />
                    </Link>
                </Box>
            </Flex>

        </div>
    )
}

export default NavBar