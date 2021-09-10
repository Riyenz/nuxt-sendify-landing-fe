<template>
  <ContainerSection class="flex flex-col items-center relative">
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
        relative
        flex flex-col
        xl:flex-row
        md:rounded-xl
        xl:shadow-xl
        px-4
        py-8
        w-full
        gap-10
        bg-white
        border border-primary
      "
    >
      <div class="relative z-10 flex-1 grid grid-rows-3 gap-4">
        <div
          class="
            rounded-xl
            p-4
            cursor-pointer
            transition
            ease-in-out
            duration-200
            text-secondary
            bg-white
            hover:bg-primary-black hover:text-white
          "
          v-for="feature in features"
          :key="feature.title"
          :class="{
            'xl:bg-gray-50': selectedFeature.title !== feature.title,
            'xl:bg-primary-black xl:text-white pointer-events-none':
              selectedFeature.title === feature.title,
          }"
          @click="setSelectedFeature(feature)"
        >
          <p class="text-26px font-bold mb-2">{{ feature.title }}</p>
          <p class="text-17px mb-6 leading-tight mb:mb-0">
            {{ feature.description }}
          </p>
          <img
            class="rounded-xl w-full xl:hidden"
            :src="feature.image"
            :alt="feature.title"
          />
        </div>
      </div>

      <div
        class="
          relative
          z-10
          flex-2 flex-col
          items-center
          justify-end
          hidden
          xl:flex
        "
      >
        <div class="absolute top-0 right-0 hidden xl:grid grid-flow-col gap-4">
          <span
            v-for="feature in features"
            :key="feature.title"
            class="block h-[15px] w-[66px] rounded-full"
            :class="{
              'bg-[#D0D6F3]': feature.title !== selectedFeature.title,
              'bg-gradient-to-t from-primary to-primary-dark':
                feature.title === selectedFeature.title,
            }"
          >
          </span>
        </div>

        <h3 class="font-bold text-47px text-white mb-2">
          {{ selectedFeature.title }}
        </h3>
        <img
          v-if="selectedFeature"
          class="rounded-xl w-[680px]"
          :src="selectedFeature.image"
          alt=""
        />
      </div>

      <div class="absolute bottom-0 right-0 hidden xl:block z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="820.004"
          height="620.094"
          viewBox="0 0 820.004 620.094"
        >
          <path
            d="M820,105.14V594.524c0,14.123-12.181,25.571-27.22,25.571H24.834A446.491,446.491,0,0,1,0,472.973C0,211.757,225.414,0,503.477,0,623.4,0,733.527,39.387,820,105.14Z"
            :fill="theme.extend.colors.ambient"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </ContainerSection>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import { IFeature } from '~/interfaces/app.interface'
import { theme } from '~/tailwind.config'

@Component({})
export default class Features extends Vue {
  @Prop({ type: Array, default: [] }) features!: IFeature[]

  theme = theme
  selectedFeature: Partial<IFeature> = {}

  setSelectedFeature(feature: IFeature): void {
    this.selectedFeature = feature
  }

  @Watch('features', { immediate: true })
  initializeSelected() {
    this.setSelectedFeature(this.features[0])
  }
}
</script>
