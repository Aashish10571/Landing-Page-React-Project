import { SelectedPage } from "../../app/utility/AppEnums"
import Feedback from "./Feedback"
import Quote from '../../assets/bg-quotes.png'
import Profile1 from '../../assets/profile-1.jpg'
import Profile2 from '../../assets/profile-2.jpg'
import Profile3 from '../../assets/profile-3.jpg'

const FeedbackSection = () => {
  return (
    <div
      id={SelectedPage.Feedbacks}
      className="relative bg-primary-main-bg flex justify-center items-center px-16 pt-20 pb-72 md:px-24"
    >
      <div className="absolute top-8 left-8 md:left-16">
        <img src={Quote} alt="quote-img" />
      </div>

      <div className="flex flex-col justify-between items-center gap-16 z-10 md:flex-row md:gap-4">
        <Feedback
          name="Satish Pate"
          position="Founder & CEO, Huddle"
          description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          profile={Profile1}
        />
        <Feedback
          name="Bruce McKenzie"
          position="Founder & CEO, Huddle"
          description=" Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          profile={Profile2}
        />
        <Feedback
          name="Iva Boyd"
          position="Founder & CEO, Huddle"
          description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          profile={Profile3}
        />
      </div>
    </div>
  )
}

export default FeedbackSection
