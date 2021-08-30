<template>
  <div class="w-full rounded-lg shadow-xl grid grid-cols-2 gap-10">
    <div class="rounded-l-lg px-10 py-8">
      <img
        class="mb-4"
        src="@/assets/images/logos/shopify-store--full.svg"
        alt="Shopify Store Full"
      />
      <h1 class="font-bold text-35px text-black w-96 mb-4">{{ title }}</h1>
      <p class="text-23px text-tertiary w-80 mb-10">
        {{ description }}
      </p>

      <p class="text-15px text-tertiary mb-2">Login With Shopify</p>

      <ButtonLogin class="mb-2" />

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
    <div class="rounded-r-lg bg-gray-400 flex items-center justify-center">
      <span class="font-bold text-white">FEATURED IMAGE</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class SectionFeatured extends Vue {
  @Prop({ type: String, default: 'FILL_IN | TITLE' }) title!: string
  @Prop({ type: String, default: 'FILL_IN | DESCRIPTION' }) description!: string
}
</script>
