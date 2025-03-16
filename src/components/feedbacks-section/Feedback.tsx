import { FeedbackCard } from '../../app/types/AppTypes'

const Feedback = ({name, description, position, profile} : FeedbackCard) => {
  return (
    <div className='bg-primary-testomonial-bg px-8 py-16 rounded-xl flex flex-col gap-8'>
      <p>{description}</p>
      <section className='flex items-center gap-4'>
        <div className='w-12 h-12 rounded-full overflow-hidden'>
          <img src={profile} alt="profile-pic" />
        </div>
        <div>
          <h4 className='font-bold'>{name}</h4>
          <p>{position}</p>
        </div>
      </section>
    </div>
  )
}

export default Feedback
