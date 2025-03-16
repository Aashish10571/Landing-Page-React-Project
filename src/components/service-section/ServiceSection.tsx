import { SelectedPage } from "../../app/utility/AppEnums"
import ProductiveImage from '../../assets/illustration-stay-productive.png'
import ArrowImage from '../../assets/icon-arrow.svg'

const ServiceSection = () => {
  return (
    <div
      id={SelectedPage.Services}
      className="bg-primary-main-bg pt-20 pb-28 flex justify-center icen"
    >
      <section className="w-3/4 flex flex-col gap-16 md:w-5/6 md:flex-row">
        <img src={ProductiveImage} alt="productive-image" className="w-full md:w-1/2" />

        <section className="w-full flex flex-col justify-center text-center gap-8 md:w-1/2 md:gap-10  md:text-start">
          <h1 className="font-primary text-2xl font-bold leading-relaxed md:text-3xl">
            Stay productive, wherever you are
          </h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
          </p>
          <a href="#" className="flex items-center gap-2 text-accent-cyan mx-auto border-b-2 border-accent-cyan md:w-fit md:mx-0">
            See how Fylo works <img src={ArrowImage} alt="arrow-image" />
          </a>
        </section>
      </section>
    </div>
  )
}

export default ServiceSection
