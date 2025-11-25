import React from 'react'

export default function Hero() {
    return (
        <section className="relative w-full bg-gray-50 py-32 px-6 text-center overflow-hidden">

            <div className="relative z-10 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    The Ultimate Solution for <br /> Your Business Growth
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    Streamline your workflow, boost productivity, and achieve your goals with our intuitive
                    and powerful platform.
                </p>

                <button className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg transition">
                    All Products
                </button>
            </div>
        </section>
    )
}
