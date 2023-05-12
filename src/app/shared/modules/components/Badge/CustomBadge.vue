<template>
  <span :style="style">{{ text }}</span>
</template>

<script>
export default {
    props: {
        text:{
            type: String,
            required: true
        },
        bgColor: {
            type: String,
        },
        textColor: {
            type: String
        }
    },
    computed:{
        style(){
            const { bgColor , textColor } = this
            return `background-color:${ bgColor }; color: ${ textColor }`
        }
    }
}
</script>

<style>
    span{
        padding: 2px 10px 2px 10px;
        border-radius: 40px;
        font-weight: 600;
        font-size: 12px;
    }
</style>