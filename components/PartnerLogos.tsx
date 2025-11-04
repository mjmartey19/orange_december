import Image from 'next/image'

export default function PartnerLogos() {
    const partners = [
        { name: 'Jaquar', image: '/partner1.png' },
        { name: 'Nhyira', image: '/partner2.jpeg' },
        { name: 'Luv FM', image: '/partner3.jpeg' },
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="bold-32 mb-8 text-center">Our Partners</h3>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center  transition-all duration-300"
                        >
                            <Image
                                src={partner.image}
                                alt={partner.name}
                                width={150}
                                height={80}
                                className="object-contain max-h-20"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}
