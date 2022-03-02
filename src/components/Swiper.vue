<template>
  <div class="swiper">
    <div class="images">
      <img class="image" :style="{top: top + 'px'}" src="../assets/test.png" alt="">
    </div>
    <a href="" class="projects">
      <div class="link-container">
        <span class="text-1">{{ $t("nav.project") }}</span>
        <span class="text-2">{{ $t("nav.project") }}</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    title: 'Swiper',
    data(){
      return{
        viewport_height: '',
        image_height: '',
        img: '',
        ratio: '',
        top: 30,
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll () {
        this.img = document.querySelectorAll('.images .image')[0];
        this.image_height = this.img.clientHeight;
        this.viewport_height = document.documentElement.clientHeight;
        this.ratio = this.image_height / this.viewport_height;
        this.top = 30 - (this.ratio / 3 * window.scrollY);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;



  .images{
    position: relative;
    height: 100%;
    width: 80%;
    height: 21vw;
    clip-path: inset(30px 30px 30px 30px round 100px 45px 100px 60px);
    transform: translate(30px, -30px);

    @media only screen and (max-width: 1600px) {
        width: 90%;
        height: 23vw;
        clip-path: inset(30px 30px 0px 30px round 80px 35px 80px 50px);
    }

    @media only screen and (max-width: 992px) {
            transform: translate(0, -30px);
            height: 35vw;
            clip-path: inset(30px 30px 0px 30px round 100px 55px 100px 70px);
    }

    @media only screen and (max-width: 600px) {
        top: 5vw;
        width: 100%;
        height: 55vw;
        clip-path: inset(30px 10px 10px 10px round 100px 55px 100px 70px);
    }

    @media only screen and (max-width: 400px) {
        top: 0;
        height: 60vw;
    }

    img{
      position: absolute;
      right: 0;
      top: 30px;
      width: 100%;
      height: auto;

    }
  }

  .projects{
    position: absolute;
    font-size: 1vw;
    background-color: #e4e4e4;
    height: 7vw;
    width: 7vw;
    border-radius: 50%;
    left: 25%;
    top: 12.5vw;
    transition-duration: .5s;

    @media only screen and (max-width: 1600px) {
        left: 16%;
        top: 14vw;
        height: 9vw;
        width: 9vw;
        font-size: 1.2vw;
    }

    @media only screen and (max-width: 992px) {
        font-size: 1em;
        height: 7em;
        width: 7em;
        left: 7%;
        top: 24vw;
    }

    @media only screen and (max-width: 600px) {
        font-size: .8em;
        left: 0%;
        top: 40vw;
    }

    @media only screen and (max-width: 400px) {
        font-size: .8em;
        left: 0%;
        top: 30vw;
    }

    &:hover{
      background-color: #fff;
      height: 8vw;
      width: 8vw;
      left: calc(25% - 0.5vw);
      top: 12vw;

      @media only screen and (max-width: 1600px) {
          left: 15%;
          top: 14.5vw;
          height: 10vw;
          width: 10vw;
      }

      @media only screen and (max-width: 992px) {
          left: 15%;
          top: 14.5vw;
          height: 8em;
          width: 8em;
          left: calc(7% - .5em);
          top: calc(24vw - .5em);
      }

      @media only screen and (max-width: 600px) {
        left: calc(0% - .5em);
        top: calc(40vw - .5em);
      }

      @media only screen and (max-width: 400px) {
        left: calc(0% - .5em);
        top: calc(30vw - .5em);
      }

      .text-1{
        transform: translate(-50%, -200%) rotate(20deg);
      }
      .text-2{
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }

    .link-container{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 5vw;
      height: 1.6vw;
      overflow: hidden;

      @media only screen and (max-width: 1600px) {
          height: 1.5vw;
          width: 6vw;
      }

      @media only screen and (max-width: 992px) {
        width: 7em;
        height: 1.6em;
      }

    }

    span{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #000;
      text-decoration: none;
      text-transform: uppercase;
      -webkit-user-select: none; /* Safari */        
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
      transition: transform 0.5s;
    }

    .text-1{
      transform-origin: right center;
    }

    .text-2{
      transform: translate(-50%, 100%) rotate(20deg);
      transform-origin: left center;
    }
  }


}
</style>