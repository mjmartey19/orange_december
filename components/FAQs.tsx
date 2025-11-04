'use client'

import { faqs } from '@/constants'
import { useState } from 'react'

export default function FAQs() {
    const [open, setOpen] = useState<number | null>(0)
    return (
        <section className="py-16 bg-[#FFF4E0]">
            <div className="max-w-4xl mx-auto px-4">
                <h3 className="bold-32 mb-6 text-center">FAQs</h3>
                <div className="space-y-3">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white rounded-xl p-4">
                            <button className="w-full text-left font-semibold flex items-center justify-between" onClick={() => setOpen(open === i ? null : i)}>
                                <span>{f.q}</span>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${open === i ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {open === i && <p className="text-sm text-gray-700 mt-2 whitespace-pre-line">{f.a}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


