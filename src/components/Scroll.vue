<template>
    <div class="scroll">
        <span class="dot"></span>
        <span class="border"></span>
    </div>
</template>

<script>
export default {
    name: 'Scroll'
}
</script>

<style lang="scss" scoped>
    .scroll{
        height: 3em;
        width: 1.6em;
        border: 2px solid #E4E4E4;
        border-radius: 1em;


        .dot{
            position: absolute;
            left: 50%;
            top: 20%;
            width: .5em;
            height: .5em;
            border-radius: .25em;
            background-color: #e4e4e48a;
            transform: translate(-50%, 0);
            animation: dot 2s infinite;

        }

        @keyframes dot {
            0% {
                width: .5em;
                height: .5em;
            }

            25% {
                height: 1.8em;
                top: 20%;
            }

            50%{
                height: .5em;
                top: 2em;
            }

            100% {
                 top: 20%;   
            }
        }
    }
</style>>
