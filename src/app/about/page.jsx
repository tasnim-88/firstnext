import Link from 'next/link'
import React from 'react'
import { MdEco, MdOutlineSupportAgent, MdOutlineVerified } from "react-icons/md";


export default function About() {
  return (
    <main className="flex-1 px-4 sm:px-10 md:px-20 lg:px-40 flex justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">

        {/* Hero Section */}
        <div className="@container mb-12">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
              data-alt="High-quality lifestyle shot of a workshop with natural light"
              style={{
                backgroundImage:
                  `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), 
              url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHPZbjqnooq7ZbyCXrmqpfpNuiTlrYN3DotyARxN44eIInnsjjYTzAr0g4JGDlt2ZM3JU1t3eAe-E7RjDec1grBhsayrWFnXU0isTRcpZRb_CY0QHFAuJBp3r0qfKdxovjppAwrbewIBx-sECjrXZcUMsbnblDBKHfx7P9pPrfGRly_AB1u_IwZFpgywxZ3p_ook2doVCaI8gMUcW-5qczm3iW3H97lNbPy0Z_9AdCYgc4euq0mAiBtRiQ3lCiMKSdaPNCev5Vv0Hp")`
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                  Our Story
                </h1>
                <h2 className="text-gray-200 text-sm font-normal leading-normal @[480px]:text-base max-w-md">
                  Discover the passion and purpose woven into every product we create.
                </h2>
              </div>

              <Link href={'/products'} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="mb-10">
          <div className="flex flex-col items-center text-center px-4 py-8">
            <h2 className=" text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">
              Welcome to E-Commerce Brand
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              We are your premier destination for high-quality, handcrafted goods. Our
              platform is dedicated to bringing you a curated selection of unique products
              from talented artisans. We believe in the power of craftsmanship to create
              items that are not only beautiful but also built to last. Explore our
              collections and discover pieces that tell a story.
            </p>
          </div>
        </section>

        {/* Principles Section */}
        <section className="mb-16">
          <h2 className=" text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-6 pt-5 text-center">
            What Drives Us: The Principles We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

            <div className="flex flex-col items-center text-center p-6   rounded-xl shadow-sm">
              <div className="flex items-center justify-center size-12 mb-4 rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl"><MdOutlineVerified /></span>
              </div>
              <h3 className="text-lg font-bold ">
                Uncompromising Quality
              </h3>
              <p className="text-gray-600 text-sm">
                We are committed to the highest standards of craftsmanship and materials in every product we create.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-center size-12 mb-4 rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl"><MdEco /></span>
              </div>
              <h3 className="text-lg font-bold  mb-2">
                Sustainable Practices
              </h3>
              <p className="text-gray-600  text-sm">
                We believe in protecting our planet, using eco-friendly materials and ethical production methods.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6  rounded-xl shadow-sm">
              <div className="flex items-center justify-center size-12 mb-4 rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-3xl"><MdOutlineSupportAgent /></span>
              </div>
              <h3 className="text-lg font-bold  mb-2">
                Customer Commitment
              </h3>
              <p className="text-gray-600  text-sm">
                Our customers are at the heart of everything we do. We strive to provide an exceptional experience.
              </p>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/20 dark:bg-primary/30 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold  mb-3">
            Join Our Journey
          </h2>
          <p className="text-gray-700  mb-6 max-w-xl mx-auto">
            Become a part of our story. Explore our latest collection and discover your new favorite pieces.
          </p>

          <Link href={'/products'} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-primary/90 transition-colors">
            Start Shopping Now
          </Link>
        </section>

      </div>
    </main>

  )
}
