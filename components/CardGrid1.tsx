import Image from 'next/image'

interface ExperienceCardProps {
    title: string
    description: string
    imageSrc: string
    className?: string
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, description, imageSrc, className = "" }) => (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
        <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
            <p className="text-white text-sm">{description}</p>
        </div>
    </div>
)

const experiences = [
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

export default function CardGrid() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[500px] h-[900px] md:grid-row-4">
                <ExperienceCard {...experiences[0]} className="md:row-span-2" />
                <ExperienceCard {...experiences[1]} className="md:col-span-1" />
                <ExperienceCard {...experiences[2]} className="md:col-span-1" />
                <ExperienceCard {...experiences[3]} className="md:col-span-2" />
            </div>
        </div>
    )
}