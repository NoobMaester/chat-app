'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";
import Headerr from "@/components/Headerr";


export default function LoginPage() {
    const {user, loading} = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && user) {
            router.push('/chat')
         }
        }, [user, loading, router])

    return (
        <>
        <Headerr/>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 dark:bg-gray-900">
                <h1 className="text-2xl font-bold text-[#7b3cd3] mb-6 text-center">Login</h1>
                <AuthForm type="login"/>
            </div>
        </div>
        <Footer/>
        </>
    );
}