import DeleteButton from '@/Components/DeleteButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaRegEye, FaRegTrashCan } from "react-icons/fa6";


export default async function ManageProducts() {

  const res = await fetch('https://nextmart-livid.vercel.app/products', {
    cache: "no-store"
  })
  const products = await res.json()
  console.log(products);

  return (
    <div className="overflow-x-auto w-full max-w-7xl mx-auto px-10 py-12 md:py-12">
      <h1 className='text-3xl font-bold'>Manage Products</h1>
      <table className="table mt-5 p-10 bg-base-200 shadow-2xl">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Product</th>
            <th>Status</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((p, i) => <tr key={p._id}>
              <td>{i + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image
                        width={50}
                        height={50}
                        src={p.image}
                        alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{p.title}</div>
                  </div>
                </div>
              </td>
              <td className='badge badge-success'>{p.status}</td>
              <td>${p.price}</td>
              <td>
                <Link href={`/productdetails/${p._id}`} className="btn btn-ghost btn-xs"><FaRegEye size={20} /></Link>
                <DeleteButton id={p._id}></DeleteButton>
              </td>
            </tr>)
          }


        </tbody>
      </table>
    </div>
  )
}
