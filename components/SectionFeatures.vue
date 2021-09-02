<template>
  <div class="flex flex-col items-center">
    <h3 class="text-center font-bold text-35px mb-6 relative">
      <span class="relative z-10">Features</span>
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
        grid grid-cols-1
        md:grid-cols-2
        rounded-lg
        md:shadow-xl
        px-4
        md:px-10
        py-8
        w-full
        gap-10
      "
    >
      <div class="rounded-lg">
        <div
          class="
            rounded-lg
            px-6
            py-8
            mb-4
            cursor-pointer
            transition
            ease-in-out
            duration-200
            hover:bg-secondary hover:text-white
          "
          v-for="feature in features"
          :key="feature.title"
          :class="{
            'bg-gray-50': selectedFeature.title !== feature.title,
            'md:bg-secondary md:text-primary pointer-events-none':
              selectedFeature.title === feature.title,
          }"
          @click="onClickFeature(feature)"
        >
          <p class="text-2xl font-bold mb-2">{{ feature.title }}</p>
          <p class="text-lg mb-6 mb:mb-0">{{ feature.description }}</p>
          <img
            class="rounded-lg w-full md:hidden"
            :src="feature.image"
            :alt="feature.title"
          />
        </div>
      </div>

      <div class="items-center justify-center hidden md:flex">
        <img
          v-if="selectedFeature"
          class="rounded-lg w-full"
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
