import backgroundImg from "../../assets/illustration-intro.png"
import { SelectedPage } from "../../app/utility/AppEnums"

const HeroSection = () => {
  return (
    <div
      id={SelectedPage.Home}
      className="bg-primary-intro flex justify-center items-center pt-32 pb-24"
    >
      <div className="w-4/5 flex flex-col justify-between items-center gap-20 z-10 md:w-3/5 md:gap-20">
        <img src={backgroundImg} alt="intro-background-image" />

        <section
           className="flex  flex-col justify-center items-center gap-10 text-center">
          <h1 className="font-primary font-bold text-3xl leading-relaxed md:text-4xl">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text-[17px] leading-relaxed md:text-xl">
            Fylo stores all your most important files in one secure location. Access them wherever
            you need, share and collaborate with friends family, and co-workers.
          </p>
          <button
            className="text-lg font-semibold bg-accent-blue mt-4 px-8 py-2 rounded-full hover:bg-accent-cyan cursor-pointer md:px-10">
            Get Started
          </button>
        </section>
      </div>
    </div>
  )
}

export default HeroSection
