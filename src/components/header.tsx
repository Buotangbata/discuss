import Link from 'next/link';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    Button,
    Avatar,
    divider
} from '@nextui-org/react';

import { auth } from '@/auth';

export default async function Header(){
    const session = await auth();

    return (
        <Navbar className="chadow mb-6"> 
            <NavbarBrand>
                <Link href='/' className='font-bold'>Discuss</Link>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <NavbarItem>
                    <Input />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
                <NavbarItem>
                    {
                        session?.user ? <div>Signed In</div> : <div>Signed Out</div>
                    }
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}