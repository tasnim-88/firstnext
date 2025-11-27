import BackButton from '@/Components/BackButton';
import Image from 'next/image';
import React from 'react'

export default async function ProductDetails({ params }) {

    const { id } = await params
    const res = await fetch(`https://nextmart-livid.vercel.app/products/${id}`, {
        cache: "no-store"
    })
    const product = await res.json()
    // console.log(product);


    return (
        <div className="max-w-3xl mx-auto px-6 py-10">
            {/* Image */}
            <Image
                src={product.image}
                alt="Product Image"
                width={800}
                height={400}
                className="w-full object-cover rounded-xl mb-8"
            />

            {/* Title */}
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                {product.title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-4">
                {product.fullDesc}
            </p>

            {/* Info Rows */}
            <div className="divide-y divide-gray-200 border-y border-gray-200 mb-10">
                {/* Price */}
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                        <span className="text-emerald-600 text-lg">🏷</span>
                        <span className="text-gray-600">Price</span>
                    </div>
                    <span className="font-medium">${product.price}</span>
                </div>

                {/* Date Added */}
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                        <span className="text-emerald-600 text-lg">📅</span>
                        <span className="text-gray-600">Date Added</span>
                    </div>
                    <span className="font-medium">{product.createdAt}</span>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                        <span className="text-emerald-600 text-lg">📦</span>
                        <span className="text-gray-600">Status</span>
                    </div>
                    <span className="font-medium text-emerald-700">{product.status}</span>
                </div>
            </div>
            <BackButton></BackButton>
        </div>
    )
}
