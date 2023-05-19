<template>
        <span class="flex items-center text-sm font-medium text-gray-900 dark:text-white"><span :class="assignClass"></span>{{text}}</span>     
</template>

<script>
import {indicatorsTypes} from '@/app/shared/constants/indicators-types';
export default {
    name: 'IndicatorsComponent',
    props:{
        variant: {
            type: String,
            required: true,
            validator (value) {
                return value.split(' ').every(item => indicatorsTypes.includes(item))
            }
        },
        text: {
            type: String
        },
    },
    computed: {
        assignClass () { 
            return `indicator indicator-${this.variant}`
        }
    },
    mounted() {
        console.log(this.assignClass)
    },
}
</script>