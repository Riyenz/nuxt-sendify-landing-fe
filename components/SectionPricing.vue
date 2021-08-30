<template>
  <div class="">
    <h1 class="font-bold text-2xl">Pricing</h1>

    <p class="font-bold italic">installUrl</p>
    <pre>{{ installUrl }}</pre>
    <p class="font-bold italic">title</p>
    <pre>{{ title }}</pre>
    <p class="font-bold italic">extras</p>
    <pre>{{ extras }}</pre>
    <p class="font-bold italic">price</p>
    <pre>{{ price }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Pricing extends Vue {
  @Prop({ type: String, default: '/' }) installUrl!: string
  @Prop({ type: String, default: 'FILL_IN | TITLE' }) title!: string
  @Prop({ type: Array, default: [] }) extras!: string[]
  @Prop({ type: String, default: 'FILL_IN | PRICE' }) price!: string
}
</script>
