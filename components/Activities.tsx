import Image from 'next/image'
import Button from './Button'
import { activities } from '@/constants'


interface ActivityCardProps {
    title: string
    imageSrc: string
    className?: string
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, imageSrc, className = "" }) => (
    <div className={`relative overflow-hidden group ${className} rounded-xl`}>
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
    </div>
)



export default function Activities() {
    return (
        <section className="2xl:max-container relative lg:mb-10 xl:mb-20 flex justify-start ">
            <div className="padding-container w-full pb-24 flex flex-col gap-5">
                <h2 className="text-4xl font-bold mb-8">Exciting Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
                    <ActivityCard {...activities[0]} className="md:col-span-1 lg:col-span-2 lg:row-span-3 h-[300px]" />
                    <ActivityCard {...activities[1]} className="md:col-span-2 lg:row-span-6" />
                    <ActivityCard {...activities[2]} className="md:col-span-1 lg:col-span-2 h-[300px] lg:row-span-3" />
                    <ActivityCard {...activities[3]} className="md:col-span-1 lg:col-span-2 h-[300px] lg:row-span-3" />
                    <ActivityCard {...activities[4]} className="md:col-span-1 lg:col-span-2 h-[300px] lg:row-span-3" />
                </div>
                <div className='flex justify-center'>
                    <div className="w-fit text-center">
                        <Button
                            link='/booking-form'
                            title="Book Now"
                            variant="btn_dark"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}