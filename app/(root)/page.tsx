import Product from "@/components/shared/product";
import Image from "next/image";

export default function Home() {
  // import static list of products.
  return (
    <>
      // HERO SECTION

      // Testinomals 
      
      <Product name="sample" price={10} description="sample description" image="/path/to/image" key={1} />

      // FAQ
    </>
  );
}
