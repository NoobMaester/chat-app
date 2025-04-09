
import AuthForm from "@/components/AuthForm"
import Footer from "@/components/Footer"
import Headerr from "@/components/Headerr"

export default function RegisterPage() {
  

  return (
    <>
    <Headerr/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-[#7b3cd3] mb-6 text-center">Register</h1>
        <AuthForm type="register"/>
      </div>
    </div>
    <Footer/>
    </>
  )
}
