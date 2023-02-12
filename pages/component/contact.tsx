import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Text, Row,Col,Grid,Spacer,Button,Input,Popover } from "@nextui-org/react";
import Image from 'next/image'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Contact() {
    const [value, onChange] = useState(new Date());
  return (
    <div>
          <Row css={{pt:201,pb:200,}}>
         <Col css={{ pl:120,}}>
            <Col css={{}}>
            <Image src="/Bicycle.png" width={719} height={423}  alt={""} /> 
            </Col>
            
        </Col> 
        <Col css={{ pl:120,}}>
        <Text weight="bold" css={{ pb:20, fontSize: '3.75rem',}}>ติดต่อเรา</Text>
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
                labelPlaceholder="วันที่ 04/08/2022"
                css={{width:400,fontSize: '1.125rem', }} 
                contentRightStyling={false}
                contentRight={          
                    <Popover placement="bottom-right" >
                    <Popover.Trigger >
                        <Button light auto>
                        <CalendarMonthIcon />
                        </Button>   
                    </Popover.Trigger>
                    <Popover.Content css={{ color: '#272727' }}>
                            <Calendar
                                onChange={onChange}
                                value={value}
                            />                        
                    </Popover.Content>
                </Popover>}
                />    
            </Row> 
            
            <Spacer y={1.5} />
            <Text css={{ fontSize: '1rem',}}>
            Lorem Ipsum is simply Lorem Ipsum 
            <br/>
            is simply Lorem Ipsum is simply 
            </Text>

            <Button  color="warning" css={{  mt:75, fontSize: '1rem', }}>
            <Text css={{color: '#000000',}}>LOREM</Text> 
            </Button>
           
          
        </Col>
     
     </Row>

    </div>
  )
}
