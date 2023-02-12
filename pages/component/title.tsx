import React from 'react'
import { Text,Container, Row,Col,Grid,Card } from "@nextui-org/react";
import Image from 'next/image'
export default function title() {
  return (
    <div> 

      <Row  justify="center" align="center" css={{ fontfamily: 'Montserrat', pt:178 }} >
          <div >
          <Text weight="bold" css={{color: '#FFFFFF', fontSize: '6rem', }} >
          LOREM 
          </Text>
          <Text weight="bold" css={{color: '#D9EF0C', fontSize: '6rem', }}>
           IPSUM
          </Text>
        
          <Text weight="bold"  css={{color: '#FFFFFF', fontSize: '1.25rem',}}>
          Lorem Ipsum is simply Lorem Ipsum 
          <br/>
          is simply Lorem Ipsum is simply 
          </Text>
          <br/>
          <Text css={{color: '#FFFFFF', fontSize: '1.125rem', }}>
          Lorem Ipsum is simply dummy text of the 
          <br/>
          printing and typesetting industry.Lorem Ipsum 
          <br/>
          has been the industry&apos;s    
          </Text>
        </div>
        <div>
            <Col css={{pl:100}}>
            <Image src="/Bicycle.png" width={858} height={504} className="rounded-full " alt={""} /> 
            </Col>
            
        </div>         
      </Row>
     
      <Row justify="center">
      <Text weight="bold" css={{ textAlign:'center', pb:64, fontSize: '3.75rem', pt:200}}>LOREM IPSUM </Text>
      <Text weight="bold" css={{ color: '#D9EF0C', pl:14, textAlign:'center', pb:64, fontSize: '3.75rem', pt:200}}>LOREM</Text>
      </Row>
      
        <Row justify="center">
            <Image src="/Ellipse.png" width={200} height={200} className="rounded-full " alt={""} />      
        </Row>         
        <Text weight="bold"  css={{pt:61, textAlign:'center', fontSize: '1.75rem',}}>Lorem Ipsum is simply</Text>
        <Text css={{pt:20,pb:225,textAlign:'center', fontSize: '1.125rem', }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        <br/>
        been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took 
        <br/>
        a galley of type and scrambled it to make a type specimen book.
        </Text>
      
    </div>
  
   
  )
}
