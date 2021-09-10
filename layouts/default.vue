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
    <svg
      class="absolute top-0 left-0 z-0 w-full transform"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1399 632.076"
    >
      <g transform="translate(0 -47.811)">
        <path
          d="M0,47.811H1399V679.887L0,555.652Z"
          :fill="theme.extend.colors.ambient"
        />
      </g>
    </svg>
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
