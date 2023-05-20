<template>
  <span :class="assignClass">{{ text }}</span>
</template>

<script>
import { badgesTypes } from '@/app/shared/constants/badges-types';
export default {
    name: 'BadgeComponent',
    props:{
        text:{
            type: String,
            required: true
        },
        variant: {
            type: String,
            required: true,
            validator (value) {
                return value.split(' ').every(item => badgesTypes.includes(item))
            }
        },
        extraClass: {
            type: String
        }
    },
    computed: {
        assignClass(){
            const { variant , extraClass } = this;
            return `badge badge-${variant} ${extraClass}`;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>