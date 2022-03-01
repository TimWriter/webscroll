<template>
  <div class="swiper">
    <div class="images">
      <img class="image" :style="{top: top + 'px'}" src="../assets/test.png" alt="">
    </div>
    <a href="" class="projects">
      <span>{{ $t("nav.project") }}</span>
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
    transform: translate(30px, 0);

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
    top: 15vw;
    transition-duration: .4s;

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
    }

    &:hover{
      background-color: #fff;
      height: 8vw;
      width: 8vw;
      left: calc(25% - 0.5vw);
      top: 14.5vw;
    }
  }


}
</style>