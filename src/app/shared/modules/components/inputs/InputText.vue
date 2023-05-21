<template>
  <div :class="`relative input-text-floating ${status || variant}`">
    <input type="text" id="floating_outlined" class="peer" :placeholder="placeholder" v-model="value" />
    <label for="floating_outlined"
      class="peer-focus:activate peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2">
      {{ labelText }}
    </label>
  </div>
</template>

<script>
import { inputStatus }  from '@/app/shared/constants/input'

export default {
  name: 'InputText',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    labelText: {
      type: String,
      required: true
    },
    placeholder: {
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
      status: null
    }
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
    async modelValue(value) {
      if (!this.setVariantByStatus || !this.validators) return

      const { SUCCESS, ERROR, PENDING } = inputStatus

      this.status = PENDING

      const [validators, asyncValidators] = this.validators
      const evalValidators = validators ? this.evalValidator(validators, value) : true
      const evalAsyncValidators = asyncValidators ? await this.evalValidatorAsync(asyncValidators, value) : true
      
      this.status = evalValidators && evalAsyncValidators ? SUCCESS : ERROR
    }
  }
}
</script>

<style></style>