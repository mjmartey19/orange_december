'use client'

import Button from '@/components/Button';
import { bookingPackages, sourceOptions } from '@/constants';
import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

export default function BookingForm() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        package: '', // stores package id from bookingPackages
        price: '', // stores price label
        departure: '', // only for local package
        paymentOption: '100',
        source: ''
    });



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'package') {
            const found = bookingPackages.find(p => p.id === value)
            setFormData(prev => ({ ...prev, price: found ? found.priceLabel : '', departure: '' }));
        }
    };

    async function sendEmails() {
        const templateParams = {
            from_name: formData.fullName,
            to_name: 'Bonvas Tours',
            from_phone: formData.phoneNumber,
            from_email: formData.email,
            to_email: 'sm@bonvastours.com',
            message: `Package Selected: ${formData.package},\n                      Package Price: ${formData.price},\n                      Pickup: ${formData.departure || 'N/A'},\n                      Payment Option: ${formData.paymentOption}%,\n                      Source: ${formData.source}`
        };

        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )

        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            { ...templateParams, to_email: formData.email },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await sendEmails()
            alert('Thanks! Your details have been received. You will now be redirected to Paystack to complete payment.')
            if (typeof window !== 'undefined') {
                window.open('https://paystack.shop/pay/bonvastours', '_blank')
            }
            setFormData({
                fullName: '', phoneNumber: '', email: '', departure: '', package: '', price: '', paymentOption: '100', source: ''
            })
        } catch (error) {
            console.error(error)
            alert('We could not send your booking details. Please try again.')
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 pt-32">
            <div className="max-w-3xl mx-auto">
                <div className="px-4 py-5 sm:p-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Orange December Booking Form</h2>
                    <p className="text-center text-gray-600 mb-8">Thank you for your interest in this package. Please complete the form below to book</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {/* Full Name Field */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* Phone Number Field */}
                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* Package Field */}
                            <div>
                                <label htmlFor="package" className="block text-sm font-medium text-gray-700">Select Package *</label>
                                <select
                                    name="package"
                                    id="package"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.package}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Package</option>
                                    {bookingPackages.map(p => (
                                        <option key={p.id} value={p.id}>{p.label}</option>
                                    ))}
                                </select>
                            </div>
                            {/* Price Display (auto) */}
                            {formData.package && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Price</label>
                                    <div className="mt-1 border border-gray-300 rounded-md py-2 px-3 bg-gray-10">{formData.price || '—'}</div>
                                </div>
                            )}
                            {/* Departure Location Field - only for Local */}
                            {formData.package.startsWith('local') && (
                                <div>
                                    <label htmlFor="departure" className="block text-sm font-medium text-gray-700">Select Departure/Pickup Location *</label>
                                    <select
                                        name="departure"
                                        id="departure"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                        value={formData.departure}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Pickup Location</option>
                                        <option value="Kumasi">Kumasi</option>
                                        <option value="Accra">Accra</option>
                                    </select>
                                </div>
                            )}
                            {/* Payment Option */}
                            {formData.price && (
                                <div>
                                    <label htmlFor="paymentOption" className="block text-sm font-medium text-gray-700">Payment Option *</label>
                                    <select
                                        name="paymentOption"
                                        id="paymentOption"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                        value={formData.paymentOption}
                                        onChange={handleInputChange}
                                    >
                                        <option value="30">Initial Deposit (30%)</option>
                                        <option value="50">Half Payment (50%)</option>
                                        <option value="100">Full Payment (100%)</option>
                                    </select>
                                </div>
                            )}
                            {/* Source Field */}
                            <div>
                                <label htmlFor="source" className="block text-sm font-medium text-gray-700">How did you hear about Orange December?</label>
                                <select
                                    name="source"
                                    id="source"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.source}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select an option</option>
                                    {sourceOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                title={loading ? "Submitting..." : "Submit & Pay"}
                                variant="btn_dark"
                                disabled={loading}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

