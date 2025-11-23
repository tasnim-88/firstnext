"use client";

import SignInButton from '@/Components/SignInButton'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Login() {

    const pathName = usePathname()
    console.log(pathName);
    

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-2xl font-bold text-center mb-4'>Login to your account</h1>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='text-center'>Or</p>
                    <SignInButton></SignInButton>
                    <p className='py-2'>Do not have an account? <Link className='text-blue-500' href='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    )
}
