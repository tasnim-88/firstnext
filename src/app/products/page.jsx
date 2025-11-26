import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function Products() {

    const res = await fetch('http://localhost:3001/products', {
        cache: "no-store"
    })
    const products = await res.json()
    console.log(products);


    const categories = ["All", "Furniture", "Lighting", "Electronics", "Decor"];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                    Explore Our Collection
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Discover a wide range of high-quality items curated just for you.
                </p>
            </div>

            {/* Search + Filters */}
            <div className="flex flex-col md:flex-row gap-6 mb-12">
                {/* Search Bar */}
                <div className="grow">
                    <div className="relative">
                        <Search className="absolute left-4 top-6  -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search for an item..."
                            className="w-full h-12 pl-12 pr-4 rounded-lg border border-input bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                        />
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-3 items-center">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`h-12 px-6 rounded-lg font-medium transition-all ${cat === "All"
                                ? "bg-primary text-white hover:bg-primary/90 shadow-sm"
                                : "bg-card hover:bg-accent text-foreground"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="group flex flex-col bg-card rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-4/3 overflow-hidden bg-muted">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {product.badge && (
                                <span className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {product.badge}
                                </span>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-foreground">
                                {product.title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground flex-1">
                                {product.description}
                            </p>
                            <p className="mt-4 text-2xl font-bold text-primary">
                                ${product.price.toFixed(2)}
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="p-6 pt-0">
                            <Link href={`/productdetails/${product._id}`} className="btn w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-sm hover:shadow-md">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
