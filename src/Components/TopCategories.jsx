import Image from 'next/image';
import React from 'react'

export default function TopCategories() {

    const categories = [
        {
            title: "Men's",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO2qko3t8oSUVRdm1f9mJnzxCC4dtAHa2FZyLBYButfN5jiqpPxy_otQNLjWXeoGJSJZFaeBu07hKvW5BJ3aumn9m-eCjhMWpEd8H5N-zxdnpWyGmCAarSBkFEB4aIcKMyEKqKp5jYjiLhqYe-A61nCynWoliQ889QuaKKa43YtEMDMOxwpnQ8WfoPvb5r4Lvisraetvs_NW31wJ9az6zxOTPTZ5AgZGfCHfC3kI2oRZOXXNNBXZ_rBKsu_019qnd_49QrE0GmOs3u",
        },
        {
            title: "Women's",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVNYysCRtIwbjW6ehD0GsRQLqbjNlFdBimHyqSeO8LBAhARLquarQpGeOl1xkSKkNxgMC6-B4Ni83UQIqVqEt3_FtxTDoBXEDAMtlP1ZDwg_gf9ZgXfvYjnoWggxMdB5z6OHLkdnIZrn-x08JcyfAVitPyQVS92pQgPF_RQD8wUEBhg_DwbfrlHaWZlwbnLdT9LkTMNC4etlywhh6kS_E-RTumgOJCUdhVs2xZzolS0ZI5H4ytIFO1PYr6P-ceabcgpvDfX9qXwykC",
        },
        {
            title: "Accessories",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3-obYp_GpkMElH6wL_aCUuUSpLuPf0gMb3U2DGwE_X2LdsriXti_-KvX5UpJopokCkZSdv_Lngn9deG2jGzJ-K4UXNm3hku66G8LSNsCOfb9j6NV6QwQfaV8xyWGvwGZsb3fNsG6W066BJGJtX0jQJpbI1yK56yCihPQMBxaN15JjkDxKd0UbPA2dKuzTUJIyqKJCldDV3XeMWsHm8eDN1Hof0hvuz6M4A2VECABQlFHyPo45iDc0dHpihLfR3OsEWLM1Ms8P2zuy",
        },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto py-10 px-10 md:px-0">
            <h2 className="text-xl font-bold mb-4">Top Categories</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {categories.map((cat, i) => (
                    <div
                        key={i}
                        className="relative rounded-xl overflow-hidden cursor-pointer group"
                    >
                        <Image
                            width={100}
                            height={100}
                            src={cat.img}
                            alt={cat.title}
                            className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="text-white font-semibold text-xl">
                                {cat.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
