import React from 'react';
import HighlightCard from './HighlightCard';
import { FaHotel, FaUtensils, FaBusAlt, FaMapSigns } from 'react-icons/fa';

const HighlightCardGrid: React.FC = () => {
    const highlightData = [
        {
            icon: <FaHotel size={40} />,
            title: 'Accommodation',
            description: 'Stay 5 nights at the Hideout Lodge or Busua Beach Resort.',
        },
        {
            icon: <FaUtensils size={40} />,
            title: 'Meals',
            description: 'Daily Breakfast Included.',
        },
        {
            icon: <FaBusAlt size={40} />,
            title: 'Transportation',
            description: 'Travel Comfortably With Our Transportation From Kumasi Or Accra To Takoradi.',
        },
        {
            icon: <FaMapSigns size={40} />,
            title: 'Guided Tours',
            description: 'Explore Nzulezu Stilt Village, Local Markets, And Historical Landmarks With Expert Guides.',
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
