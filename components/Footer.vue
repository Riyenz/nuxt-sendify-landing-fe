<template>
  <div class="rounded-lg shadow-xl py-4 px-10 items-center justify-center mb-4">
    <div class="flex justify-between border-b border-secondary mb-6">
      <img
        class="mb-6"
        src="@/assets/images/logos/site-logo--full.svg"
        alt="Site Logo Full"
      />
      <div class="grid grid-flow-col gap-6 items-center mb-6">
        <p class="text-base font-semibold cursor-pointer">Follow Us</p>
        <img
          class="cursor-pointer"
          src="@/assets/images/logos/instagram-logo.svg"
          alt="Instagram Logo"
        />
        <img
          class="cursor-pointer"
          src="@/assets/images/logos/facebook-logo.svg"
          alt="Facebook Logo"
        />

        <img
          class="cursor-pointer"
          src="@/assets/images/logos/youtube-logo.svg"
          alt="Youtube Logo"
        />
      </div>
    </div>
    <div class="justify-center flex">
      <div class="grid gap-16 grid-flow-col items-center mb-10">
        <a
          v-for="link in links"
          :key="link.href"
          href="https://www.google.com/"
          class="block text-sm font-bold relative group"
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
    <p class="text-center text-sm text-gray-400">
      © 2020, Logoipsum All Rights Reserved.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  data: () => ({
    links: [
      {
        text: 'PRIVACY POLICY',
        href: '#privacy',
      },
      {
        text: 'TERMS OF USE',
        href: '#terms',
      },
      {
        text: 'HELP',
        href: '#help',
      },
    ],
  }),
})
export default class Footer extends Vue {}
</script>
