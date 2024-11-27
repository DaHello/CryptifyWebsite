'use client'

import React, { useState } from "react"
import { useRouter } from 'next/navigation'
import { User, Lock, Mail, X } from 'lucide-react'
import { handleLogin, handleRegister } from "./actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formState, setFormState] = useState({ username: "", password: "", email: "" })
  const [message, setMessage] = useState("")
  
  const router = useRouter()

  const toggleFormType = () => setIsLogin(!isLogin)
  const openForm = () => setShowForm(true)
  const closeForm = () => setShowForm(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const result = isLogin 
      ? await handleLogin(formData)
      : await handleRegister(formData)
    
    if (result.success) {
      setMessage(result.message)
      // In a real application, you might want to redirect the user or update the UI
      // router.push('/dashboard')
    } else {
      setMessage("An error occurred. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Cryptify</h1>
          <nav>
            <Button variant="ghost" onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}>
              About
            </Button>
            <Button variant="ghost" onClick={openForm}>Login</Button>
          </nav>
        </div>
      </header>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={closeForm}>
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{isLogin ? "Login" : "Register"}</h2>
              <Button variant="ghost" size="icon" onClick={closeForm}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input 
                    id="username" 
                    name="username" 
                    type="text" 
                    required 
                    className="pl-10"
                    value={formState.username}
                    onChange={(e) => setFormState({...formState, username: e.target.value})}
                  />
                </div>
              </div>
              {!isLogin && (
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      className="pl-10"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
              )}
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    required 
                    className="pl-10"
                    value={formState.password}
                    onChange={(e) => setFormState({...formState, password: e.target.value})}
                  />
                </div>
              </div>
              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="ml-2">Remember me</Label>
                  </div>
                  <Button variant="link" className="text-sm">Forgot password?</Button>
                </div>
              )}
              <Button type="submit" className="w-full">
                {isLogin ? "Login" : "Register"}
              </Button>
              {message && <p className="text-center text-sm text-blue-600">{message}</p>}
            </form>
            <p className="text-center text-sm mt-4">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <Button variant="link" className="p-0" onClick={toggleFormType}>
                {isLogin ? "Register" : "Login"}
              </Button>
            </p>
          </div>
        </div>
      )}

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome to Cryptify</h2>
          <p className="mt-4 text-xl text-gray-500">Secure your digital life with ease.</p>
        </div>
      </section>

      <section id="about-section" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">About Cryptify</h2>
          <p className="mt-4 text-xl text-gray-500">
            Welcome to Cryptify, where protecting your personal information is our
            top priority. In a world where privacy feels harder to come by, we're
            here to make things simple. Cryptify is designed to be easy to use,
            giving you powerful tools to secure your data without the hassle. We
            believe everyone deserves peace of mind online, and we're committed to
            helping you keep your digital life safe and private. Join us in taking
            control of your information, one secure step at a time.
          </p>
        </div>
      </section>
    </div>
  )
}