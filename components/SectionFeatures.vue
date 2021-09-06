<template>
  <div class="flex flex-col items-center relative">
    <span id="features" class="absolute -top-32 left-0"></span>
    <h3 class="text-center font-bold text-35px mb-6 relative">
      <span class="relative z-10">Features</span>
      <div
        class="
          bg-primary-light
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
        flex flex-col
        md:flex-row
        rounded-xl
        md:shadow-xl
        px-4
        py-8
        w-full
        gap-10
        bg-white
      "
    >
      <div class="flex-1">
        <div
          class="
            rounded-xl
            p-4
            mb-4
            cursor-pointer
            transition
            ease-in-out
            duration-200
            text-secondary
            bg-primary-light
            hover:bg-primary-black hover:text-white
          "
          v-for="feature in features"
          :key="feature.title"
          :class="{
            'bg-gray-50': selectedFeature.title !== feature.title,
            'md:bg-primary-black md:text-white pointer-events-none':
              selectedFeature.title === feature.title,
          }"
          @click="onClickFeature(feature)"
        >
          <p class="text-2xl font-bold mb-2">{{ feature.title }}</p>
          <p class="text-lg mb-6 mb:mb-0">{{ feature.description }}</p>
          <img
            class="rounded-xl w-full md:hidden"
            :src="feature.image"
            :alt="feature.title"
          />
        </div>
      </div>

      <div class="flex-2 flex-col items-center justify-center hidden md:flex">
        <img
          v-if="selectedFeature"
          class="rounded-xl w-full"
          :src="selectedFeature.image"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IFeature } from '~/interfaces/app.interface'

@Component({})
export default class Features extends Vue {
  @Prop({ type: Array, default: [] }) features!: IFeature[]

  selectedFeature: Partial<IFeature> = {}

  mounted() {
    this.selectedFeature = this.features[0]
  }

  onClickFeature(feature: IFeature): void {
    this.selectedFeature = feature
  }
}
</script>
