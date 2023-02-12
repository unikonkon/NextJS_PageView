import Nav from "./component/navbar";
import { createTheme, NextUIProvider, } from "@nextui-org/react"
import Title from "./component/title";
import DataAPI from "./component/dataAPI";
import Contact from "./component/contact";


const theme = createTheme({
  type: "dark", 
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
    
      <Nav/>
      <Title/>  
      <DataAPI products={products}/>  
      <Contact/>
    
    </NextUIProvider>
  
  );
}

export default Products;
