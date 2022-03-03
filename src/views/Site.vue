<template>
  <div class="site" id="site">
    <Navbar @scroll-event="scrollTo" />
    <Background :height="'115vh'" />
    <section id="home">
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
    <section id="about">
      <div>
        <h2>{{ $t("site.about.about") }}</h2>
        <p>{{ $t("site.about.info_text") }}</p>
        <h3>{{ $t("site.about.heading") }}</h3>
        <h6>{{ $t("site.about.subheading") }}</h6>
        <div class="cards">
          <div class="card" v-for="item in $t('site.about.cards')" :key="item.id">
            <h5>{{item.title}}</h5>
            <ul>
              <li>{{ item.sub1 }}</li>
              <li>{{ item.sub2 }}</li>
              <li>{{ item.sub3 }}</li>
            </ul>
          </div>
        </div>
        <img src="../assets/love.gif" alt="Lustige Gif" id="lovegif">
        <div class="spinner" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
          <svg viewBox="0 0 100 100" width="100" height="100">>
            <defs>
              <path id="circle" d="
                  M 50, 50
                  m -37, 0
                  a 37,37 0 1,1 74,0
                  a 37,37 0 1,1 -74,0" />
            </defs>
            <text class="rotating-text">
              <textPath xlink:href="#circle">
                {{ $t("site.about.spinner") }}
              </textPath>
            </text>
          </svg>
          <img src="../assets/heart.svg" alt="heart">
        </div>
      </div>
    </section>
    <section id="projects">
      <div>
        <h2>
          {{ $t("site.projects.projects") }}
        </h2>
        <div class="projects-container">
          <div class="project">
            <div class="title">
              Webscroll<span>2022</span>
            </div>
            <div class="scrollContainer">
              <div class="scroll-item" v-for="index in 6" :key="index">
                <span>WEBSCROLL</span>
                <div class="icon-container">
                </div>
              </div>
            </div>
            <svg class="arrow" width="35" height="44" viewBox="0 0 35 44" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.5V23.5L14.5 37H33.5M33.5" stroke-linejoin="round" stroke="white" stroke-width="2" />
              <path d="M1 31M33.5 37L27.5 31M33.5 37L27.5 43" stroke-linejoin="round" stroke="white" stroke-width="2" />
            </svg>
            <p class="project-info">
              Ein internes Projekt welches sich den Webauftritt des Unternehmens widmet. 
            </p>
          </div>
          <div class="project">
            <div class="title">
              Atlas<span>2021</span>
            </div>
            <div class="scrollContainer">
              <div class="scroll-item" v-for="index in 6" :key="index">
                <span>ATLAS</span>
                <div class="icon-container">
                </div>
              </div>
            </div>
            <svg class="arrow" width="35" height="44" viewBox="0 0 35 44" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.5V23.5L14.5 37H33.5M33.5" stroke-linejoin="round" stroke="white" stroke-width="2" />
              <path d="M1 31M33.5 37L27.5 31M33.5 37L27.5 43" stroke-linejoin="round" stroke="white" stroke-width="2" />
            </svg>
            <p class="project-info">
              Ein internes Projekt welches sich den Webauftritt des Unternehmens widmet. 
            </p>
          </div>
        </div>

      </div>
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
    },
    data() {
      return {
        mouseX: 0,
        mouseY: 0,
        loveHover: false,
      }
    },
    mounted() {
      document.addEventListener('mousemove', this.mousemove);
    },
    methods: {
      moveGif(x, y) {
        let gif = document.querySelector('#lovegif');
        gif.style.top = y * 0.62 + 'px';
        gif.style.left = x * 0.9 + 'px';
      },

      mousemove(event) {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
        if (this.loveHover) {
          this.moveGif(event.clientX, event.clientY);
        }
      },
      mouseover() {
        let gif = document.querySelector('#lovegif');
        gif.style.display = 'block';
        this.loveHover = true;
      },
      mouseleave() {
        let gif = document.querySelector('#lovegif');
        gif.style.display = 'none';
        this.loveHover = false;
      },
      scrollTo(element) {
        this.$emit('scroll-event', document.querySelector(element).offsetTop);
      }
    }
  }
</script>

<style lang="scss">
  .site {
    position: relative;
    width: 100%;

    //Home
    #home {
      position: relative;
      width: 80%;
      min-height: 100vh;
      margin: 0 10%;
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 50% 50%;

      @media only screen and (max-width: 992px) {
        grid-template-rows: 45% 55%;
      }

      @media only screen and (max-width: 400px) {
        grid-template-rows: 42% 58%;
      }

      .heading-container {
        grid-column: 1 / 2;
        grid-row: 1 / 3;

        @media only screen and (max-width: 992px) {
          grid-column: 1 / 3;
          grid-row: 1 / 2;
        }

        div {
          position: relative;
          top: 25%;
          transform: translate(0 -50%);

          @media only screen and (max-width: 1600px) {
            top: 30%;
          }

          @media only screen and (max-width: 600px) {
            top: 30%;
          }
        }

        h1 {
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

          @media only screen and (max-width: 600px) {
            font-size: 8.5vw;
            line-height: 10vw;
          }
        }

        p {
          color: #E4E4E4;
          font-size: 2em;
          font-weight: 400;

          @media only screen and (max-width: 1600px) {
            font-size: 2vw;
          }

          @media only screen and (max-width: 992px) {
            font-size: 3vw;
          }

          @media only screen and (max-width: 600px) {
            font-size: 4.5vw;
          }
        }
      }

      .image-container {
        grid-column: 2 / 3;
        grid-row: 1 / 3;

        @media only screen and (max-width: 992px) {
          grid-column: 1 / 3;
          grid-row: 2 / 3;
        }

        .swiper {
          top: 25%;

          @media only screen and (max-width: 1600px) {
            top: 30%;
          }

          @media only screen and (max-width: 992px) {
            top: 0;
          }
        }
      }

      .cookies {
        position: absolute;
        top: 80%;
        left: 0;

        @media only screen and (max-width: 992px) {
          top: 90%;
          font-size: .9em;
        }

        @media only screen and (max-width: 400px) {
          top: 78%;
          font-size: .8em;
          width: 60%;
        }
      }

      .scroll {
        position: absolute;
        top: 90%;
        left: 0;

        @media only screen and (max-width: 992px) {
          display: none;
        }
      }
    }

    //About
    #about {
      position: relative;
      width: 80%;
      height: auto;
      background-color: #E4E4E4;
      padding: 3em 10%;
      border-radius: 5vw;
      margin: 7vh 0 0 0;
      overflow: hidden;

      div {
        position: relative;
        width: 100%;
      }

      h2 {
        font-weight: 600;
        font-size: 2.6em;
      }

      p {
        text-align: center;
        margin: 4em 0;
      }

      h3 {
        font-weight: 600;
        font-size: 2.2em;
        margin: 3em 0 0 0;
      }

      h6 {
        font-size: 1.2em;
        font-weight: 500;
        color: #434343;
        margin: 0;
      }

      .cards {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 4em 0;
        width: 100%;

        .card {

          h5 {
            font-size: 1.6em;
            font-weight: 500;
            margin: 0;
          }

          ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li {
              color: #434343;
            }
          }
        }
      }

      .spinner {
        position: absolute;
        right: 0%;
        top: 55%;
        width: 15%;
        max-width: 180px;
        border-radius: 50%;
        cursor: pointer;

        svg {
          position: relative;
          height: auto;
          transform-origin: center;
          width: 100%;
          font-size: .6em;
          letter-spacing: .53em;
          animation: spin 15s linear infinite;
          color: #000;

          .rotating-text {
            fill: #000;
            mix-blend-mode: difference;
          }
        }

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30%;
          height: auto;
          opacity: .9;
          transition-duration: .2s;
        }

        &:hover {
          img {
            width: 32%;
            opacity: 1;
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      }

      #lovegif {
        position: absolute;
        width: 7vw;
        height: auto;
        display: none;
        border-radius: .3vw;
        box-shadow: 10px 10px 0px rgb(41, 41, 41);
        z-index: 1;
        pointer-events: none
      }
    }

    //Projects
    #projects {
      position: relative;
      margin: 8em 0;
      color: #fff;
      overflow: hidden;

      h2 {
        font-weight: 600;
        font-size: 2.6em;
        margin-left: 10%;
      }

      .projects-container {
        position: relative;
        margin-top: 4em;
        top: 0;
        transition: top .4s;

        &:hover {
          top: -2em;
        }
      }

      .project {
        position: relative;
        cursor: pointer;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;

        &:nth-child(2n+0){
            .scrollContainer{
              animation: scroll-negativ 50s linear infinite;
            }
            
          }

        &:hover {
          border-top: 1px solid #fff;
          border-bottom: 1px solid #fff;

          .scrollContainer {
            margin: 2em 0 5em 0;
          }

          .title {
            opacity: 1;
          }

          .arrow {
            path {
              stroke-dashoffset: 0;
              stroke-dasharray: -78;
              transition-duration: .4s;

              &:nth-child(2){
                stroke-dashoffset: 0;
                stroke-dasharray: 16.9;
                transition-delay: .2s;
              }
            }
          }
          .project-info{
            opacity: 1;
            transition-delay: .1s;
            transition-duration: .4s;
          }
        }

        .title {
          position: absolute;
          top: 1.5em;
          right: 10%;
          font-weight: 700;
          opacity: 0;
          transition: opacity .4s;

          span {
            font-weight: 300;
            margin-left: .3em;
          }
        }

        .scrollContainer {
          width: auto;
          display: flex;
          flex-direction: row;
          animation: scroll 50s linear infinite;
          transition: margin .4s;

          .scroll-item {
            display: inline-block;
            font-size: 8em;
            font-weight: 700;
            display: flex;
            -webkit-text-stroke: 2px #DDDDDD;
            color: #000;

            .icon-container {
              display: inline-block;
              height: .8em;
              width: .8em;
              border-radius: 50%;
              border: 2px solid #DDDDDD;
              margin: auto .3em;
            }
          }
        }

        .arrow {
          position: absolute;
          left: 10%;
          bottom: 10%;

          path {
            transition-duration: .1s;
            stroke-dashoffset: 78;
            stroke-dasharray: 78;

            &:nth-child(2){
              stroke-dashoffset: 16.9;
              stroke-dasharray: 16.9;
            }
          }
        }

        .project-info{
          position: absolute;
          left: calc(10% + 4em);
          font-size: 1.1em;
          bottom: 2.5%;
          opacity: 0;
        }
      }

      @keyframes scroll {
        0% {
          transform: translate(0, 0);
        }

        100% {
          transform: translate(-100%, 0);
        }
      }

      @keyframes scroll-negativ {
        0% {
          transform: translate(-100%, 0);
        }

        100% {
          transform: translate(0, 0);
        }
      }
    }
  }
</style>