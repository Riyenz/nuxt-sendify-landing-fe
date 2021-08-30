<template>
  <div class="py-32">
    <div class="grid grid-flow-row gap-40">
      <SectionFeatured v-bind="app.sections.featured" />
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
}
</script>
