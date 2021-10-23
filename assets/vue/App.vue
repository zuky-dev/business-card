<template>
    <div id="bg">
        <router-view/>
    </div>
</template>

<style lang="scss" scoped>
    #bg{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url("/assets/img/bg.png");
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>

<script>
    export default {
        components:{
        },
        data () {
            return {
            }
        },
        computed: {
        },
        methods:{
        }
    }
</script>