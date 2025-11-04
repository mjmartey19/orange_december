import Link from 'next/link'

export default function WhatsAppButton() {
    const phone = '233531085235'
    const url = `https://wa.me/${phone}`
    return (
        <Link
            href={url}
            target="_blank"
            className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full px-5 py-3 shadow-lg hover:bg-green-600"
            aria-label="Contact Support on WhatsApp"
        >
            Contact Support
        </Link>
    )
}


