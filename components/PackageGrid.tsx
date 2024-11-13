interface PriceListProps {
    singleOccupant: string;
    doubleOccupant: string;
}

const PriceList: React.FC<PriceListProps> = ({ singleOccupant, doubleOccupant }) => (
    <ul className="space-y-1">
        <li>• Single Occupant: {singleOccupant}</li>
        <li>• Double Occupant: {doubleOccupant}</li>
    </ul>
);

const PackageCard: React.FC<{
    title: string;
    description: string;
    kumasiPrices: PriceListProps;
    accraPrices: PriceListProps;
}> = ({ title, description, kumasiPrices, accraPrices }) => (
    <div className="rounded-3xl border-black border-[1px] p-10 space-y-4 text-left">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>

        <div>
            <h3 className="font-semibold">For Kumasi (Tech Junction) Departure:</h3>
            <PriceList {...kumasiPrices} />
        </div>

        <div>
            <h3 className="font-semibold">For Accra (Obra Spot) Departure </h3>
            <PriceList {...accraPrices} />
        </div>
    </div>

);

export default function PackageGrid() {
    return (
        <div className="md:w-[1000px] p-4">
            <div className="grid md:grid-cols-2 gap-6">
                <PackageCard
                    title="Hideout Package"
                    description={`5 nights at Hide Out Lodge for a cozy, scenic experience`}
                    kumasiPrices={{ singleOccupant: "GHC 3,278.00", doubleOccupant: "GHC 2,243.00" }}
                    accraPrices={{ singleOccupant: "GHC 3,105.00", doubleOccupant: "GHC 2,070.00" }}
                />
                <PackageCard
                    title="Busua Beach Resort Package"
                    description="Includes Landcruiser Drive to and from Takoradi. Accommodation: 5 nights at Busua Beach Resort. Activities: Includes everything with added luxury"
                    kumasiPrices={{ singleOccupant: "$ 397", doubleOccupant: "$ 289" }}
                    accraPrices={{ singleOccupant: "$ 375", doubleOccupant: "$ 267" }}
                />
            </div>
        </div>
    );
}