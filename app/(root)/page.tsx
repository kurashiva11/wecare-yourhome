import { BentoGridDemo } from "@/components/shared/ProductList";

export default function Home() {
  // import static list of products.
  let listOfProducts = [
    {
      name: "machine1",
      price: 500,
      rentPerWeek: 25,
      image: "/Capture.PNG",
      description: "sample description"
    },
    {
      name: "machine2",
      price: 500,
      rentPerWeek: 25,
      image: "/Capture.PNG",
      description: "sample description2"
    },
    {
      name: "machine3",
      price: 600,
      rentPerWeek: 35,
      image: "/Capture.PNG",
      description: "sample description3"
    },
    {
      name: "machine4",
      price: 700,
      rentPerWeek: 45,
      image: "/Capture.PNG",
      description: "sample description4"
    },
    {
      name: "machine4",
      price: 700,
      rentPerWeek: 45,
      image: "/Capture.PNG",
      description: "sample description4"
    },
    {
      name: "machine4",
      price: 700,
      rentPerWeek: 45,
      image: "/Capture.PNG",
      description: "sample description4"
    },
    {
      name: "machine4",
      price: 700,
      rentPerWeek: 45,
      image: "/Capture.PNG",
      description: "sample description4"
    }
  ]
  return (
    <>
      // HERO SECTION

      // Testinomals 
      
      // Testinomals
      {/* TODO: onClick should popup and show full details of the product. */}
      <BentoGridDemo items={listOfProducts} />
      
      // FAQ
    </>
  );
}
