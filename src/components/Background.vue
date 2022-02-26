<template>
  <div class="background" :style="style">
      <img id="ellipse-top" class="hide-t" src="../assets/Ellipse_Top.png" alt="ellipse">
      <img id="ellipse-bottom" class="hide-b" src="../assets/Ellipse_Bottom.png" alt="ellipse">
      <div class="gradient"></div>
      <div class="blur"></div>
  </div>
</template>

<script>
export default {
    name: 'Background',
    props: ['height'],
    computed: {
      style () {
        return 'height: ' + this.height;
      }
    },
    mounted(){
        const top = document.querySelector('#ellipse-top');
        const bottom = document.querySelector('#ellipse-bottom');

        setTimeout(() =>{
            top.classList.toggle('hide-t');
            bottom.classList.toggle('hide-b');
        }, 100)
        
    }
}
</script>

<style lang="scss" scoped>
    .background{
        position: absolute;
        width: 100%;
        background-color: #000;
        overflow: hidden;
    }

    .hide-t{
        top: -100% !important;
        right: -100% !important;
        animation: none !important;
    }

    #ellipse-top{
        position: absolute;
        right: -5%;
        top: -10%;
        animation: top 20s infinite;
        transition-duration: 2s;

        @media only screen and (max-width: 992px) {
            width: 50%;
            height: auto;
        }

        @media only screen and (max-width: 600px) {
            width: 110%;
            height: auto;
            top: -15%;
            right: -60%;
        }
    }

    @keyframes top {
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(-6%, 2%) scale(120%);
        }
        100%{
            transform: translate(0, 0);
        }
    }

    .hide-b{
        top: 100% !important;
        left: -100% !important;
        animation: none !important;
    }

    #ellipse-bottom{
        position: absolute;
        left: -5%;
        top: 50%;
        animation: top 12s infinite;
        transition-duration: 2s;

        @media only screen and (max-width: 992px) {
            width: 65%;
            height: auto;
            top: 60%;
        }

        @media only screen and (max-width: 600px) {
            width: 110%;
            height: auto;
            top: 45%;
            left: -60%;
        }
    }

    @keyframes bottom {
        0%{
            transform: translate(0, 0);
        }
        25%{
            transform: translate(4%, -10%) scale(120%);
        }
        50%{
            transform: translate(0, 0) scale(100%);
        }
        75%{
            transform: translate(20%, -10%) scale(100%);            
        }
        100%{
            transform: translate(0, 0) scale(100%);    
        }
    }

    .gradient{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.1;
        background: rgb(255,255,255);
        background: linear-gradient(141deg, rgba(255,255,255,0.4) 0%, rgba(196,196,196,0.2) 100%);
    }

    .blur{
        position: absolute;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(65px);
    }
</style>>
