import SignInButton from '@/Components/SignInButton'
import Link from 'next/link'
import React from 'react'

export default function Register() {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-2xl font-bold text-center mb-4'>Register your account</h1>
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Enter your name" />
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='text-center'>Or</p>
                    <SignInButton></SignInButton>
                    <p className='py-2'>Already have an account? <Link className='text-blue-500' href='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    )
}
