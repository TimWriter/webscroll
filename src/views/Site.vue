<template>
  <div class="site">
    <Navbar />
    <Background :height="'110%'"/>
    <section class="home">
      <div class="heading-container">
        <div>
          <h1>{{ $t("site.home.h1") }}</h1>
          <p>{{ $t("site.home.p") }}</p>
        </div>
      </div>
      <div class="image-container">
        <Swiper />
      </div>
      <Cookies />
      <Scroll />
    </section>
  </div>
</template>
<script>
import Background from '../components/Background.vue';
import Navbar from '../components/Navbar.vue';
import Cookies from '../components/Cookies.vue';
import Scroll from '../components/Scroll.vue';
import Swiper from '../components/Swiper.vue'; 

export default {
  name: 'Site',
  components: {
    Background,
    Navbar,
    Cookies,
    Scroll,
    Swiper
  },
  metaInfo() {
        return { 
            title: "Webscroll",
        }
    }
}
</script>

<style lang="scss">

.site{
  position: relative;
  width: 100%;

  .home{
    position: relative;
    width: 80%;
    min-height: 100vh;
    margin: 0 10%;
    display: grid;
    grid-template-columns:50% 50%; 
    grid-template-rows: 50% 50%; 

    .heading-container{
      grid-column: 1 / 2; 
      grid-row: 1 / 3;
      
      @media only screen and (max-width: 992px) {
            grid-column: 1 / 3; 
            grid-row: 1 / 2;
        }

      div{
        position: relative;
        top: 25%;
        transform: translate(0 -50%);

        @media only screen and (max-width: 1600px) {
            top: 30%;
        }
      }

      h1{
        font-size: 4.5em;
        color: #fff;
        margin: 0;
        line-height: 1.3em;

        @media only screen and (max-width: 1600px) {
            font-size: 4vw;
            line-height: 5vw;
        }

        @media only screen and (max-width: 992px) {
            font-size: 7vw;
            line-height: 8vw;
        }
      }

      p{
        color: #E4E4E4;
        font-size: 2em;
        font-weight: 400;

        @media only screen and (max-width: 1600px) {
            font-size: 2vw;
        }

        @media only screen and (max-width: 992px) {
            font-size: 3vw;
        }
      }
    }

    .image-container{
      grid-column:  2 / 3; 
      grid-row: 1 / 3; 

      @media only screen and (max-width: 992px) {
            grid-column: 1 / 3; 
            grid-row: 2 / 3;
        }

      .swiper{
        top: 25%;

        @media only screen and (max-width: 1600px) {
            top: 30%;
        }
      }
    }

    .cookies{
      position: absolute;
      top: 80%;
      left: 0;
    }

    .scroll{
      position: absolute;
      top: 90%;
      left: 0;
    }
  }
}
  
</style>
