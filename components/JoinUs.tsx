const JoinUs = () => {
  return (
    <section className="2xl:max-container relative flex flex-col pt-20 lg:mb-10 lg:pt-20" id="explore-more">
      <div className="padding-container text-center xl:max-w-[800px] max-container w-full pb-24 flexCenter flex-col gap-5">
        <h2 className="bold-40 lg:bold-54">Join us for an Epic December
          Getaway</h2>
        <p className="regular-16 text-gray-30 text-center xl:max-w-[600px]">Experience the perfect blend of adventure, culture, and relaxation in Takoradi filled with fun activities and the perfect holiday vibes! From sun-soaked beaches to the vibrant Takoradi Masquerade Carnival, this is the ultimate holiday escape</p>

        <div className="md:max-w-[1200px] bg-black p-5 rounded-2xl overflow-hidden">
          <iframe
            className="sm:w-[560px] w-full"
            height="315"
            src="https://www.youtube.com/embed/ZSA85tAyrNA?si=8HVPnrXtVv3_o7gL&autoplay=1&mute=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default JoinUs