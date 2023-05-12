<template>
    <label for="" :style="style">{{text}}</label>
</template>

<script>
export default {
    props: {
        text: {
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
    computed: {
        style(){
            const { bgColor , textColor } = this
            return `
            background-color: ${ bgColor };
            color: ${ textColor };
            `
        },
    }
}
</script>

<style>
    label{
        border-radius: 4px;
        padding: 4px 7px;
        font-weight: 500;
    }
</style>