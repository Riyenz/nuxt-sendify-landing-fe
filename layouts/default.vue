<template>
  <div class="font-sans w-full max-w-screen overflox-x-hidden min-h-screen">
    <Navbar :installUrl="app.installUrl" :blogUrl="app.blogUrl" />
    <main class="xl:px-24 flex justify-center">
      <Nuxt class="max-w-1200px w-full" />
    </main>
    <hr class="border-secondary mb-10" />
    <div class="xl:px-24 flex justify-center">
      <Footer :socials="app.socials" class="max-w-[1320px] w-full" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { IContentDocument } from '@nuxt/content/types/content'
import { IApp } from '~/interfaces/app.interface'

@Component({})
export default class DefaultLayout extends Vue {
  app: Partial<IApp | IContentDocument> = {}

  async fetch() {
    this.app = await this.$content('app').fetch()
  }
}
</script>
