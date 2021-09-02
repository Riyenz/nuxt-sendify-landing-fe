<template>
  <div
    class="
      navbar
      w-full
      bg-white
      flex
      justify-center
      h-20
      shadow-lg
      px-4
      xl:px-24
      py-2
      fixed
      z-50
    "
  >
    <div class="flex items-center justify-between w-full max-w-1200px">
      <img src="@/assets/images/logos/site-logo--full.svg" alt="" />

      <div class="gap-10 grid-flow-col items-center hidden md:grid">
        <a
          v-for="link in links"
          :key="link.href"
          href="https://www.google.com/"
          class="block text-15px font-bold relative group"
          :class="{
            'text-black': !link.isButton,
            'px-4 py-3 bg-black text-white rounded-lg bg-opacity-90 transition duration-200 ease-in-out hover:bg-opacity-100':
              link.isButton,
          }"
        >
          {{ link.text }}
          <div
            v-if="!link.isButton"
            class="
              absolute
              -bottom-1
              left-0
              rounded-full
              h-1
              w-0
              bg-primary
              transition-width
              duration-200
              ease-in-out
              group-hover:w-full
            "
          ></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Navbar extends Vue {
  @Prop({ type: String, default: '/' }) installUrl!: string

  links = [
    {
      text: 'Features',
      href: '#features',
    },
    {
      text: 'Pricing',
      href: '#pricing',
    },
    {
      text: 'Contact US',
      href: '#contact',
    },
    {
      text: 'Blog',
      href: '#blog',
    },
    {
      text: 'Start Free',
      href: this.installUrl,
      isButton: true,
    },
  ]
}
</script>
