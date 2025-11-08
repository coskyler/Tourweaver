"use client"

import GoogleLoginButton from "@/components/home/GoogleLoginButton"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-cream-50 to-white text-gray-800">
      <h1 className="text-5xl font-semibold mb-4">Tripweaver</h1>
      <p className="text-lg text-gray-600 max-w-md">
        Plan, personalize, and explore your journeys effortlessly — powered by AI.
      </p>
      <GoogleLoginButton />
    </main>
  )
}
