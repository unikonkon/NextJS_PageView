import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import Image from 'next/image'

export default function Nav() {
  // const { isDark } = useTheme();

  return (
  
      <Navbar  variant="sticky" className="bg-slate-200">
        <Navbar.Brand>
        <Image src="/logo.png" width={74} height={87} className="rounded-full " alt={""} /> 
       
         <Text style={{ fontStyle: 'italic' }} css={{color: '#FFFFFF', fontSize: '1.5rem', }}>
          LoREM 
          </Text>
          <Text style={{ fontStyle: 'italic' }} css={{color: '#D9EF0C', fontSize: '1.5rem', padding: '$2 $4'}}>
           IPSUM
          </Text>
     
       
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="#">LOREM</Navbar.Link>
          <Navbar.Link href="#">LOREM</Navbar.Link>
          <Navbar.Link href="#">LOREMIPSUM</Navbar.Link>
          <Navbar.Link href="#">LOREM & IPSUM</Navbar.Link>
          <Navbar.Link href="#">LOREM</Navbar.Link>
        </Navbar.Content>
       
      </Navbar>
 
  )
}
