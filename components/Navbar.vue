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
    <div class="flex items-center justify-between w-full max-w-1200px relative">
      <img
        class="relative z-40"
        src="@/assets/images/logos/site-logo--full.svg"
        alt=""
      />

      <div class="block md:hidden relative z-40" @click="onMenuToggle">
        <img
          class="transition duration-300 ease-in-out"
          :class="{
            'opacity-0 rotate-90': isMenuOpen,
          }"
          src="@/assets/images/icons/menu-icon.svg"
          alt="Menu Icon"
        />
        <img
          class="transition duration-300 ease-in-out absolute top-0 right-0"
          :class="{
            'opacity-100 rotate-0': isMenuOpen,
            'opacity-0 rotate-90': !isMenuOpen,
          }"
          src="@/assets/images/icons/close-icon.svg"
          alt="Close Icon"
        />
      </div>

      <div
        class="
          gap-10
          grid-flow-col
          items-center
          md:grid md:relative md:h-auto md:p-0 md:w-auto
          flex flex-col
          px-4
          pb-6
          pt-40
          fixed
          z-30
          top-0
          left-0
          w-full
          bg-white
          h-screen
          text-center
          transform
          transition
          duration-300
          ease-in-out
        "
        :class="{
          '-translate-y-full md:translate-y-0': !isMenuOpen,
          'translate-y-0': isMenuOpen,
        }"
      >
        <AppLink v-for="link in links" :key="link.text" :link="link" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ELinkTypes, ILink } from '~/interfaces/link.interface'

@Component({})
export default class Navbar extends Vue {
  @Prop({ type: String, default: '/' }) installUrl!: string
  @Prop({ type: String, default: '/' }) blogUrl!: string

  links: ILink[] = [
    {
      text: 'Features',
      href: '#features',
      type: ELinkTypes.SECTION,
    },
    {
      text: 'Pricing',
      href: '#pricing',
      type: ELinkTypes.SECTION,
    },
    {
      text: 'Contact US',
      href: '#contact',
      type: ELinkTypes.SECTION,
    },
    {
      text: 'Blog',
      href: this.blogUrl,
      type: ELinkTypes.EXTERNAL,
    },
    {
      text: 'Start Free',
      href: this.installUrl,
      isButton: true,
      type: ELinkTypes.EXTERNAL,
    },
  ]

  isMenuOpen = false

  onMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
</script>
