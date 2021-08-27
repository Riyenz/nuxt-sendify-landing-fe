<template>
  <div class="w-full">
    <div class="grid grid-flow-col auto-cols-max gap-4 mb-10">
      <img class="mt-1" src="@/assets/images/logos/site-logo.svg" alt="" />
      <div class="flex flex-col max-w-full">
        <h1 class="font-bold text-35px text-black relative">
          <span class="relative z-10">Why use {{ appName }}</span>
          <div
            class="
              bg-primary
              h-10
              w-52
              rounded
              absolute
              top-1/2
              -left-2
              transform
              -translate-y-1/2
              z-0
            "
          ></div>
        </h1>
        <p class="text-18px text-tertiary w-140">
          {{ description }}
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-flow-col auto-cols-fr gap-8">
      <CardUse />
      <CardUse />
      <CardUse />
      <CardUse />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'

@Component({})
export default class SectionWhyUse extends Vue {
  @Getter('appName') appName!: string
  description: string =
    'Labore nulla ex sit ipsum quis ex duis exercitation. Est enim officia eiusmod eu ad ea velit irure sunt. Exercitation sint aliqua anim anim consequat aliqua exercitation ut ullamco irure exercitation anim.'
}
</script>
