<template>
  <ContainerSection>
    <div
      class="
        md:rounded-lg
        px-10
        py-8
        flex
        items-center
        flex-col-reverse
        bg-ambient
        md:shadow-xl md:flex-row md:px-20
      "
    >
      <img class="md:mr-10" :src="image" alt="" />
      <div class="grid grid-flow-row auto-rows-max gap-6 text-center w-full">
        <h3 class="font-bold text-24px text-white">
          {{ title }}
        </h3>
        <p class="text-18px text-white">
          {{ description }}
        </p>

        <div class="flex justify-center items-center">
          <a
            :href="installUrl"
            target="_blank"
            class="
              bg-tertiary
              text-white
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
                bg-white
                text-black
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
  </ContainerSection>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class SectionInstall extends Vue {
  @Prop({ type: String, default: '/' }) installUrl!: string
  @Prop({ type: String, default: 'https://via.placeholder.com/280x210' })
  image!: string

  @Prop({ type: String, default: 'FILL_IN | TITLE' }) title!: string
  @Prop({ type: String, default: 'FILL_IN | DESCRIPTION' }) description!: string
}
</script>
