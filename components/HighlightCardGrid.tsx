import React from 'react';
import HighlightCard from './HighlightCard';
import { FaTheaterMasks, FaUmbrellaBeach, FaLandmark, FaMusic, FaUsers, FaShuttleVan } from 'react-icons/fa';

const HighlightCardGrid: React.FC = () => {
    const highlightData = [
        {
            icon: <FaTheaterMasks size={40} />,
            title: 'Takoradi Masquerade Festival',
            description: "Immerse in Ghana's most electric street carnival — join the parade and feel the Ankos energy. Optional costume rental available.",
        },
        {
            icon: <FaUmbrellaBeach size={40} />,
            title: 'Beach Bliss & Coastal Vibes',
            description: "Unwind at Busua or Labadi — sun, surf, and slow mornings by the Atlantic with local flavor.",
        },
        {
            icon: <FaLandmark size={40} />,
            title: 'Cape Coast & Elmina Heritage',
            description: 'Walk through history with guided, thoughtful visits to the castles — powerful, grounding, unforgettable.',
        },
        {
            icon: <FaMusic size={40} />,
            title: 'Nightlife & The Orange Party',
            description: 'Exclusive access to top December events — plus our signature Orange Party for pure December vibes.',
        },
        {
            icon: <FaUsers size={40} />,
            title: 'Travel with a Tribe',
            description: 'Journey with a welcoming group of returnees and locals — community, connection, and shared memories.',
        },
        {
            icon: <FaShuttleVan size={40} />,
            title: 'Seamless Logistics',
            description: 'Airport pickup, intercity transfers, hosts, and guides — you focus on the moment, we handle the rest.',
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                {highlightData.map((item, index) => (
                    <HighlightCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default HighlightCardGrid;
