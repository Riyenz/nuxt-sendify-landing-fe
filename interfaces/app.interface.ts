export interface IApp {
  name: string
  installUrl: string
  sections: {
    featured: IFeaturedSection
    whyUse: IWhyUseSection
    install: IInstallSection
    features: IFeaturesSection
    pricing: IPricingSection
    faqs: IFaqsSection
  }
}

export interface IFeaturedSection {
  title: string
  description: string
  image: string
}

export interface IWhyUseSection {
  description: string
  cards: IWhyUseCard[]
}

export interface IWhyUseCard {
  image: string
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
}

export interface IFaqsSection {
  supportLink: string
  description: string
  faqs: IFaqs[]
}

export interface IFaqs {
  question: string
  answer: string
}
