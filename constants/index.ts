
export const trip = [
    {
        title: 'Pristine Beaches',
        description: 'Enjoy Busua Beach, Perfect For Swimming, Surfing, And Relaxing',
        imageUrl: '/beach.jpg',
    },
    {
        title: 'Historic Sites',
        description: 'Explore UNESCO-Listed Forts Like Fort Batenstein',
        imageUrl: '/fort.jpg',
    },
    {
        title: 'Outdoor Adventures',
        description: 'Canoe Rides, Hiking, And Sunset Cruises Await You',
        imageUrl: '/adventure.jpg',
    },
    {
        title: 'Cultural Carnival',
        description: 'Dance to vibrant drum beats, join the parade, and immerse in the festive energy of Ghana’s largest Masquerade Street Carnival celebration.',
        imageUrl: '/carnival.jpg',
    },
];

export const packages = {
    Hideout: {
        name: "Hideout Package",
        description: "5 nights at Hide Out Lodge for a cozy, scenic experience.",
        pricing: {
            Kumasi: {
                single: "GHC 3,278.00",
                double: "GHC 2,243.00"
            },
            Accra: {
                single: "GHC 3,105.00",
                double: "GHC 2,070.00"
            }
        }
    },
    Luxury: {
        name: "Busua Beach Resort Package",
        description: "Includes Landcruiser Drive to and from Takoradi. Accommodation: 5 nights at Busua Beach Resort. Activities: Includes everything with added luxury.",
        pricing: {
            Kumasi: {
                single: "$ 397.00",
                double: "$ 289.00"
            },
            Accra: {
                single: "$ 375.00",
                double: "$ 267.00"
            }
        }
    }
};

export const exchangeRate = 12.4 // $1 = GHS 12.40

export const diasporaPackages = {
    name: 'Diaspora Experience',
    description: 'Join the Ultimate Curated Journey Through Ghana\'s Most Vibrant Festive Season.',
    programDates: '22nd December 2025 - 5th January 2026',
    durations: [
        {
            label: '8 Days / 7 Nights',
            priceUSD: 3200,
            name: 'December Express',
            description: 'The traveller who wants the perfect highlight reel, maximising culture, carnival, and connection in a powerful, week-long journey.',
            dates: 'Arrival: 23rd Dec 2025 | Tour: 24th - 30th Dec 2025 | Departure: 30th Dec 2025'
        },
        {
            label: '14 Days / 13 Nights',
            priceUSD: 4800,
            name: 'Ultimate Immersion',
            description: 'The explorer who wants it all. This deep dive includes everything in the 8-day, plus extra relaxation, exclusive events, and extended adventures.',
            dates: 'Arrival: 22nd-23rd Dec 2025 | Tour: 24th - 4th Jan 2026 | Departure: 4th-5th Jan 2026'
        },
    ],
    highlights: [
        'The Takoradi Masquerade Festival',
        'Beach Bliss & Coastal Adventures',
        'A Journey Through History (Cape Coast & Elmina)',
        'The Orange Party & Nightlife Access',
        'Travel with a Tribe'
    ],
    inclusions: [
        'Accommodation in Accra, Takoradi, Cape Coast and Elmina',
        'Daily breakfast, plus curated selected dinners',
        'Airport Transfers and all inter-city travel',
        'All tours, castle entries, carnival fees, and hosted activities',
        'Dedicated Tour Leaders and Local Guides',
        'VIP treatment at select events and parties'
    ]
}

export const bookingPackages = [
    {
        id: 'diaspora-express',
        label: 'Diaspora – December Express (8 Days / 7 Nights)',
        priceLabel: '$ 3,200',
        currency: 'USD'
    },
    {
        id: 'diaspora-immersion',
        label: 'Diaspora – Ultimate Immersion (14 Days / 13 Nights)',
        priceLabel: '$ 4,800',
        currency: 'USD'
    },
    {
        id: 'local-carnival-4',
        label: 'Local – Carnival Getaway (4 Days / 3 Nights)',
        priceLabel: 'GHS 4,588',
        currency: 'GHS'
    }
]


export const sourceOptions = [
    { label: "Facebook", value: "Facebook" },
    { label: "Instagram", value: "Instagram" },
    { label: "Twitter", value: "Twitter" },
    { label: "Friend", value: "Friend" },
    { label: "Family", value: "Family" },
    { label: "Website", value: "website" },
    { label: "Other", value: "other" },
];

export const experiences = [
    {
        title: "Pristine Beaches",
        description: "Enjoy Busua Beach, Perfect For Swimming, Surfing, And Relaxing",
        imageSrc: "/beach.jpg"
    },
    {
        title: "Historic Sites",
        description: "Explore UNESCO-Listed Forts Like Fort Batenstein",
        imageSrc: "/fort.jpg"
    },
    {
        title: "Outdoor Adventures",
        description: "Canoe Rides, Hiking, And Sunset Cruises Await You",
        imageSrc: "/adventure.jpg"
    },
    {
        title: "Cultural Carnival",
        description: "Dance To Vibrant Drum Beats, Join The Parade, And Immerse In The Festive Energy Of Ghana's Largest Masquerade Street Carnival Celebration.",
        imageSrc: "/carnival.jpg"
    }
]

export const activities = [
    { title: "Hiking", imageSrc: "/adventure.jpg" },
    { title: "Swimming", imageSrc: "/swimming.jpg" },
    { title: "Camping and Bonfire nights", imageSrc: "/bonfire.jpg" },
    { title: "Canoe ride", imageSrc: "/canoe-ride.jpg" },
    { title: "Game night with fellow travelers", imageSrc: "/game-night.jpg" },
]

export const faqs = [
    {
        q: "What is Orange December?",
        a: "Orange December is Ghana's ultimate festive travel experience — a curated celebration of culture, music, history, and pure December energy. Whether you're local or coming in from the diaspora, we've got your 'Detty December' covered. It's more than a trip — it's a movement. From the buzzing streets of Accra, to the historical depths of Cape Coast & Elmina, to the legendary Takoradi Masquerade Festival, we take care of the logistics, so you can focus on living it up."
    },
    {
        q: "Who is Orange December for?",
        a: "🇬🇭 Local Travelers: Join our 4-day, 3-night Takoradi Experience — a coastal celebration packed with carnival vibes, themed parties, and cultural excursions.\n\n🌍 Diaspora Travelers: Embark on the 8-day/7-night Orange December – Diaspora Experience, an all-inclusive, cross-country journey through Ghana's December heartbeat.\n\nBoth experiences deliver the same Bonvas energy — but the Diaspora Experience comes with deeper immersion, upgraded stays, and VIP access."
    },
    {
        q: "When does it happen?",
        a: "Local Edition: 24th – 27th December 2025\n\nDiaspora Edition: 22nd December 2025 – 5th January 2026\n\n• Standard Group Tour: Arrival 23rd Dec | Tour 24th–30th Dec | Departure 30th Dec\n• Luxury Package: Flexible arrival (22nd–24th Dec), program concludes by 5th Jan 2026"
    },
    {
        q: "What destinations are covered?",
        a: "Accra – Ghana's capital of nightlife, food, and rhythm\nCape Coast & Elmina – Emotional, guided heritage tours of the castles\nTakoradi – Home of the famous Ankos Masquerade Festival\nBusua Beach / Labadi Beach – Sun, sea, and sand for the soul\n\nThe Local Package focuses on Takoradi and nearby attractions, while the Diaspora Package spans all four destinations for the full Ghana experience."
    },
    {
        q: "What's included in the packages?",
        a: "Local Package (4 Days / 3 Nights):\n• 3-star hotel accommodation in Takoradi\n• Round-trip transportation (Accra – Takoradi – Accra)\n• Daily breakfast\n• Access to exclusive themed parties and the Orange Party\n• Guided city tours and carnival experience\n• Souvenir kit and branded merch\n\nDiaspora Package (8 Days / 7 Nights):\nStandard Group Tour – $3,200\n• Accommodation in Accra, Cape Coast, Elmina & Takoradi\n• Daily breakfast + select dinners\n• Airport pickup and all intercity transfers\n• Tours, entry fees, and hosted events\n• Access to exclusive parties, including The Orange Party\n• Expert tour guides and local hosts\n\nLuxury Package – $4,800\nEverything in Standard, plus:\n• Private transfers\n• Premium and ocean-view hotels\n• VIP event access\n• Personal travel concierge and flexible scheduling"
    },
    {
        q: "What makes the Diaspora Experience special?",
        a: "It's the full Ghana story in one unforgettable journey — culture, carnival, community, and connection. From walking through history in Elmina to dancing in the streets of Takoradi, this is the kind of trip you don't just take — you feel. It's ideal for travelers who want to explore Ghana beyond Accra, connect with locals and fellow returnees, and enjoy the December vibe without planning stress."
    },
    {
        q: "How do I book a spot?",
        a: "Reserve your seat via: https://orangedec.bonvastours.com or bonvastours.com\n\nWhatsApp: +233 531 085 235\n\nOnce your deposit is received, your place is confirmed.\n\nEarly Bird Discounts valid until November 21, 2025."
    },
    {
        q: "Do you help with visa and flight arrangements?",
        a: "Yes. Our Premium Travel Desk handles everything:\n• Visa-on-arrival assistance\n• Visa application support\n• Flight booking assistance for the best routes and fares"
    },
    {
        q: "Will someone meet me at the airport?",
        a: "Yes — all Diaspora guests receive airport pickup in Accra, full assistance on arrival, and escorted transfers throughout the trip."
    },
    {
        q: "What kind of hotels do you use?",
        a: "All our hotels are handpicked for comfort, location, and atmosphere.\n\nLocal Package: Trusted hotel resorts near Takoradi's beaches and carnival zones\n\nDiaspora Package: 3–4-star properties in each city; Luxury guests enjoy upgraded or boutique stays."
    },
    {
        q: "What activities should I expect? (Diaspora Package)",
        a: "Takoradi Masquerade Festival (optional costume rental)\n• Beach relaxation days at Labadi or Busua\n• Cape Coast & Elmina tours\n• Exclusive nightlife access and the Orange Party\n• Cultural immersion experiences and community visits"
    },
    {
        q: "Can I customize my trip?",
        a: "Yes, you can extend your stay, add private tours, or upgrade your hotel. Just talk to our team we'll tailor it for you."
    },
    {
        q: "Is this good for solo travelers?",
        a: "Yes! Orange December is perfect for solo travelers. You'll travel with a fun, inclusive group, or go private with the Luxury Package."
    },
    {
        q: "What should I pack?",
        a: "Light, breathable clothing\n• Orange outfit for the Orange Party\n• Beachwear and sandals\n• Comfortable shoes for tours and carnival\n• Sunscreen, hat, and sunglasses"
    },
    {
        q: "Is transportation included?",
        a: "Yes.\n\nLocal: Round-trip transport from Accra/Kumasi to Takoradi.\n\nDiaspora: Full intercity transfers and airport pickups included."
    },
    {
        q: "What's the cancellation policy?",
        a: "Cancellations before 1st December 2025 qualify for a 50% refund. After that, payments become non-refundable but transferable."
    },
    {
        q: "Is Orange December safe?",
        a: "Yes. We work with verified hotels, licensed drivers, and vetted event partners. Security and guest support are provided at all official events."
    },
    {
        q: "How can I contact the Orange December team?",
        a: "Email: info@bonvastours.com\nPhone: +233 531 085 235\nWhatsApp: wa.me/233531085235\nFollow: @OrangeDecemberGH | #BonvasTours #JaguarDeTraveller"
    },
    {
        q: "Why should I choose Orange December?",
        a: "Because it's more than a trip; it's a homecoming. It's where culture meets carnival, and memories outlast parties. With Bonvas Tours, you don't just visit Ghana — you belong here."
    },
]