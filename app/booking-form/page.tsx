'use client'
import Button from '@/components/Button';
import React, { useState } from 'react';

const packages = {
    Hideout: {
        name: "Hideout Package",
        description: "5 nights at Hide Out Lodge for a cozy, scenic experience.",
        pricing: {
            Kumasi: {
                single: "GHC 3277.50",
                double: "GHC 3105.00"
            },
            Accra: {
                single: "GHC 2242.50",
                double: "GHC 2070.00"
            }
        }
    },
    Luxury: {
        name: "Luxury Package",
        description: "Includes Landcruiser Drive to and from Takoradi. Accommodation: 5 nights at Busua Beach Resort. Activities: Includes everything with added luxury.",
        pricing: {
            Kumasi: {
                single: "$396.75",
                double: "$288.94"
            },
            Accra: {
                single: "$375.18",
                double: "$267.38"
            }
        }
    }
};

export default function BookingForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        departure: '',
        package: '',
        price: '',
        source: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'departure') {
            setFormData(prev => ({ ...prev, package: '', price: '' }));
        } else if (name === 'package') {
            setFormData(prev => ({ ...prev, price: '' }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the data to your server
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-32">
            <div className="max-w-3xl mx-auto">
                <div className="px-4 py-5 sm:p-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Orange December Book Form</h2>
                    <p className="text-center text-gray-600 mb-8">Thank you for your interest in this package. Please complete the form below to book</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                            {formData.departure && (
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
                                        {Object.entries(packages).map(([key, value]) => (
                                            <option key={key} value={key}>{value.name}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            {formData.package && (
                                <div>
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Select Package Price *</label>
                                    <select
                                        name="price"
                                        id="price"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select Package Price</option>
                                        <option value="single">Single Occupant: {packages[formData.package as keyof typeof packages].pricing[formData.departure as keyof typeof packages.Hideout.pricing].single}</option>
                                        <option value="double">Double Occupant: {packages[formData.package as keyof typeof packages].pricing[formData.departure as keyof typeof packages.Hideout.pricing].double}</option>
                                    </select>
                                </div>
                            )}
                            <div>
                                <label htmlFor="source" className="block text-sm font-medium text-gray-700">Where Did you hear Orange December?</label>
                                <input
                                    type="text"
                                    name="source"
                                    id="source"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.source}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="flexCenter">
                            <Button
                                type='submit'
                                title="Book Now"
                                variant="btn_dark"
                            />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}