<template>
  <div class="swiper">
    <div class="images">
      <img src="../assets/Carousel_1.png" alt="">
    </div>
    <a href="" class="projects">
      <span>{{ $t("nav.project") }}</span>
    </a>
  </div>
</template>

<script>
  export default {
    title: 'Swiper',
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
    width: 100%;

    img{
      position: absolute;
      width: 70%;
      right: 0;
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
    transition-duration: .2s;

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
    }
  }


}
</style>