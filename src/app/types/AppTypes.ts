import { SelectedPage } from "../utility/AppEnums"

export interface Page {
  selectedPage: SelectedPage
}

export interface FeatureCard {
  title: string,
  description: string,
  image: string
}

export interface FeedbackCard {
  name: string,
  position: string,
  description: string,
  profile: string
}
