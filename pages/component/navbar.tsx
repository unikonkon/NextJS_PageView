import { Navbar, Button, Link, Text,Dropdown, useTheme, Container } from "@nextui-org/react";
import Image from 'next/image'

export default function Nav() {
  const { isDark } = useTheme();

  return (

      <Navbar  variant="sticky" height={150}>
        <Navbar.Brand>
        <Image src="/logo.png" width={74} height={87} className="rounded-full " alt={""} /> 
       
         <Text style={{ fontStyle: 'italic' }} css={{color: '#FFFFFF', fontSize: '1.5rem', pl:9}}>
          LoREM 
          </Text>
          <Text style={{ fontStyle: 'italic' }} css={{color: '#D9EF0C', fontSize: '1.5rem', padding: '$2 $4'}}>
           IPSUM
          </Text>
     
       
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline" >
          <Navbar.Link href="#">LOREM</Navbar.Link>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                // iconRight={icons.chevron}
                ripple={false}
              >
                LOREM
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}>
              <Dropdown.Item
                key="Item1"  >
                Item 1
              </Dropdown.Item>
              <Dropdown.Item
                key="Item2">
                Item 2
              </Dropdown.Item>
              <Dropdown.Item
                key="Item3">
                Item 3
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link href="#">LOREMIPSUM</Navbar.Link>
          <Navbar.Link href="#">LOREM & IPSUM</Navbar.Link>
          <Navbar.Link href="#">LOREM</Navbar.Link>
        </Navbar.Content>
       
      </Navbar>

  )
}
