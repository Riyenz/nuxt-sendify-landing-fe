<template>
  <div
    class="
      font-sans
      w-full
      max-w-screen
      overflox-x-hidden
      min-h-screen
      bg-[#F7F9FB]
    "
  >
    <Navbar :installUrl="app.installUrl" :blogUrl="app.blogUrl" />
    <main class="xl:px-24 flex justify-center pt-20">
      <Nuxt class="w-full" />
    </main>
    <hr class="border-primary mb-10" />
    <div class="xl:px-24 flex justify-center">
      <Footer
        :socials="app.socials"
        :app-name="app.name"
        :year="app.year"
        class="max-w-[1320px] w-full"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { IContentDocument } from '@nuxt/content/types/content'
import { IApp } from '~/interfaces/app.interface'
import { theme } from '~/tailwind.config'

@Component({})
export default class DefaultLayout extends Vue {
  theme = theme
  app: Partial<IApp | IContentDocument> = {}

  async fetch() {
    this.app = await this.$content('app').fetch()
  }
}
</script>
