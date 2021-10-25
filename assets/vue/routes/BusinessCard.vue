<template>
    <div class="w-full h-screen p-10 flex justify-center items-center">
        <div id="card" class="w-192 h-96">
            <div id="inner" class="w-full h-full relative">
                <div id="front" class="absolute top-0 left-0 w-full h-full bg-white rounded-lg border-gray-300 border-4 flex justify-center items-center">
                    <h1>Z</h1>
                </div>
                <div id="back" class="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-lg"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #card{
        perspective: 3000px;
        filter: drop-shadow(1rem 1rem 1rem rgba(0,0,0,.8));
        transition: transform 1s ease-in-out 2s, filter 1s ease-in-out 2s;

        &:hover{
            transform: scale(1.05);
            filter: drop-shadow(7rem 7rem 2rem rgba(0,0,0,.4));
            transition: transform 1s ease-in-out, filter 1s ease-in-out;
        }

        &:hover #inner{
            transform: rotateY(180deg);
            transition: transform 2s ease-in-out 1s;
        }

        #inner{
            transition: transform 2s ease-in-out;
            transform-style: preserve-3d;

            #front, #back{
                backface-visibility: hidden;
            }

            #back{
                transform: rotateY(180deg);
            }
        }
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