<template>
  <div
    class="
      w-full
      rounded-lg
      md:shadow-xl
      grid grid-flow-row
      gap-10
      md:grid-cols-2
    "
  >
    <div class="rounded-l-lg px-4 py-8 md:px-10">
      <img
        class="mb-4"
        src="@/assets/images/logos/shopify-store--full.svg"
        alt="Shopify Store Full"
      />
      <h1 class="font-bold text-35px text-black md:w-96 mb-4">{{ title }}</h1>
      <p class="text-23px text-tertiary w-80 mb-10">
        {{ description }}
      </p>

      <p class="text-15px text-tertiary mb-2">Login With Shopify</p>

      <ButtonLogin :installUrl="installUrl" class="mb-2" />

      <div class="grid grid-flow-col auto-cols-max gap-4 text-14px">
        <NuxtLink
          class="transition ease-in duration-200 hover:opacity-80"
          to="/terms-of-use"
        >
          Terms of Use
        </NuxtLink>
        |
        <NuxtLink
          class="transition ease-in duration-200 hover:opacity-80"
          to="/privacy-policy"
        >
          Privacy policy
        </NuxtLink>
      </div>
    </div>
    <div class="rounded-r-lg items-center justify-center hidden md:flex">
      <img
        class="w-full h-full object-cover"
        :src="image"
        alt="Featured Image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class SectionFeatured extends Vue {
  @Prop({ type: String, default: '/' }) installUrl!: string
  @Prop({ type: String, default: 'FILL_IN | TITLE' }) title!: string
  @Prop({ type: String, default: 'FILL_IN | DESCRIPTION' }) description!: string
  @Prop({ type: String, default: 'https://via.placeholder.com/450x600' })
  image!: string
}
</script>
