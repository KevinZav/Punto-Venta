<template>
    <div :class="Color">
        <img :src="imgAvatar" alt="">
        <span> {{namePerson}} </span>
    </div>
</template>

<script>
export default {
    name: 'PersonTag',
    props: {
        nameColor: {
            type: String,
            required: true
        },
        imgAvatar: {
            type: String,
            required: true
        },
        namePerson:{
            type: String,
            required: true
        }
    },
    computed: {
        Color(){
            return `tag tag-${this.nameColor}`
        }
    }
}

</script>

<style>
    .tag{
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 500;
        text-transform: uppercase;
    }
    .tag-blue{
        background-color: #3b82f6;
        color: #fff;
    }
    .tag-purple{
        background-color: #8b5cf6;
        color: #fff;
    }
    .tag-yellow{
        background-color: #f59e0b;
        color: #fff;
    }

</style>