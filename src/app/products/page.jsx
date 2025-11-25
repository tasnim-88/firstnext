import { Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export default async function Products() {

    const res= await fetch('http://localhost:3001/products')
    const products= await res.json()
    console.log(products);
    

    // const products = [
    //     {
    //         id: 1,
    //         title: "Modern Armchair",
    //         price: 299.99,
    //         description: "A stylish and comfortable chair for any living space. Perfect for reading or relaxing.",
    //         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHCKL9B2Qy07ltyPDS3Zz1EbFryy5R59kkEQtrKFHHiLdxz5dUX3OY05rizK6r6RHNn1apFC_EXilEBDX6KKyQ2QD6FZZ0JOP1NcK9uDoix5-bhGafO0p0voWRbhh5YPMnPBxDFmm9nQMciJ-MzTMz0A6DhpgZnj1CXDo-oFSvTWHAr617VQe-FfkKqu2hzF0eyMkNVuOTJTOdL6PNmnv_H5safug432JJx28d6sm5SK8_5sMN1XV82fj0NaGbXF7R0F2Gpw9JvzY",
    //         badge: "NEW",
    //     },
    //     {
    //         id: 2,
    //         title: "Minimalist Desk Lamp",
    //         price: 49.99,
    //         description: "Sleek and adjustable lighting for your modern workspace. Enhances focus and style.",
    //         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJnx30BE5xcMs3AS2EtPiF4BZsyk8PwmEnKXG0fisal7FMfaYGtrIkBw4JsfMQqo456JAfZb56ZRTjZcNsf9z96uF51f127ehGsOrnEsLDOU5qBE7k5SrJay3NcDm-FgGcqU5jYFeNSPgvKqZA9s2eqvXhxfXTjt-bY16_u2-HQKnEHSXWmTRCfP0nJCL2YpUPTQJLkh48cuXFOZBBrOD4cfrZRYkiJ4n3skrdA_VwPW8iyje3sYyiekr8Af5RUSxYqgzO9x9i1Ik",
    //     },
    //     {
    //         id: 3,
    //         title: "Ergonomic Office Chair",
    //         price: 349.0,
    //         description: "Supportive seating designed for long hours of comfort and productivity at your desk.",
    //         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUxmBn7tNi8eH2vdWEYj9N0Xc41T_aS1LU3tbwG0qlEJFvXQxtYo1ufsnjqAJM654ziFcoaC7uJ90F9qtr77aBX3_Pvd41gZes6iGHGemBpuzzEi8ebT7kXVGbTjqelcwQLrJoOe4Onr01xjtk9TmHly0lyG9K6UQQpS2YBLLglPdu8FFbUhOCbToBi8XCYrmHzZBKclMPz-H1L0UUt7qVBoAt75w76bKFrwBccUWQq6gNakMK64AHFOv4hyHsRN1o4SIhnfPx1_c",
    //     },
    //     {
    //         id: 4,
    //         title: "Wireless BT Speaker",
    //         price: 89.5,
    //         description: "Portable speaker with rich sound and long battery life. Take your music anywhere.",
    //         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZntiMfawmIux3jsim35KWdPdjWg1NENifyh1w8epYmyrnYRO3b8odB-9MlArXBPdlDjSl8HtMAhdRrvH8BzVoVv1eKscOvTldxMSBcOmLkuSBZ2oNbNpQT1O-ZvHvDyM4GUCuffZ7HWGOaWiNt7XxjcI8mstnRXUM7YPPHJTQjX17ShoCSED3PhBeRmQXfeIF032Nar4vF_yEJxH0JaYne4gCVdda1Tu1qeR_Gyt_9rJ5FdQEuVw6LP-Jw4pkbWvLx3q9fibwFs8",
    //     },
    //     {
    //         id: 5,
    //         title: "Smart Coffee Maker",
    //         price: 120.0,
    //         description: "Brew the perfect cup of coffee from your phone with this smart connected machine.",
    //         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtxEmvnn6JbOOUjaqh1EgjzgdIlRDd9OeNfv92ALxnwseWU0VV2lP89whdVHbtQLPfB3S4rOHD8fIAqFYABiR761JPvhj2vuGRdFjynaf-orXkbKRFbtzel2O5oU5_Py4Dd-BvvlZGyYKrDp0hCq4_YQwlkcflWWpCp8dfH0B0Ks4_eWh8nY0wKYlQR6bYcNqBlD1jQCVZygEYpG5oXubLRWGj3qC0O-MXR0Opp7KYH6Yedfw1KHaXCsgSGu5IItrNKAUFF-7kxlM",
    //     },
    //     {
    //         id: 6,
    //         title: "Ceramic Planter Set",
    //         price: 35.99,
    //         description: "A set of three elegant planters to elevate your indoor garden and home decor.",
    //         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp2Qv1rszEixHC5LonBXWXS0sCpzgbhFnXV-YCoBIS-j7vUau357lT6h7c_9qi9INuBXPYS8EpBzPjFWScu6mZ6bUQzk7Gw4MP1c-uPEtLcVESyNh_9hNaOvkQqZklZmnXo9OWB4zCybpxD-bJ3-MVHasn960sQMRuxnBFC4Px-KDVeJ73-rJBxyEOmemYJTNB0x_OWYvbvOJiVmtdE4dmCp6M8uF0FYpYtIHF5zX53XJRPPB8DPZDQT0EnbcO2NmVNp5RpAyFwbA",
    //     },
    // ];

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
                <div className="flex-grow">
                    <div className="relative">
                        <Search className="absolute left-4 top-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
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
                            <button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-sm hover:shadow-md">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
