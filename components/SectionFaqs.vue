<template>
  <div class="flex flex-col items-center px-4">
    <h3 class="text-center font-bold text-35px mb-6 relative">
      <span class="relative z-10 hidden md:block">
        Frequently Asked Questions
      </span>
      <span class="relative z-10 md:hidden">FAQ</span>
      <div
        class="
          bg-primary
          h-10
          w-16
          md:w-96
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
    <div class="mb-8">
      <div
        class="rounded-xl mb-4 cursor-pointer bg-gray-100"
        v-for="(faq, index) in faqs"
        :key="index"
        @click="onClickFaq(index)"
      >
        <div
          class="px-8 py-6 w-full rounded-xl flex justify-between items-center"
        >
          <h3 class="text-base font-bold max-w-[650px]">
            {{ faq.question }}
          </h3>

          <img
            class="flex-shrink-0 w-6 h-6 transition duration-150 ease-in-out"
            :class="{
              'transform rotate-180': openedFaq === index,
            }"
            src="@/assets/images/icons/chevron-down--circled.svg"
            alt=""
          />
        </div>
        <div
          class="
            w-full
            transition-height
            duration-200
            ease-in-out
            overflow-y-hidden
            rounded-xl
          "
          :class="{
            'h-0 ': openedFaq !== index,
            'h-40': openedFaq === index,
          }"
        >
          <h3 class="text-base px-8 py-6 max-w-[650px]">{{ faq.answer }}</h3>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center relative">
      <span id="contact" class="absolute -top-72 left-0"></span>
      <h4 class="font-bold text-20px text-secondary text-center mb-4">
        Do you still have a question?
      </h4>
      <p class="text-17px text-center mb-6 max-w-[500px]">
        {{ description }}
      </p>
      <a
        class="
          flex
          items-center
          justify-between
          rounded-xl
          border border-secondary
          bg-primary
          px-4
          py-2
          bg-opacity-80
          hover:bg-opacity-100
        "
        :href="supportLink"
        target="_blank"
      >
        <span class="mr-2">Get Support</span>
        <img src="@/assets/images/icons/support-icon.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { IFaq } from '~/interfaces/app.interface'

@Component({})
export default class Faqs extends Vue {
  @Prop({ type: String, default: '/' }) supportLink!: string
  @Prop({ type: String, default: 'FILL_IN | DESCRIPTION' }) description!: string
  @Prop({ type: Array, default: [] }) faqs!: IFaq[]

  openedFaq: number = -1

  onClickFaq(index: number): void {
    if (this.openedFaq === index) {
      this.openedFaq = -1
      return
    }
    this.openedFaq = index
  }
}
</script>
