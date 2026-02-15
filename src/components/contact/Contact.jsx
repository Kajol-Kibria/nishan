// pages/contact.jsx (or app/contact/page.jsx for App Router)
'use client' // Remove this line if using Pages Router

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    FiMail,
    FiGithub,
    FiLinkedin,
    FiTwitter,
    FiSend,
    FiMapPin,
    FiClock,
    FiPhone,
    FiCheckCircle,
    FiAlertCircle
} from 'react-icons/fi'
import { SiDiscord, SiWhatsapp } from 'react-icons/si'

// Use the custom Map component
// import Map from './Map.jsx'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // Your location coordinates (update these with your actual location)
    const mapConfig = {
        center: { lat: 23.7937, lng: 90.4471 }, // Dhaka - Update to your location
        zoom: 13,
        // Optional: You can add a specific place/address
        address: "Dhaka International University, Satarkul, Badda, Dhaka-1212, Bangladesh" // Update to your address
    }

    // Track mouse position for interactive background
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window?.addEventListener('mousemove', handleMouseMove)
        return () => window?.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const contactMethods = [
        {
            icon: <FiMail className="h-6 w-6" />,
            label: 'Email',
            value: 'your.email@example.com',
            href: 'mailto:your.email@example.com',
            color: 'from-[#063231] to-[#0a4a48]',
        },
        {
            icon: <FiPhone className="h-6 w-6" />,
            label: 'Phone',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567',
            color: 'from-[#0a4a48] to-[#0d5654]',
        },
        {
            icon: <FiMapPin className="h-6 w-6" />,
            label: 'Location',
            value: 'San Francisco, CA',
            href: null,
            color: 'from-[#0d5654] to-[#116562]',
        },
        {
            icon: <FiClock className="h-6 w-6" />,
            label: 'Availability',
            value: 'Open to opportunities',
            href: null,
            color: 'from-[#116562] to-[#14746f]',
        },
    ]

    const socialLinks = [
        {
            icon: <FiGithub className="h-5 w-5" />,
            label: 'GitHub',
            href: 'https://github.com/yourusername',
            color: 'hover:bg-[#063231]',
        },
        {
            icon: <FiLinkedin className="h-5 w-5" />,
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/yourusername',
            color: 'hover:bg-[#0a4a48]',
        },
        {
            icon: <FiTwitter className="h-5 w-5" />,
            label: 'Twitter',
            href: 'https://twitter.com/yourusername',
            color: 'hover:bg-[#0d5654]',
        },
        {
            icon: <SiDiscord className="h-5 w-5" />,
            label: 'Discord',
            href: 'https://discord.com/users/yourid',
            color: 'hover:bg-[#116562]',
        },
        {
            icon: <SiWhatsapp className="h-5 w-5" />,
            label: 'WhatsApp',
            href: 'https://wa.me/15551234567',
            color: 'hover:bg-[#14746f]',
        },
    ]

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format'
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        try {
            // Replace with your actual form submission logic
            await new Promise(resolve => setTimeout(resolve, 2000))

            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })

            setTimeout(() => setSubmitStatus(null), 5000)
        } catch (error) {
            setSubmitStatus('error')
            setTimeout(() => setSubmitStatus(null), 5000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#063231] via-[#0a4a48] to-[#063231] pt-32">
            {/* Animated Background Elements */}
            <div className="pointer-events-none absolute inset-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `linear-gradient(#cbff54 1px, transparent 1px), linear-gradient(90deg, #cbff54 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />

                {/* Gradient Orbs */}
                <motion.div
                    className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#cbff54] opacity-10 blur-3xl"
                    animate={{
                        x: mousePosition.x * 0.02,
                        y: mousePosition.y * 0.02,
                    }}
                    transition={{ type: 'spring', damping: 30 }}
                />
                <motion.div
                    className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-[#cbff54] opacity-10 blur-3xl"
                    animate={{
                        x: mousePosition.x * -0.02,
                        y: mousePosition.y * -0.02,
                    }}
                    transition={{ type: 'spring', damping: 30 }}
                />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-[#cbff54]"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="mb-4 inline-block"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#cbff54]/10 px-4 py-2 text-sm font-medium text-[#cbff54] backdrop-blur-sm ring-1 ring-[#cbff54]/20">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#cbff54] opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#cbff54]"></span>
                            </span>
                            Available for new projects
                        </span>
                    </motion.div>

                    <motion.h1
                        className="mb-4 bg-gradient-to-r from-white via-[#cbff54] to-white bg-clip-text text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Let's Work Together
                    </motion.h1>

                    <motion.p
                        className="mx-auto max-w-2xl text-lg text-gray-300 sm:text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Have a project in mind? Let's create something amazing together.
                        I'm always open to discussing new opportunities and creative ideas.
                    </motion.p>
                </motion.div>

                {/* Contact Methods Grid */}
                <motion.div
                    className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={method.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            {method.href ? (
                                <a
                                    href={method.href}
                                    className="group relative block h-full overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:ring-[#cbff54]/30"
                                >
                                    <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${method.color} p-3 text-[#cbff54]`}>
                                        {method.icon}
                                    </div>
                                    <h3 className="mb-1 text-sm font-medium text-gray-400">{method.label}</h3>
                                    <p className="text-white">{method.value}</p>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#cbff54]/5 to-[#cbff54]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </a>
                            ) : (
                                <div className="group relative h-full overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10">
                                    <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${method.color} p-3 text-[#cbff54]`}>
                                        {method.icon}
                                    </div>
                                    <h3 className="mb-1 text-sm font-medium text-gray-400">{method.label}</h3>
                                    <p className="text-white">{method.value}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Contact Section */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10">
                            <h2 className="mb-6 text-2xl font-bold text-white">Send a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full rounded-xl border ${errors.name ? 'border-red-500' : 'border-white/10'
                                            } bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[#cbff54] focus:outline-none focus:ring-2 focus:ring-[#cbff54]/50`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-sm text-red-400"
                                        >
                                            {errors.name}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full rounded-xl border ${errors.email ? 'border-red-500' : 'border-white/10'
                                            } bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[#cbff54] focus:outline-none focus:ring-2 focus:ring-[#cbff54]/50`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-sm text-red-400"
                                        >
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full rounded-xl border ${errors.subject ? 'border-red-500' : 'border-white/10'
                                            } bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[#cbff54] focus:outline-none focus:ring-2 focus:ring-[#cbff54]/50`}
                                        placeholder="Project Inquiry"
                                    />
                                    {errors.subject && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-sm text-red-400"
                                        >
                                            {errors.subject}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className={`w-full resize-none rounded-xl border ${errors.message ? 'border-red-500' : 'border-white/10'
                                            } bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-[#cbff54] focus:outline-none focus:ring-2 focus:ring-[#cbff54]/50`}
                                        placeholder="Tell me about your project..."
                                    />
                                    {errors.message && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-sm text-red-400"
                                        >
                                            {errors.message}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#063231] to-[#0d5654] px-6 py-3 font-semibold text-[#cbff54] transition-all hover:shadow-lg hover:shadow-[#cbff54]/20 disabled:opacity-50"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#cbff54] border-t-transparent" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <FiSend className="transition-transform group-hover:translate-x-1" />
                                            </>
                                        )}
                                    </span>

                                    {/* Animated background */}
                                    <div className="absolute inset-0 -z-10 bg-[#cbff54]/20 opacity-0 transition-opacity group-hover:opacity-100" />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Social Links & Info and Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Simple Map */}
                        {/* <div className="rounded-3xl bg-gradient-to-br from-[#cbff54]/10 to-[#cbff54]/5 p-4 backdrop-blur-sm ring-1 ring-[#cbff54]/20">
                            <h3 className="mb-4 text-xl font-bold text-white">Find Me Here</h3>
                            <div className="w-full h-80 rounded-2xl overflow-hidden" style={{ minHeight: 184 }}>
                                <Map
                                    center={mapConfig.center}
                                    zoom={mapConfig.zoom}
                                    address={mapConfig.address}
                                />
                            </div>
                        </div> */}
                        {/* Social Media */}
                        <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10">
                            <h2 className="mb-6 text-2xl font-bold text-white">Connect With Me</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group flex items-center gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm ring-1 ring-white/10 transition-all hover:ring-[#cbff54]/30 ${social.color}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.9 + index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="text-gray-300 transition-colors group-hover:text-[#cbff54]">
                                            {social.icon}
                                        </div>
                                        <span className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                                            {social.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>



                        {/* Quick Info */}
                        <div className="rounded-3xl bg-gradient-to-br from-[#cbff54]/10 to-[#cbff54]/5 p-8 backdrop-blur-sm ring-1 ring-[#cbff54]/20">
                            <h3 className="mb-4 text-xl font-bold text-white">Quick Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 rounded-lg bg-[#cbff54]/20 p-2">
                                        <FiCheckCircle className="h-4 w-4 text-[#cbff54]" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">Response Time</p>
                                        <p className="text-sm text-gray-300">Usually within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 rounded-lg bg-[#cbff54]/20 p-2">
                                        <FiCheckCircle className="h-4 w-4 text-[#cbff54]" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">Preferred Contact</p>
                                        <p className="text-sm text-gray-300">Email for project inquiries</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 rounded-lg bg-[#cbff54]/20 p-2">
                                        <FiCheckCircle className="h-4 w-4 text-[#cbff54]" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">Time Zone</p>
                                        <p className="text-sm text-gray-300">Pacific Time (PT)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quote */}
                        <motion.div
                            className="rounded-3xl bg-gradient-to-br from-[#063231] to-[#0a4a48] p-8 backdrop-blur-sm ring-1 ring-[#cbff54]/20"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring' }}
                        >
                            <div className="mb-4 text-4xl text-[#cbff54]">"</div>
                            <p className="mb-4 text-lg italic text-gray-200">
                                Great things are done by a series of small things brought together.
                            </p>
                            <p className="text-sm font-medium text-[#cbff54]">— Vincent Van Gogh</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Toast Notifications */}
            <AnimatePresence>
                {submitStatus && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                        className="fixed bottom-8 right-8 z-50"
                    >
                        <div
                            className={`flex items-center gap-3 rounded-2xl px-6 py-4 shadow-2xl backdrop-blur-sm ${submitStatus === 'success'
                                    ? 'bg-[#063231]/90 text-[#cbff54] ring-2 ring-[#cbff54]'
                                    : 'bg-red-500/90 text-white'
                                }`}
                        >
                            {submitStatus === 'success' ? (
                                <>
                                    <FiCheckCircle className="h-6 w-6" />
                                    <div>
                                        <p className="font-semibold">Message Sent!</p>
                                        <p className="text-sm opacity-90">I'll get back to you soon.</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <FiAlertCircle className="h-6 w-6" />
                                    <div>
                                        <p className="font-semibold">Oops! Something went wrong</p>
                                        <p className="text-sm opacity-90">Please try again later.</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}