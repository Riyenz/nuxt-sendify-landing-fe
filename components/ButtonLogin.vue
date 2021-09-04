<template>
  <div class="flex h-14 md:w-96 border border-black rounded-lg">
    <div class="h-full w-16 py-2">
      <div
        class="
          w-full
          h-full
          border-r border-black
          flex
          items-center
          justify-center
        "
      >
        <img src="@/assets/images/logos/shopify-logo.svg" alt="" />
      </div>
    </div>
    <input
      class="w-full h-full px-4 py-2 focus:outline-none"
      type="text"
      placeholder="myshop.shopify.com"
    />
    <div class="w-14 h-full flex-shrink-0 flex items-center justify-center">
      <a
        :href="installUrl"
        class="
          flex
          items-center
          justify-center
          bg-secondary
          p-2
          w-12
          h-12
          rounded-lg
          transition
          duration-200
          ease-in-out
          opacity-90
          group
          hover:opacity-100
        "
      >
        <img
          class="
            transform
            -translate-x-2
            transition
            duration-200
            ease-in-out
            group-hover:translate-x-0
          "
          src="@/assets/images/icons/arrow-right.svg"
          alt="Arrow Right Icon"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class ButtonLogin extends Vue {
  @Prop({ type: String, default: '/' }) installUrl!: string
}
</script>
