<template>
  <div
    class="
      group
      rounded-xl
      px-4
      py-4
      h-full
      cursor-pointer
      transition
      ease-in-out
      duration-200
      hover:bg-primary hover:text-white
    "
  >
    <div class="flex flex-cols-2 gap-4">
      <div>
        <img class="rounded-xl w-full mb-8" :src="image" alt="Card Use Image" />
      </div>
      <div>
        <h3
          class="text-base text-primary font-bold mb-2 group-hover:text-white"
        >
          {{ title }}
        </h3>
        <p class="text-base text-gray-700 group-hover:text-white">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class CardUse extends Vue {
  @Prop({
    type: String,
    default: 'https://via.placeholder.com/60x60',
  })
  readonly image!: string

  @Prop({
    type: String,
    default: 'FILL_IN',
  })
  readonly title!: string

  @Prop({
    type: String,
    default: 'FILL_IN',
  })
  readonly description!: string
}
</script>
