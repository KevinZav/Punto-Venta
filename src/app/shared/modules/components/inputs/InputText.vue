<template>
  <div :class="`relative rounded-lg input-text-floating ${touched ? (status || variant) : variant}`">
    <input
      :type="type"
      :id="idInput"
      class="peer"
      :placeholder="placeholder"
      v-model="value"
      @focusout="touched = true"/>
    <label :for="idInput"
      class="peer-focus:activate peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2">
      {{ labelText }}
    </label>
  </div>
  <span v-if="!valid && touched" :class="`text-red-${lightText}`">
    <typography :variant="'metadata'" :text="messageHelp"></typography>
  </span>
</template>

<script>
import { inputStatus }  from '@/app/shared/constants/input'
import uniqud from 'uniqid'
import Typography from '../Typography/Typography.vue'

export default {
  name: 'InputText',
  components: {
    Typography
  },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator (value) {
        return ['text', 'password'].includes(value)
      }
    },
    labelText: {
      type: String,
      required: true
    },
    lightText: {
      type: Number,
      default: 900,
    },
    placeholder: {
      type: String
    },
    messageHelp: {
      type: String
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'purple', 'red', 'green', 'yellow'].includes(value)
      }
    },
    validators: {
      type: Array
    },
    setVariantByStatus: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  data () {
    return {
      status: null,
      idInput: null,
      touched: false,
      valid: true
    }
  },
  mounted () {
    this.idInput = uniqud()
  },
  methods: {
    evalValidator (validator, value) {
      if (typeof validator === 'function') {
        return validator(value)
      } else {
        return validator.every(item => item(value))
      }
    },
    async evalValidatorAsync (validator, value) {
      if (typeof validator === 'function') {
        return await validator(value)
      } else {
        const allValidators = await Promise.all(validator.map(item => item(value)))

        return allValidators.every(item => item)
      }
    },
    async evalAllValidators (value) {
      if (!this.setVariantByStatus || !this.validators) return

      const { ERROR, PENDING } = inputStatus

      this.status = PENDING

      const [validators, asyncValidators] = this.validators
      const evalValidators = validators ? this.evalValidator(validators, value) : true
      const evalAsyncValidators = asyncValidators ? await this.evalValidatorAsync(asyncValidators, value) : true

      this.status = evalValidators && evalAsyncValidators ? this.variant : ERROR
      this.valid = evalValidators && evalAsyncValidators
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  watch: {
    async modelValue (value) {
      await this.evalAllValidators(value)
    },
    async touched (value) {
      await this.evalAllValidators(value)
    }
  }
}
</script>

<style></style>