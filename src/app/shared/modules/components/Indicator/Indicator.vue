<template>
    <span class="flex items-center">
        <span :class="assignClassColor"></span>
        <TypographyComponent :color="textColor" :text="text" :variant="'body-2'"/>
    </span>
</template>

<script>
import {indicatorsTypes} from '@/app/shared/constants/indicators-types';
import TypographyComponent from '@/app/shared/modules/components/Typography/Typography.vue'
export default {
    name: 'IndicatorComponent',
    components: {
        TypographyComponent,       
    },
    props:{
        variant: {
            type: String,
            required: true,
            validator (value) {
                return value.split(' ').every(item => indicatorsTypes.includes(item))
            }
        },
        text: {
            type: String,
        },
        textColor: {
            type: String,
        },    
    },
    computed: {
        assignClassColor () { 
            return `indicator indicator-${this.variant}`
        },   
    },
}
</script>