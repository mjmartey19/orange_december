import Link from 'next/link'
import { diasporaPackages, exchangeRate } from '@/constants'

function USDandGHS({ amountUSD }: { amountUSD: number }) {
    const ghs = Math.round(amountUSD * exchangeRate)
    return (
        <div className="text-lg font-bold">${amountUSD.toLocaleString()}</div>
    )
}

export default function DiasporaPackages() {
    return (
        <div className="rounded-3xl border border-black p-8 bg-white">
            <h3 className="text-2xl font-bold mb-2">Orange December Diaspora</h3>
            <p className="text-gray-700 mb-4">{diasporaPackages.description}</p>
            <p className="text-sm text-gray-600 mb-4">Program Dates: {diasporaPackages.programDates}</p>

            <div className="space-y-4 mb-2">
                {diasporaPackages.durations.map((d) => (
                    <div key={d.label} className="bg-[#FFF4E0] rounded-xl p-4 space-y-2">
                        <div className="font-semibold">{d.name}</div>
                        <div className="text-sm mb-2">{d.label}</div>
                        <div className="text-xs text-gray-600 mb-2">{d.description}</div>
                        <USDandGHS amountUSD={d.priceUSD} />
                        <div className="text-xs text-gray-600 pt-2 border-t border-orange-200 mt-2">
                            {d.dates}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Highlights:</h4>
                <ul className="list-disc ml-5 text-sm space-y-1">
                    {diasporaPackages.highlights.map(h => (<li key={h}>{h}</li>))}
                </ul>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">What's Included:</h4>
                <ul className="list-disc ml-5 text-sm space-y-1">
                    {diasporaPackages.inclusions.map(h => (<li key={h}>{h}</li>))}
                </ul>
            </div>
            <p className="text-xs text-gray-500 mb-4 "><span className="font-bold">NB: Exchange rate:</span> $1 = GHS {exchangeRate}</p>

            <div className="pt-2">
                <Link href="/booking-form" className="btn_orange inline-block mr-3 rounded-full">Book Now / Reserve Your Spot</Link>
                <Link href="https://paystack.shop/pay/bonvastours.com" target="_blank" className="btn_white_text inline-block">Pay via Paystack</Link>
            </div>
        </div>
    )
}


