<template>
  <div class="">
    <h1 class="font-bold text-2xl">Features</h1>

    <p class="font-bold italic">features</p>
    <pre>{{ features }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IFeature } from '~/interfaces/app.interface'

@Component({})
export default class Features extends Vue {
  @Prop({ type: Array, default: [] }) features!: IFeature[]
}
</script>
