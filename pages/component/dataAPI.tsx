import { Box } from "@mui/material";
import { Grid, Card, Text, Container } from "@nextui-org/react";
import Image from 'next/image'
interface Product {
  id: number;
  title: string;
  description: string;
}

interface ProductsProps {
  products: Product[];
}

export default function DataAPI({ products }: ProductsProps): JSX.Element {
    // console.log(products)

  return (
    <Box sx={{ bgcolor: '#D9EF0C', pb:15, pt:15 }}>
    <Container >
        <Text css={{color: '#000000', textAlign:'center', pb:64, fontSize: '3.75rem',}}>LOREM IPSUM</Text>   
          <Grid.Container gap={2} justify="center" css={{ bgcolor: '#FEFFF3' }}>
                {products.reduce((acc, product) => {
                  acc.push(
                    <Grid xs={12} sm={6} md={4} key={product.id} css={{width:416, height:380, bgcolor: '#FEFFF3'}}>
                      <Card >
                        <Card css={{alignItems:'center'}} >
                          <Image src="/rectangle.png" width={416} height={236}  alt={""} /> 
                        </Card>
                        <Text css={{pl:10, pt:10}}>{product.title}</Text>
                        <Text css={{pl:10,}}>{product.description}</Text>
                      </Card>
                    </Grid>
                  );
                  return acc;
                }, [])}
        </Grid.Container>
        {/* <Grid.Container gap={2} justify="center" css={{ bgcolor: '#FEFFF3' }}>
            {products.map(product => (
              
                <Grid xs={12} sm={6} md={4} key={product.id} css={{width:416, height:380, bgcolor: '#FEFFF3'}}>
                  
                <Card >
                <Card css={{alignItems:'center'}} >
                <Image src="/rectangle.png" width={416} height={236}  alt={""} /> 
                    </Card>
                    <Text css={{pl:10, pt:10}}>{product.title}</Text>
                    <Text css={{pl:10,}}>{product.description}</Text>
                </Card>
              
                </Grid>
              
            ))}
            </Grid.Container> */}
    </Container>
    </Box>
  
  );
}
