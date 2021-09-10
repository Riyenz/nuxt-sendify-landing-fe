<template>
  <div class="relative bg-ambient xl:bg-transparent">
    <svg
      class="absolute top-0 left-0 z-0 w-full transform"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1399 632.076"
    >
      <g transform="translate(0 -47.811)">
        <path
          d="M0,47.811H1399V679.887L0,555.652Z"
          :fill="theme.extend.colors.ambient"
        />
      </g>
    </svg>
    <div class="w-full gap-10 mb-8 relative z-10">
      <div class="rounded-l-lg px-4 py-8 md:px-10">
        <h1
          class="
            font-bold
            text-24px
            md:text-[46px]
            text-white text-center
            mb-10
          "
        >
          {{ title }}
        </h1>
        <div class="flex items-center justify-center">
          <p class="text-lg text-white mb-2 text-center max-w-[800px]">
            {{ description }}
          </p>
        </div>
      </div>
      <p class="flex justify-center text-white text-base mb-4">
        Start Your WIN today!
      </p>
      <div class="flex justify-center items-center mb-4">
        <a
          :href="installUrl"
          target="_blank"
          class="
            bg-white
            text-[#515784]
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
      <p class="flex justify-center text-sm text-white mb-8 md:mb-0">
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
        flex flex-col
        xl:flex-row
        rounded-lg
        px-3
        md:px-8
        py-4
        md:py-2
        bg-primary-black bg-opacity-95
        md:items-center
        relative
        z-10
      "
    >
      <div class="relative mb-4 xl:mb-0">
        <img
          class="
            w-[123px]
            md:mr-10
            md:absolute
            md:top-1/2
            md:left-0
            md:transform
            md:-translate-y-1/2
            mb-4
            md:mb-0
          "
          src="@/assets/images/logos/shopify-google-store-logo.svg"
          alt="Shopify and Google Store Logo"
        />
        <div class="md:ml-36 md:mr-10">
          <p class="text-white text-14px font-bold">Get Extension now!</p>
          <p class="text-white text-18px lg:whitespace-nowrap">
            Join thousands of business owners gain higher reach with Sendify
          </p>
        </div>
      </div>
      <div class="flex">
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
              mr-4
            "
          >
            <span class="whitespace-nowrap mr-2">Try it Free Now</span>
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
import { theme } from '~/tailwind.config'

@Component({})
export default class SectionFeatured extends Vue {
  @Prop({ type: String, default: '/' }) installUrl!: string
  @Prop({ type: String, default: 'FILL_IN | TITLE' }) title!: string
  @Prop({ type: String, default: 'FILL_IN | DESCRIPTION' }) description!: string
  @Prop({ type: String, default: 'https://via.placeholder.com/450x600' })
  image!: string

  theme = theme
}
</script>
