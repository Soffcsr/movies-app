import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const Topbar = () => {
  return (
    <Navbar
        className="my-2"
        color="dark"
        dark
    >
        <NavbarBrand href="/">
        <img
            alt="logo"
            src="/logo-white.svg"
            style={{
            height: 40,
            width: 40
            }}
        />
        </NavbarBrand>
    </Navbar>
  )
}

export default Topbar