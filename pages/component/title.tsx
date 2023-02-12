import React from 'react'
import { Text, Row,Col, Container, Grid, Spacer, } from "@nextui-org/react";
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function title() {
  return (
    <div> 

      <Row  justify="center" align="center" css={{ fontfamily: 'Montserrat', pt:178,}} >
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
      
      <Spacer y={10} />

       <Carousel >
          <div>
              <Row justify="center" >
                <Text weight="bold" css={{ textAlign:'center', fontSize: '3.75rem', }}>LOREM IPSUM </Text>
                <Text weight="bold" css={{ color: '#D9EF0C', pl:14, textAlign:'center',  fontSize: '3.75rem', }}>LOREM</Text>
              </Row>
              <Grid.Container justify="center">
                <Row css={{width:200,height:200,mt:60}}>
                    <Image src="/Ellipse.png" width={200} height={200} className="rounded-full " alt={""} />      
                </Row>
                </Grid.Container>         
                <Text weight="bold"  css={{pt:61, textAlign:'center', fontSize: '1.75rem',}}>Lorem Ipsum is simply</Text>
                <Text css={{pt:20,textAlign:'center', fontSize: '1.125rem', mb:90,}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  <br/>
                  been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took 
                  <br/>
                  a galley of type and scrambled it to make a type specimen book.
              </Text>
          </div>
          <div>
              <Row justify="center" >
                <Text weight="bold" css={{ textAlign:'center', fontSize: '3.75rem', }}>LOREM IPSUM </Text>
                <Text weight="bold" css={{ color: '#D9EF0C', pl:14, textAlign:'center',  fontSize: '3.75rem', }}>LOREM</Text>
              </Row>
              <Grid.Container justify="center">
                <Row css={{width:200,height:200,mt:60}}>
                    <Image src="/Ellipse.png" width={200} height={200} className="rounded-full " alt={""} />      
                </Row>
                </Grid.Container>         
                <Text weight="bold"  css={{pt:61, textAlign:'center', fontSize: '1.75rem',}}>Lorem Ipsum is simply</Text>
                <Text css={{pt:20,textAlign:'center', fontSize: '1.125rem', mb:90,}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  <br/>
                  been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took 
                  <br/>
                  a galley of type and scrambled it to make a type specimen book.
              </Text>
          </div>
          <div>
              <Row justify="center" >
                <Text weight="bold" css={{ textAlign:'center', fontSize: '3.75rem', }}>LOREM IPSUM </Text>
                <Text weight="bold" css={{ color: '#D9EF0C', pl:14, textAlign:'center',  fontSize: '3.75rem', }}>LOREM</Text>
              </Row>
              <Grid.Container justify="center">
                <Row css={{width:200,height:200,mt:60}}>
                    <Image src="/Ellipse.png" width={200} height={200} className="rounded-full " alt={""} />      
                </Row>
                </Grid.Container>         
                <Text weight="bold"  css={{pt:61, textAlign:'center', fontSize: '1.75rem',}}>Lorem Ipsum is simply</Text>
                <Text css={{pt:20,textAlign:'center', fontSize: '1.125rem', mb:90,}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  <br/>
                  been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took 
                  <br/>
                  a galley of type and scrambled it to make a type specimen book.
              </Text>
          </div>        
        </Carousel>
        <Spacer y={5} />
    </div>
  
   
  )
}
