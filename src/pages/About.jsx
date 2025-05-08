const About = () => {
  return (
    <section id="about" className="flex flex-col">
      {/* Section 1: Transform your brand */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <picture className="order-1 lg:order-2 w-full h-full object-cover">
          <source
            media="(min-width: 1024px)"
            srcSet="/desktop/image-transform.jpg"
          />
          <img src="/mobile/image-transform.jpg" alt="Transform your brand" />
        </picture>
        {/* Text */}
        <div className="order-2 lg:order-1 py-16 px-6 md:px-20 lg:px-32 flex flex-col justify-center text-center lg:text-left">
          <h2 className="font-fraunces text-xl lg:text-3xl/7 font-bold text-black">
            Transform your brand
          </h2>
          <p className="font-barlow text-sm leading-6 text-gray-500 mt-6">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>

          <a
            href="#"
            className={`relative z-10 mt-6 font-fraunces uppercase text-xs/7 font-fraunces-700`}
          >
            Learn more
            <span className="absolute -z-4 top-[17px] left-1/3 lg:-left-0 w-[87px] h-1.5 rounded-full bg-custom-yellow-500/30"></span>
          </a>
        </div>
      </div>

      {/* Section 2: Stand out */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <picture className="order-1 lg:order-1 w-full h-full object-cover">
          <source
            media="(min-width: 1024px)"
            srcSet="/desktop/image-stand-out.jpg"
          />
          <img src="/mobile/image-stand-out.jpg" alt="Stand out" />
        </picture>
        {/* Text */}
        <div className="order-2 lg:order-2 py-16 px-6 md:px-20 lg:px-32 flex flex-col justify-center text-center lg:text-left">
          <h2 className="font-fraunces text-xl/7 lg:text-3xl/8 font-bold text-black">
            Stand out to the right audience
          </h2>
          <p className="font-barlow text-sm leading-6 text-gray-500 mt-6">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>

          <a
            href="#"
            className="relative lg:text-left text-center z-10 mt-6 font-fraunces uppercase text-xs/7 font-fraunces-700"
          >
            Learn more
            <span className="absolute -z-4 top-[17px] left-1/3 lg:-left-0 w-[87px] h-1.5 rounded-full bg-custom-red-400/30"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
