import Logo from '../../assets/logo.svg'
import Location from '../../assets/icon-location.svg'
import Phone from '../../assets/icon-phone.svg'
import Email from '../../assets/icon-email.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  library.add(faFacebookF, faTwitter, faInstagram)

  return (
    <footer className="relative bg-primary-footer-bg px-8 pt-64 pb-24 md:px-16">
      <div className="absolute top-[-250px] left-0 md:top-[-150px] w-full">
        <div className='w-5/6 bg-primary-intro flex flex-col text-center mx-auto px-8 py-16 rounded-xl  md:w-2/3 gap-8'>
          <h2 className='font-primary font-bold text-2xl leading-relaxed'>Get early access today</h2>
          <p className='leading-relaxed'>
            It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
          </p>
          <section className='w-full flex flex-col gap-8 md:flex-row md:justify-center'>
            <input type="text" placeholder='email@example.com'  className='w-full h-10 outline-none border-2 border-neutral-white rounded-full px-4 md:w-1/2'/>
            <button className='bg-accent-blue font-semibold px-8 py-3 rounded-full hover:bg-accent-cyan'>Get Started For Free</button>
          </section>
        </div>
      </div>

      <div className='flex flex-col gap-12'>
        <section className='w-[130px]'>
          <img src={Logo} alt="logo" />
        </section>

        <section className='flex flex-col gap-12 md:flex-row md:justify-between md:gap-0'>
          <section className='md:w-2/5 flex items-start gap-4'>
            <img src={Location} alt="location" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </section>

          <section className='flex flex-col gap-6'>
            <span className='flex gap-4 items-center'>
              <img src={Phone} alt="phone" />
              +1-543-123-4567
            </span>
            <span className='flex gap-4 items-center'>
              <img src={Email} alt="email" />
              example@fylo.com
            </span>
          </section>

          <section>
            <ul className='flex flex-col gap-4'>
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </section>

          <section>
            <ul className='flex flex-col gap-4'>
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </section>

          <section className='flex justify-center items-center gap-4 md:items-start'>
            <div
            className='w-8 h-8 border-2 border-neutral-white rounded-full flex justify-center items-center'
            >
              <FontAwesomeIcon icon={faFacebookF} size='lg' />
            </div>
            <div
            className='w-8 h-8 border-2 border-neutral-white rounded-full flex justify-center items-center'
            >
              <FontAwesomeIcon icon={faTwitter} size='lg' />
            </div>
            <div
              className='w-8 h-8 border-2 border-neutral-white rounded-full flex justify-center items-center'
            >
              <FontAwesomeIcon icon={faInstagram} size='lg' />
            </div>
          </section>
        </section>
      </div>
    </footer>
  )
}

export default Footer
