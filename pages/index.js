import CategorySection from "@/components/CategorySection";
import NewsletterPopup from "@/components/NewsletterPopup";
import SlideShow from "@/components/SlideShow";
import Topbar from "@/components/Topbar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductGrid from "@/components/productgrid";

export default function Home({ products }) {
  return (
    <>
      <Topbar />
      <NewsletterPopup />
      <Header />
      <SlideShow />
      <CategorySection /> 
      <ProductGrid products={products} itemsPerRow={4} limit={8} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/api/admin/product/getProducts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const products = data.products;
    return {
      props: {
        products
      }
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        products: []
      }
    };
  }
}
