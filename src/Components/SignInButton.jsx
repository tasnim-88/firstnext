"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";


export default function SignInButton() {


    return (
        <button className="btn" onClick={() => signIn("google", { callbackUrl: '/' })}><FcGoogle size={24} />Sign In with Google</button>
    );
}
