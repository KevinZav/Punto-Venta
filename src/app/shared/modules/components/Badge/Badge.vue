<template>
  <span :class="assignClass"> <typography :variant="'body-2'" :text="text"/> </span>
</template>

<script>
import { badgesTypes } from '@/app/shared/constants/badges-types';
import Typography from '@/app/shared/modules/components/Typography/Typography.vue';
export default {
    name: 'BadgeComponent',
    components: {
        Typography
    },
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