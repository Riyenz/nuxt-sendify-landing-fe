<template>
  <div class="px-4">
    <div
      class="rounded-lg shadow-xl py-4 px-10 items-center justify-center mb-4"
    >
      <div class="md:flex justify-between border-b border-secondary mb-6">
        <div class="flex justify-center">
          <img
            class="mb-6"
            src="@/assets/images/logos/site-logo--full.svg"
            alt="Site Logo Full"
          />
        </div>
        <div class="grid grid-flow-col gap-6 items-center mb-6">
          <p class="text-base font-semibold cursor-pointer">Follow Us</p>
          <a
            v-if="socials.instagram"
            :href="socials.instagram"
            target="_blank"
            class="
              transform
              transition
              duration-150
              ease-in-out
              hover:-translate-y-0.5 hover:scale-105
            "
          >
            <img
              src="@/assets/images/logos/instagram-logo.svg"
              alt="Instagram Logo"
            />
          </a>
          <a
            v-if="socials.facebook"
            :href="socials.facebook"
            target="_blank"
            class="
              transform
              transition
              duration-150
              ease-in-out
              hover:-translate-y-0.5 hover:scale-105
            "
          >
            <img
              class="cursor-pointer"
              src="@/assets/images/logos/facebook-logo.svg"
              alt="Facebook Logo"
            />
          </a>
          <a
            v-if="socials.youtube"
            :href="socials.youtube"
            target="_blank"
            class="
              transform
              transition
              duration-150
              ease-in-out
              hover:-translate-y-0.5 hover:scale-105
            "
          >
            <img
              class="cursor-pointer"
              src="@/assets/images/logos/youtube-logo.svg"
              alt="Youtube Logo"
            />
          </a>
        </div>
      </div>
      <div class="justify-center flex">
        <div
          class="
            grid
            md:gap-16 md:grid-flow-col
            grid-cols-2
            gap-3
            items-center
            mb-10
          "
        >
          <AppLink v-for="link in links" :key="link.text" :link="link" />
        </div>
      </div>
      <p class="text-center text-sm text-gray-400">
        © 2020, Logoipsum All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ISocials } from '~/interfaces/app.interface'
import { ELinkTypes, ILink } from '~/interfaces/link.interface'

@Component({})
export default class Footer extends Vue {
  @Prop({ type: Object, default: () => ({}) }) socials!: ISocials

  links: ILink[] = [
    {
      text: 'PRIVACY POLICY',
      href: 'privacy',
      type: ELinkTypes.INTERNAL,
    },
    {
      text: 'TERMS OF USE',
      href: 'terms',
      type: ELinkTypes.INTERNAL,
    },
    {
      text: 'HELP',
      href: 'help',
      type: ELinkTypes.INTERNAL,
    },
  ]
}
</script>
