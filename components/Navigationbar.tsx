import React from 'react'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import { SampleLogo } from './SampleLogo';
import Link from 'next/link';
import { Button } from '@nextui-org/button';

const Navigationbar = () => {
  return (
    <Navbar className="dark" isBordered>
    <NavbarBrand>
      <SampleLogo />
      <p className="font-bold text-inherit">ACME</p>
    </NavbarBrand>
    <NavbarContent className="sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="/extra">
          Extra
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          Customers
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Integrations
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="api/auth/signin" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  )
}

export default Navigationbar
