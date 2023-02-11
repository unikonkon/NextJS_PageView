import React from 'react'
import { Text,Container, Row,Col,Grid, } from "@nextui-org/react";
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
        
          <Text css={{color: '#FFFFFF', fontSize: '1.25rem',}}>
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
      
    </div>
  
   
  )
}
