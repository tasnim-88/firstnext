import Image from 'next/image';
import React from 'react'

export default async function FeaturedProducts() {

    const res = await fetch('http://localhost:3001/products', {
        cache: "no-store"
    })
    const products = await res.json()
    console.log(products);

    return (
        <section className="w-full max-w-6xl mx-auto py-10 px-10 md:px-0">
            <h2 className=" text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-5">
                Featured Products
            </h2>



            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
                {/* Product 1 */}
                {
                    products.map(p =>
                        <div key={p._id} className="flex flex-col gap-3 group">
                            <div className="w-full bg-center bg-no-repeat aspect-3/4 bg-cover rounded-lg overflow-hidden relative">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                                >
                                    <Image width={400} height={400} src={p.image} alt="" />
                                </div>
                            </div>

                            <div>
                                <p className=" text-base font-medium">
                                    {p.title}
                                </p>
                                <p className=" text-sm">${p.price}</p>
                            </div>
                        </div>
                    )
                }


            </div>
        </section>

    )
}
