<template>
  <div class="font-sans w-screen min-h-screen">
    <Navbar />
    <main class="pt-20 px-10 xl:px-24 flex justify-center">
      <Nuxt class="max-w-1200px w-full" />
    </main>
    <div class="xl:px-24 flex justify-center">
      <Footer class="max-w-1200px w-full" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { IContentDocument } from '@nuxt/content/types/content'
import { IApp } from '~/interfaces/app.interface'

@Component({})
export default class DefaultLayout extends Vue {
  app: Partial<IApp | IContentDocument | IContentDocument[]> = {}

  async fetch() {
    this.app = await this.$content('app').fetch()
  }
}
</script>
