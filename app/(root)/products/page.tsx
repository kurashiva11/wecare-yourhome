import { listOfProducts } from '../../../constants/products';
import Image from "next/image";

export default function Products() {
    return (
        <section id="Projects"
            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {listOfProducts.map((product, idx) => (
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <Image src={product.image} alt="Modern building architecture" className="h-80 w-72 object-cover rounded-t-xl" width={80} height={72} />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                            <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                            {/* Truncate the description below and add a read more link. */}
                            {/* or else open up a new card as a pop up with full details. */}
                            <p className="text-black truncate block capitalize">{product.description}</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">${product.price}</p>
                                </del>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </section>
    )
}