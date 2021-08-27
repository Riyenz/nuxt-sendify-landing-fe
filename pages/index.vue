<template>
  <div class="py-32">
    <div class="grid grid-flow-row gap-40">
      <SectionFeatured />
      <SectionWhyUse />
      <SectionInstall />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class IndexPage extends Vue {
  title: string = 'Nuxt Seed'
}
</script>
