import { Grid, Card, Text, Container } from "@nextui-org/react";
import Image from 'next/image'
interface Product {
  id: number;
  title: string;
  description: String;
}

interface ProductsProps {
  products: Product[];
}

export default function DataAPI({ products }: ProductsProps): JSX.Element {
    // console.log(products)
  return (
    <Container css={{mt:100}}>
        <Text css={{ textAlign:'center', pb:64, fontSize: '3.75rem',}}>LOREM IPSUM</Text>   
        <Grid.Container gap={2} justify="center" >
            {products.map(product => (
                <Grid xs={4} key={product.id} css={{width:416, height:380, }}>
                <Card >
                <Card css={{alignItems:'center'}} >
                <Image src="/rectangle.png" width={416} height={236}  alt={""} /> 
                    </Card>
                    <Text css={{pl:10, pt:10}}>{product.title}</Text>
                    <Text css={{pl:10,}}>{product.description}</Text>
                </Card>
                </Grid>
            ))}
            </Grid.Container>
    </Container>
  
  );
}
