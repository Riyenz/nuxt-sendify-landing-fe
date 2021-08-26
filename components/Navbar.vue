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
      px-24
      py-2
      fixed
    "
  >
    <div class="flex items-center justify-between w-full max-w-1200px">
      <img :src="logoUrl" alt="" />

      <div class="grid gap-10 grid-flow-col items-center">
        <a
          v-for="link in links"
          :key="link.href"
          href="https://www.google.com/"
          class="block text-15px font-bold"
          :class="{
            'text-black border-b-4 border-transparent hover:border-primary':
              !link.isButton,
            'px-4 py-3 bg-black text-white rounded-lg hover:opacity-90':
              link.isButton,
          }"
        >
          {{ link.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  data: () => ({
    logoUrl: require('assets/images/logos/site-logo--full.svg'),
    links: [
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
        href: 'https://www.google.com/',
        isButton: true,
      },
    ],
  }),
})
export default class Navbar extends Vue {}
</script>
