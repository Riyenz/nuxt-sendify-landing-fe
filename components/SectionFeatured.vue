<template>
  <div>
    <div class="w-full rounded-lg md:shadow-xl gap-10 mb-8">
      <div class="rounded-l-lg px-4 py-8 md:px-10">
        <h1 class="font-bold text-5xl text-black text-center mb-10">
          {{ title }}
        </h1>
        <div class="flex items-center justify-center">
          <p class="text-lg text-black mb-2 text-center max-w-[800px]">
            {{ description }}
          </p>
        </div>
      </div>
      <p class="flex justify-center text-base mb-4">Start Your WIN today!</p>
      <div class="flex justify-center items-center mb-4">
        <a
          :href="installUrl"
          target="_blank"
          class="
            bg-white
            text-black
            px-6
            py-2
            rounded-xl
            shadow-xl
            flex
            transform
            transition
            duration-200
            ease-in-out
            group
            bg-opacity-90
            hover:bg-opacity-100 hover:shadow-lg
            mb-6
            md:mb-0
          "
        >
          <span class="mr-2">Try it Free Now</span>
          <span
            class="
              flex
              items-center
              justify-center
              bg-ambient
              text-white
              w-6
              h-6
              rounded-full
              text-24px
              transition
              duration-200
              ease-in-out
              group-hover:translate-x-2
            "
          >
            <span class="-mt-0.5">&#8250;</span>
          </span>
        </a>
      </div>
      <p class="flex justify-center text-sm">
        A convenient way to discover your creativity
      </p>

      <div class="">
        <img
          class="w-full h-full object-cover"
          :src="image"
          alt="Featured Image"
        />
      </div>
    </div>
    <div
      class="
        flex flex-cols-3
        rounded-lg
        px-8
        py-2
        gap-10
        bg-primary-black
        items-center
      "
    >
      <div class="">
        <img
          src="@/assets/images/logos/shopify-google-store-logo.svg"
          alt="Shopify and Google Store Logo"
        />
      </div>
      <div>
        <p class="text-white text-base font-bold">Get Extension now!</p>
        <p class="text-white text-lg">
          Join thousands of business owners gain higher reach with Sendify
        </p>
      </div>
      <div class="flex gap-6">
        <div class="flex justify-center items-center">
          <a
            :href="installUrl"
            target="_blank"
            class="
              bg-primary
              text-white
              px-4
              py-2.5
              rounded-xl
              shadow-xl
              flex
              transform
              transition
              duration-200
              ease-in-out
              group
              bg-opacity-90
              hover:bg-opacity-100 hover:shadow-lg
              mb-6
              md:mb-0
            "
          >
            <span class="mr-2">Try it Free Now</span>
            <span
              class="
                flex
                items-center
                justify-center
                bg-white
                text-tertiary
                w-6
                h-6
                rounded-full
                text-24px
                transition
                duration-200
                ease-in-out
                group-hover:translate-x-2
              "
            >
              <span class="-mt-0.5">&#8250;</span>
            </span>
          </a>
        </div>
        <img
          src="@/assets/images/logos/google-store-logo.svg"
          alt="Google Store Logo"
        />
      </div>
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
