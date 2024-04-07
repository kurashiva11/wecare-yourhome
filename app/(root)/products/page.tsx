import { BentoGridDemo } from "@/components/shared/ProductList";
import { listOfProducts } from '../../../constants/products';

export default function Products() {
     // import static list of products.
    return (
        <>
            <section id="products" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
                <h2 className="h2-bold">Trusted by <br/> Thousands of Customers.</h2>

                <div className="flex flex-col w-full gap-5 md:flex-row">
                Search
                {/* TODO: onClick should popup and show full details of the product. */}
                <BentoGridDemo items={listOfProducts} />
                </div>
            </section>
        </>
    )
}