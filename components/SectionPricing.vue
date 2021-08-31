<template>
  <div class="flex flex-col items-center">
    <h3 class="text-center font-bold text-35px mb-6 relative">
      <span class="relative z-10">Pricing</span>
      <div
        class="
          bg-primary
          h-10
          w-28
          rounded
          absolute
          top-1/2
          -left-4
          transform
          -translate-y-1/2
          z-0
        "
      ></div>
    </h3>
    <div
      class="
        grid grid-cols-2
        bg-secondary
        rounded-lg
        shadow-xl
        px-10
        py-12
        w-full
      "
    >
      <div clas="flex items-center justify-center">
        <h2 class="text-center text-white font-bold text-3xl mb-4">
          {{ title }}
        </h2>
        <div class="mb-10">
          <p
            v-for="extra in extras"
            :key="extra"
            class="text-white text-lg text-center"
          >
            {{ extra }}
          </p>
        </div>
        <div class="flex justify-center">
          <button
            class="
              bg-white
              items-center
              text-secondary text-base
              font-medium
              rounded-lg
              py-3
              px-8
              mb-4
              bg-opacity-90
              transition
              duration-200
              ease-in-out
              hover:bg-opacity-100
            "
          >
            Start Now Free
          </button>
        </div>

        <p class="text-white text-base text-center font-bold mb-4">
          30 days trial
        </p>
        <div class="flex justify-center">
          <img
            class="mb-4"
            src="@/assets/images/logos/shopify-find--white.svg"
            alt="Shopify Store Full"
          />
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="flex">
          <p class="text-white text-center text-9xl font-bold">
            {{ price }}
          </p>
          <p
            class="
              bg-white
              text-secondary
              h-10
              w-10
              border border-primary
              rounded-full
              text-24px
              flex-shrink-0
              text-center
              flex
              items-center
              justify-center
            "
          >
            $
          </p>
        </div>
      </div>
    </div>
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
