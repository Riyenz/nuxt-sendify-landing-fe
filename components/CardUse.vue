<template>
  <div
    class="
      group
      rounded-xl
      px-4
      py-6
      shadow-spread
      text-center
      h-full
      transition
      ease-in-out
      duration-200
      hover:bg-secondary hover:text-white
    "
  >
    <img class="rounded-xl w-full mb-8" :src="image" alt="Card Use Image" />
    <h3 class="text-24px text-secondary mb-4 group-hover:text-white">
      {{ title }}
    </h3>
    <p class="text-18px text-gray-700 group-hover:text-white">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class CardUse extends Vue {
  @Prop({
    type: String,
    default: 'https://via.placeholder.com/200x120',
  })
  readonly image!: string

  @Prop({
    type: String,
    default: 'FILL_IN',
  })
  readonly title!: string

  @Prop({
    type: String,
    default:
      'Tempor aute consectetur esse ut. Ea ipsum anim id consectetur qui nulla. Et ex ut id proident culpa elit occaecat incididunt laboris sit culpa nulla anim.',
  })
  readonly description!: string
}
</script>
