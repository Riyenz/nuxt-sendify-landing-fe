<template>
  <ContainerSection class="w-full px-4">
    <div class="grid grid-flow-col auto-cols-max gap-4 mb-10">
      <img
        class="mt-1 hidden md:block"
        src="@/assets/images/logos/site-logo.svg"
        alt=""
      />
      <div class="flex flex-col w-full max-w-full">
        <h1 class="font-bold text-35px text-black relative">
          <span class="relative z-10">Why use {{ appName }}</span>
          <div
            class="
              bg-primary-light
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
        <p class="text-18px text-black w-80 md:w-140">
          {{ description }}
        </p>
      </div>
    </div>
    <div class="md:grid grid-cols-2 gap-8">
      <div class="flex justify-center mb-8 md:mb-0">
        <img :src="image" alt="" />
      </div>
      <div class="grid">
        <CardUse v-for="(card, index) in cards" :key="index" v-bind="card" />
      </div>
    </div>
  </ContainerSection>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IWhyUseCard } from '~/interfaces/app.interface'

@Component({})
export default class SectionWhyUse extends Vue {
  @Prop({ type: String, default: 'FILL_IN | APP_NAME' }) appName!: string
  @Prop({ type: String, default: 'FILL_IN | DESCRIPTION' }) description!: string
  @Prop({ type: String, default: '/' }) image!: string
  @Prop({ type: Array, default: [] }) cards!: IWhyUseCard[]
}
</script>
