import Nav from "./component/navbar";
import { createTheme, NextUIProvider,Container,Col } from "@nextui-org/react"
import Image from 'next/image'
import Title from "./component/title";
import DataAPI from "./component/dataAPI";
import Contact from "./component/contact";
const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  }
})
interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;

}

interface ProductsProps {
  products: Product[];
}

export async function getServerSideProps(): Promise<{ props: ProductsProps }> {
  const res = await fetch('https://dummyjson.com/products?limit=3');
  const data = await res.json();
  const dataproducts = data.products

  return {
    props: {
      products: dataproducts
    }
  };
}

function Products({ products }: ProductsProps): JSX.Element {
  
  return (
    <NextUIProvider theme={theme}>
     <div className="bg-slate-800" >
      <Nav/>
      <Title/>  
      <DataAPI products={products}/>  
      <Contact/>
    </div>
    </NextUIProvider>
  
  );
}

export default Products;
