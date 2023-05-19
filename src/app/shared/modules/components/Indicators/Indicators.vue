<template>
        <span class="flex items-center text-sm font-medium text-gray-900 dark:text-white">
            <span :class="assignClassColor">
        </span>    
            <tag-typography v-if="!!text" :class="assignClass" :variant="variant">{{ text }}</tag-typography>
            <tag-typography v-else :class="assignClass" :variant="variant"><slot></slot></tag-typography>
        </span>     
</template>

<script>

import { typographyTags } from '@/app/shared/constants'
import TagTypography from '@/app/shared/modules/components/Typography/TagTypography.vue'
import {indicatorsTypes} from '@/app/shared/constants/indicators-types';

export default {
    name: 'IndicatorsComponent',
    components: {
        TagTypography,       
    },
    props:{
        variantColor: {
            type: String,
            required: true,
            validator (value) {
                return value.split(' ').every(item => indicatorsTypes.includes(item))
            }
        },
        text: {
            type: String,
        },
        variant: {
            type: String,
            default: 'h1',
            validator (value) {
                return typographyTags.includes(value)
            }
        },
        fontBold: {
            type: Boolean,
            default: false
        },
            color: {
            type: String,
        },
        extraStyles: {
            type: String,
            default: ''
        }
        
    },
    computed: {
        assignClassColor () { 
            return `indicator indicator-${this.variantColor}`
        },
        assignClass () {
            const { color, extraStyles, fontBold} = this

            return `${extraStyles} ${color ? `text-${color}` : ''} ${fontBold ? 'bold' : ''}`
        }
    },
}
</script>