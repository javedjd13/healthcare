import HeroImg from "../../../assets/images/Genix Ai 2.png";
const HeroSection = () => {
  return (
    <section className="bg-[#E6F7FF] py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16181F]  leading-tight">
            One Solution For <br />
            All Your Clinical Needs
          </h1>
          <p className="text-[#16181F] mt-4 text-base md:text-lg">
            A secure, cloud-based platform for practice management, EMR,
            telehealth, billing, analytics, and more.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4 flex-wrap">
            <button className="bg-[#FAFAFA] border  border-[#0191C6] text-[#0191C6] px-6 py-3 rounded-lg font-semibold transition">
              Learn More
            </button>
            <button className="border border-[#009DDE] bg-[#0191C6] text-[#FAFAFA] px-6 py-3 rounded-lg font-semibold transition">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src={HeroImg}
            alt="Healthcare Platform"
            className="w-[34.1019rem] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
