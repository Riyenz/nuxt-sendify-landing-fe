<template>
  <component
    :is="element"
    :href="link.href"
    :to="link.href"
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
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ELinkTypes, ILink, INITIAL_LINK } from '~/interfaces/link.interface'

@Component({})
export default class Footer extends Vue {
  @Prop({ type: Object, default: INITIAL_LINK }) link!: ILink

  get element() {
    return this.link.type === ELinkTypes.INTERNAL ? 'NuxtLink' : 'a'
  }
}
</script>
