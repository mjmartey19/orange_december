import Link from 'next/link'

export default function LocalPackages() {
    return (
        <div className="rounded-3xl border border-black p-8 bg-white">
            <h3 className="text-2xl font-bold mb-2">Orange December Local</h3>
            <p className="text-gray-700 mb-4">A 3-Night Takoradi Carnival Experience - Your Carnival Getaway</p>
            <p className="text-sm text-gray-600 mb-4">Program Dates: 24th - 28th December 2025</p>

            <div className="bg-[#FFF4E0] rounded-xl p-4 mb-4">
                <div className="font-semibold">Carnival Getaway</div>
                <div className="text-sm mb-2">4 Days / 3 Nights</div>
                <div className="text-xs text-gray-600 mb-2">Price per person (Double Sharing)</div>
                <div className="text-lg font-bold">GHS 4,588</div>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Pricing Options:</h4>
                <ul className="text-sm space-y-1">
                    <li>• Single: <span className="font-semibold">GHS 4,960</span></li>
                    <li>• Double Sharing: <span className="font-semibold">GHS 4,588</span></li>
                    <li>• Couple: <span className="font-semibold">GHS 8,928</span></li>
                    <li>• Family (4 adults): <span className="font-semibold">GHS 24,180</span></li>
                    <li>• Family (3 adults, 1 child): <span className="font-semibold">GHS 22,940</span></li>
                </ul>
            </div>

            <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Schedule:</h4>
                <p className="text-sm">• Departure: December 24, 2025 from Accra and Kumasi pickup points</p>
                <p className="text-sm">• Return: December 27, 2025</p>
            </div>

            <ul className="list-disc ml-5 text-sm space-y-1 mb-4">
                <li>Round-trip transport from Accra | Kumasi in comfortable coaches</li>
                <li>3-night accommodation in curated Takoradi lodgings</li>
                <li>Daily breakfast to start your day right</li>
                <li>Carnival access fees and guided group participation</li>
                <li>Beach activities at Busua Beach</li>
                <li>Dedicated group host to keep the vibe high</li>
                <li>Orange December welcome kit</li>
            </ul>



            <div className="pt-2">
                <Link href="/booking-form" className="btn_orange inline-block mr-3 rounded-full">Join the Experience / Book Now</Link>
                <Link href="https://paystack.shop/pay/bonvastours.com" target="_blank" className="btn_white_text inline-block">Pay via Paystack</Link>
            </div>
        </div>
    )
}


