<template>
  <div class="rounded-xl md:px-4 py-4 h-full">
    <div class="flex flex-cols-2 gap-2">
      <img
        class="rounded-xl mb-8 w-[58px] h-[58px]"
        :src="icon"
        alt="Card Use icon"
      />
      <div>
        <h3 class="text-base text-primary font-bold mb-2">
          {{ title }}
        </h3>
        <p class="text-base text-gray-700">
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
    default: 'https://via.placeholder.com/58x58',
  })
  readonly icon!: string

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
