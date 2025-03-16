import { FeatureCard } from "../../app/types/AppTypes"

const Feature = ({title, description, image} : FeatureCard) => {
  return (
    <section className="flex flex-col items-center gap-8 text-center">
      <img src={image} alt="feature-image" />
      <h1 className="font-primary font-bold text-2xl leading-relaxed">{title}</h1>
      <p className="leading-relaxed">{description}</p>
    </section>
  )
}

export default Feature
