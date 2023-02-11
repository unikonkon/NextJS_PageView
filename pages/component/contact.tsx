import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Text,Textarea, Row,Col,Grid,Spacer,Button, Container,Input,Popover } from "@nextui-org/react";
import Image from 'next/image'

export default function contact() {
    const [value, onChange] = useState(new Date());
  return (
    <div>
          <Row css={{pt:201,pb:200}}>
         <div>
            <Col css={{pl:100}}>
            <Image src="/Bicycle.png" width={719} height={423} className="rounded-full " alt={""} /> 
            </Col>
            
        </div> 
        <div>
        <Text css={{ pb:20, fontSize: '3.75rem',}}>ติดต่อเรา</Text>
           <Grid>
              <Input
                clearable
                underlined
                labelPlaceholder="ชื่อ - นามสกุล"
                css={{width:400,fontSize: '1.125rem',}} 
                />          
            </Grid> 
            <Spacer y={1.5} />  
            <Grid> 
               <Input
                clearable
                underlined
                labelPlaceholder="เบอร์ติดต่อ"
                css={{width:400,fontSize: '1.125rem',}} 
                />
            </Grid> 
            <Spacer y={1.5} />
            <Grid>
                  <Input
                clearable
                underlined
                labelPlaceholder="อีเมล"
                css={{width:400,fontSize: '1.125rem',}} 
                />
           </Grid>
           <Spacer y={1.5} />
            <Row>
                <Input
                clearable
                underlined
                labelPlaceholder="วันที่"
                css={{width:360,fontSize: '1.125rem',}} 
                />
            <Popover placement="bottom-right">
            <Popover.Trigger>
                <Button auto flat></Button>
            </Popover.Trigger>
            <Popover.Content>
            <div>
                    <Calendar
                        onChange={onChange}
                        value={value}
                    />
                </div>
            </Popover.Content>
            </Popover>
            </Row>
            <Spacer y={1.5} />
            <Text css={{color: '#707070', fontSize: '1rem',}}>
            Lorem Ipsum is simply Lorem Ipsum 
            <br/>
            is simply Lorem Ipsum is simply 
            </Text>
            <Container></Container>
            <Container css={{justify:'center'}}>
            <Button css={{ color: '#707070', fontSize: '1rem',}}>LOREM</Button>
            </Container>
          
        </div>
     
     </Row>

    </div>
  )
}
