import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        // <section className="relative w-full bg-gray-50 py-32 px-6 text-center overflow-hidden">

        //     <div className="relative z-10 max-w-3xl mx-auto">
        //         <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        //             The Ultimate Solution for <br /> Your Growth
        //         </h1>

        //         <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        //             Streamline your workflow, boost productivity, and achieve your goals with our intuitive
        //             and powerful products.
        //         </p>

        //         <Link href={'/products'} className="btn mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg transition">
        //             All Products
        //         </Link>
        //     </div>
        // </section>

        <section className="@container">
            <div className="@[480px]:p-4">
                <div
                    className="
        flex min-h-[60vh] md:min-h-[480px] flex-col gap-6 bg-cover bg-center 
        bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center 
        p-4 text-center
      "
                    aria-label="A stylish arrangement of fashion accessories on a muted background."
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), 
          url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsCCKhg-lL2yFIK4-Kqspb3c8L9FjrwIaHOYloikHEw-Hz7drkZunYYd7SM0N-i683rSXegU5of5n8K57oa1kk6UcvGdE1--P6mdQUTmgh7QPLouixtNjM0nV8hYYW-WuDvqBqkjjiZsMQRtZ1LHbSZHbvWmV-CpMZO3bMYYRh-Fn4pYtkDOftJ05JX3JKVx6ma6AMEg0pKumKIJJQEqcnGMWsVIPPM9ZJ19tEK8SI45cHTQ2zjwD5aLTG-qN5SCyCCZTv0GEp9gqa")`
                    }}
                >
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                            Discover Your Signature Style
                        </h1>

                        <p className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base max-w-xl">
                            Explore our curated collection of high-quality apparel and accessories,
                            designed to fit your unique lifestyle.
                        </p>
                    </div>

                    <Link href={'/products'}
                        className="
          flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center 
          overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 
          bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] 
          @[480px]:text-base hover:bg-primary/90 transition-transform active:scale-95
        "
                    >
                        <span className="truncate">All Collection</span>
                    </Link>
                </div>
            </div>
        </section>

    )
}
