'use client'

import { useEffect, useState } from 'react'

type TimeLeft = {
    days: number
    hours: number
    minutes: number
    seconds: number
}

const targetDate = new Date('2025-12-23T23:59:59Z').getTime()

function calculateTimeLeft(): TimeLeft {
    const now = Date.now()
    const diff = Math.max(0, targetDate - now)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    return { days, hours, minutes, seconds }
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="bg-[#FFF4E0] py-12" aria-label="Countdown to Orange December 2025">
            <div className="max-w-5xl mx-auto text-center px-4">
                <h3 className="bold-32 md:bold-40 mb-4">Countdown to Orange December 2025!</h3>
                <div className="flex justify-center gap-4 md:gap-8">
                    {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, idx) => {
                        const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][idx]
                        return (
                            <div key={label} className=" px-4 py-3 min-w-[80px]">
                                <div className="text-3xl font-bold">{value.toString().padStart(2, '0')}</div>
                                <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}


