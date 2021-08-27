<template>
  <div class="rounded-lg shadow-xl px-10 py-8 flex items-center">
    <img class="rounded-full mr-10" :src="installImage" alt="" />
    <div class="grid grid-flow-row auto-rows-max gap-6 text-center w-full">
      <h3 class="font-bold text-24px text-secondary">
        {{ title }}
      </h3>
      <p class="text-18px text-gray-700">
        {{ description }}
      </p>

      <div class="flex justify-center">
        <img
          src="@/assets/images/logos/shopify-store--full.svg"
          alt="Shopify Store Full"
          class="mr-10"
        />
        <a
          :href="installUrl"
          target="_blank"
          class="
            bg-secondary
            text-primary
            px-6
            py-2
            rounded-xl
            flex
            transform
            transition
            duration-200
            ease-in-out
            group
            bg-opacity-90
            hover:bg-opacity-100
          "
        >
          <span class="mr-2">Try it Free Now</span>
          <span
            class="
              flex
              items-center
              justify-center
              bg-white
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue } from 'nuxt-property-decorator'

@Component({})
export default class SectionInstall extends Vue {
  @Getter('installUrl') installUrl!: string

  installImage: string = 'https://via.placeholder.com/280x210'
  title: string = 'Et aliqua anim culpa aliquip exercitation.'
  description: string =
    'Ea aute aute duis amet amet nostrud. Velit Lorem laborum esse enim consectetur ipsum nisi dolore qui proident dolor consequat.'
}
</script>
