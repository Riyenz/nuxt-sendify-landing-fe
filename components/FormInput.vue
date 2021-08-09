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
      v-if="tag === 'input'"
      :id="identifier"
      v-model="inputVal"
      :type="type"
      :name="identifier"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="classBind"
      :max="max"
    />
    <textarea
      v-else-if="tag === 'textarea'"
      :id="identifier"
      v-model="inputVal"
      :type="type"
      :name="identifier"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="classBind"
      style="resize: none"
    />
    <div class="input-box__errors h-5">
      <small
        v-for="(message, index) in errMessage"
        :key="index"
        class="text-xs text-red-500 block"
      >
        {{ message }}
      </small>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { template, templateSettings } from 'lodash'
import { VALIDATION_MESSAGES } from '~/constants/validation-messages.const'
import { IValidation } from '~/interfaces/validation.interface'

templateSettings.interpolate = /{{([\s\S]+?)}}/g

@Component({})
export default class FormInput extends Vue {
  @Prop() readonly label!: string
  @Prop() readonly name!: string
  @Prop() readonly placeholder!: string
  @Prop() readonly type!: string
  @Prop() readonly disabled!: boolean
  @Prop() readonly value!: string
  @Prop() readonly validations!: IValidation
  @Prop({ default: 'input' }) readonly tag!: string
  @Prop() readonly max!: string

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
      'w-full bg-white rounded-xl border focus:border-black outline-none text-gray-700 py-2 px-3 mb-1':
        true,
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
