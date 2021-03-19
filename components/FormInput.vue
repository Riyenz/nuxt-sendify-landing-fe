<template>
  <div class="relative input-box">
    <label :for="identifier" class="leading-7 text-sm text-gray-600">
      {{ label }}
      <span
        v-if="validations && validations.$params.required"
        class="text-red-500"
      >
        *
      </span>
    </label>
    <input
      :id="identifier"
      v-model="inputVal"
      :type="inputType"
      :name="identifier"
      :placeholder="placeholder"
      :disabled="disabled"
      class="w-full bg-white rounded-xl border focus:border-black outline-none text-gray-700 py-2 px-3 mb-1"
      :class="classBind"
    />
    <div
      v-if="type === 'password'"
      class="absolute inset-y-0 right-0 flex items-center px-3 pt-2"
    >
      <input
        id="passwordToggleCheckbox"
        class="hidden"
        type="checkbox"
        v-model="isPasswordShown"
      />
      <label
        class="text-sm text-gray-600 cursor-pointer font-semibold"
        for="passwordToggleCheckbox"
      >
        <eye-icon
          v-if="isPasswordShown"
          size="1.5x"
          class="custom-class"
        ></eye-icon>
        <eye-off-icon size="1.5x" class="custom-class" v-else></eye-off-icon>
      </label>
    </div>
    <small
      v-for="(message, index) in errMessage"
      :key="index"
      class="text-xs text-red-500 block"
    >
      {{ message }}
    </small>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { EyeIcon, EyeOffIcon } from 'vue-feather-icons'
import { template, templateSettings } from 'lodash'
import { VALIDATION_MESSAGES } from '~/constants/validation-messages.const'
import { IValidation } from '~/interfaces/validation.interface'

templateSettings.interpolate = /{{([\s\S]+?)}}/g

@Component({
  components: {
    EyeIcon,
    EyeOffIcon,
  },
})
export default class FormInput extends Vue {
  @Prop() readonly label!: string
  @Prop() readonly name!: string
  @Prop() readonly placeholder!: string
  @Prop() readonly type!: string
  @Prop() readonly disabled!: boolean
  @Prop() readonly value!: string
  @Prop() readonly validations!: IValidation

  isPasswordShown = false

  get inputType() {
    switch (this.type) {
      case 'password':
        return this.isPasswordShown ? 'text' : 'password'
      default:
        return this.type
    }
  }

  get identifier(): string {
    return this.name
  }

  get inputVal(): string {
    return this.value
  }

  set inputVal(value: string) {
    this.$emit('input', value)
  }

  get errMessage(): string[] {
    if (!this.validations || !this.validations.$dirty) return []

    return Object.keys(this.validations.$params).reduce((errors, validator) => {
      if (!this.validations[validator]) {
        const compiled = template(VALIDATION_MESSAGES[validator])
        // @ts-ignore
        errors.push(compiled(this.validations.$params[validator]))
      }
      return errors
    }, [])
  }

  get classBind(): { [key: string]: boolean } {
    return {
      'border-red-500': this.isInputInvalid(),
      'border-gray-300': !this.isInputInvalid(),
    }
  }

  isInputInvalid = (): boolean =>
    !!this.validations &&
    !!this.validations.$dirty &&
    !!this.validations.$invalid
}
</script>

<style lang="scss" scoped>
.input-box {
  height: 90px;
}
</style>
