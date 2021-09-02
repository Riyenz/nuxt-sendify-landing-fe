<template>
  <div class="flex flex-col items-center">
    <h3 class="text-center font-bold text-35px mb-6 relative">
      <span class="relative z-10">Frequently Asked Questions</span>
      <div
        class="
          bg-primary
          h-10
          w-96
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
    <div class="">
      <div
        class="rounded-lg bg-gray-50 px-10 py-8 mb-4"
        v-for="faq in faqs"
        :key="faq"
      >
        <div>
          <h3 class="text-base font-bold mb-2">{{ faq.question }}</h3>
          <div>
            <h3 class="text-base">{{ faq.answer }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IFaqs } from '~/interfaces/app.interface'

@Component({})
export default class Faqs extends Vue {
  @Prop({ type: String, default: '/' }) supportLink!: string
  @Prop({ type: String, default: 'FILL_IN | DESCRIPTION' }) description!: string
  @Prop({ type: Array, default: [] }) faqs!: IFaqs[]
}
</script>
