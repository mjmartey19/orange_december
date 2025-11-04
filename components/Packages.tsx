import DiasporaPackages from "./DiasporaPackages"
import LocalPackages from "./LocalPackages"

const Packages = () => {
    return (
        <section className="2xl:max-container relative flex flex-col lg:mb-10">
            <div className="padding-container text-center max-container w-full pb-24 flexCenter flex-col gap-5 ">
                <h2 className="bold-40 lg:bold-54">Packages</h2>
                <p className="regular-16 text-gray-30 text-center xl:max-w-[600px]">Explore our Diaspora and Local options.</p>

                <div className="w-full max-w-7xl mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="text-left">
                            <DiasporaPackages />
                        </div>

                        <div className="text-left">
                            <LocalPackages />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Packages