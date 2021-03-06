export interface IApp {
  name: string
  year: string
  installUrl: string
  blogUrl: string
  twitterUsername: string
  image: string
  socials: ISocials
  sections: {
    featured: IFeaturedSection
    whyUse: IWhyUseSection
    install: IInstallSection
    features: IFeaturesSection
    pricing: IPricingSection
    faqs: IFaqSection
  }
}

export interface ISocials {
  instagram: string
  facebook: string
  youtube: string
}
export interface IFeaturedSection {
  title: string
  description: string
  image: string
}

export interface IWhyUseSection {
  image: string
  description: string
  cards: IWhyUseCard[]
}

export interface IWhyUseCard {
  icon: string
  title: string
  description: string
}

export interface IInstallSection {
  image: string
  title: string
  description: string
  installUrl: string
}

export interface IFeaturesSection {
  features: IFeature[]
}

export interface IFeature {
  title: string
  description: string
  image: string
}

export interface IPricingSection {
  title: string
  extras: string[]
  price: string
  dayTrial: string
}

export interface IFaqSection {
  supportLink: string
  description: string
  faqs: IFaq[]
}

export interface IFaq {
  question: string
  answer: string
}
