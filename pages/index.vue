<template>
  <div class="container">
    <h1 class="text-3xl">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class IndexPage extends Vue {
  title: string = 'Nuxt Seed'
}
</script>
