<template>
  <div class="max-w-full overflow-x-auto">
    <h1 class="font-bold text-2xl">Faqs</h1>

    <p class="font-bold italic">supportLink</p>
    <pre>{{ supportLink }}</pre>
    <p class="font-bold italic">description</p>
    <pre>{{ description }}</pre>
    <p class="font-bold italic">faqs</p>
    <pre>{{ faqs }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IFaqs } from '~/interfaces/app.interface'

@Component({})
export default class Faqs extends Vue {
  @Prop({ type: String, default: '/' }) supportLink!: string
  @Prop({ type: String, default: 'FILL_IN | DESCRIPTION' }) description!: string
  @Prop({ type: Array, default: [] }) faqs!: IFaqs[]
}
</script>
