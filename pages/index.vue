<template>
  <div class="grid grid-flow-row gap-40 justify-items-center pb-20">
    <SectionFeatured
      v-bind="app.sections.featured"
      :install-url="app.installUrl"
    />
    <SectionWhyUse :app-name="app.name" v-bind="app.sections.whyUse" />
    <SectionInstall
      :install-url="app.installUrl"
      v-bind="app.sections.install"
    />
    <SectionFeatures v-bind="app.sections.features" />
    <SectionPricing
      :install-url="app.installUrl"
      v-bind="app.sections.pricing"
    />
    <SectionFaqs v-bind="app.sections.faqs" />
    <SectionInstall
      :install-url="app.installUrl"
      v-bind="app.sections.install"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { IApp } from '~/interfaces/app.interface'

@Component({})
export default class IndexPage extends Vue {
  app!: IApp

  async asyncData({ $content }: any) {
    const app = await $content('app').fetch()
    return {
      app,
    }
  }

  head() {
    return {
      title: this.app.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.app.sections.featured.description,
        },
        /** Open Graph Meta Tags */
        { hid: 'og:type', property: 'og:type', content: this.app.name },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.app.sections.featured.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.app.sections.featured.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.app.image,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.app.name,
        },

        /** Twitter Meta Tags */
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.app.sections.featured.title,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.app.sections.featured.description,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.app.image,
        },
        {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: this.app.twitterUsername,
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: this.app.twitterUsername,
        },
        /** Apple Mobile Meta Tags */
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: this.app.name,
        },
      ],
    }
  }
}
</script>
