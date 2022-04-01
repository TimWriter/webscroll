<template>
  <div class="site" id="site">
    <Background :height="'115vh'" />
    <section id="home">
      <div class="heading-container">
        <div>
          <h1 data-animate="bottom">{{ $t("site.home.h1") }}</h1>
          <p data-animate="bottom">{{ $t("site.home.p") }}</p>
        </div>
      </div>
      <div class="image-container">
        <Swiper @scroll-event="scrollTo" />
      </div>
      <Cookies />
      <Scroll />
    </section>
    <section id="services">
      <div>
        <h2>{{ $t("site.services.services") }}</h2>
        <div class="text">
          <p v-html="$t('site.services.info_text')"></p>
          <LinkButton :to="'/contact'">
            {{ $t("site.services.request") }}
          </LinkButton>
          <div class="spinner" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
            <svg viewBox="0 0 100 100" width="100" height="100">
              >
              <defs>
                <path id="circle" d="
                  M 50, 50
                  m -37, 0
                  a 37,37 0 1,1 74,0
                  a 37,37 0 1,1 -74,0" />
              </defs>
              <text class="rotating-text">
                <textPath xlink:href="#circle">
                  {{ $t("site.services.spinner") }}
                </textPath>
              </text>
            </svg>
            <img src="../assets/heart.svg" alt="heart" />
          </div>
          <img src="../assets/love.gif" alt="Lustige Gif" id="lovegif" />
        </div>
        <div class="products">
          <div class="title">
            <h3>{{ $t("site.services.products_heading") }}</h3>
            <h6>{{ $t("site.services.products_subheading") }}</h6>
          </div>
          <Products />
          <p class="price-info">{{ $t("site.services.price_info") }}</p>
        </div>
        <div class="services">
          <h3>{{ $t("site.services.heading") }}</h3>
          <h6>{{ $t("site.services.subheading") }}</h6>
          <div class="cards">
            <div class="card" v-for="item in $t('site.services.cards')" :key="item.id">
              <div :id="item.title.toLowerCase() + '-icon'"></div>
              <lottie-player :src="item.lottie" background="transparent" speed="1" loop autoplay></lottie-player>
              <h5>{{ item.title }}</h5>
              <ul>
                <li>{{ item.sub1 }}</li>
                <li>{{ item.sub2 }}</li>
                <li>{{ item.sub3 }}</li>
              </ul>
            </div>
          </div>
          <LinkButton :to="'/contact'" :center="true">
            {{ $t("site.services.cardsButton") }}
          </LinkButton>
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
            <div class="title">Webscroll<span>2022</span></div>
            <div class="scrollContainer">
              <div class="scroll-item" v-for="index in 6" :key="index">
                <span>WEBSCROLL</span>
                <div class="icon-container">
                  <lottie-player
                  src="https://assets5.lottiefiles.com/packages/lf20_lx6oh1np.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  class="icon"
                ></lottie-player>
                </div>
              </div>
            </div>
            <svg class="arrow" width="35" height="44" viewBox="0 0 35 44" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0V23L14.5 36.5H33.5" stroke-linejoin="round" stroke="white" stroke-width="2" />
              <path d="M1 31M33.5 37L27.5 31M33.5 37L27.5 43" stroke-linejoin="round" stroke="white" stroke-width="2" />
            </svg>
            <p class="project-info">
              Ein internes Projekt welches sich dem Webauftritt des Unternehmens
              widmet.
            </p>
          </div>
          <div class="project">
            <div class="title">Atlas<span>2021</span></div>
            <div class="scrollContainer">
              <div class="scroll-item" v-for="index in 6" :key="index">
                <span>ATLAS</span>
                <div class="icon-container"></div>
              </div>
            </div>
            <svg class="arrow" width="35" height="44" viewBox="0 0 35 44" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0V23L14.5 36.5H33.5" stroke-linejoin="round" stroke="white" stroke-width="2" />
              <path d="M1 31M33.5 37L27.5 31M33.5 37L27.5 43" stroke-linejoin="round" stroke="white" stroke-width="2" />
            </svg>
            <p class="project-info">
              Ein internes Projekt welches sich dem Webauftritt des Unternehmens
              widmet.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="text-container">
        <p id="contact-text">{{ $t("site.contact.text") }}</p>
      </div>
      <div class="button" v-on:mouseover="mouseoverContact" v-on:mouseleave="mouseleaveContact" @click="clickContact">
        <div class="text">
          <div v-for="item in $t('site.contact.button').split(' ')" :key="item">
            <span>{{ item }}</span>
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="hand">
        <svg id="hand-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-hand-index-thumb" viewBox="0 0 16 16">
          <path
            d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z" />
        </svg>
      </div>
      <Footer class="footer" :background="false" />
    </section>
  </div>
</template>
<script>
  import Background from "../components/Background.vue";
  import Cookies from "../components/Cookies.vue";
  import Scroll from "../components/Scroll.vue";
  import Swiper from "../components/Swiper.vue";
  import Products from "../components/Products.vue";
  import Footer from "../components/Footer.vue";
  import LinkButton from "../components/Link_Button.vue";

  export default {
    name: "Site",
    components: {
      Background,
      Cookies,
      Scroll,
      Swiper,
      Products,
      Footer,
      LinkButton
    },
    props: ["scrollBar"],
    metaInfo() {
      return {
        title: "Webscroll",
      };
    },
    data() {
      return {
        mouseX: 0,
        mouseY: 0,
        loveHover: false,
      };
    },
    mounted() {
      document.addEventListener("mousemove", this.mousemove);
    },
    methods: {
      scrollTo(element) {
        this.$emit("scroll-event", element);
      },
      
      moveGif(x, y) {
        let gif = document.querySelector("#lovegif");
        gif.style.top = y * 0.3 - 100 + "px";
        gif.style.left = x * 0.75 + "px";
      },

      mousemove(event) {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
        if (this.loveHover) {
          this.moveGif(event.clientX, event.clientY);
        }
      },
      mouseover() {
        let gif = document.querySelector("#lovegif");
        gif.style.display = "block";
        this.loveHover = true;
      },
      mouseleave() {
        let gif = document.querySelector("#lovegif");
        gif.style.display = "none";
        this.loveHover = false;
      },
      mouseoverContact() {
        let text = document.querySelector("#contact-text");
        let hand = document.querySelector(".hand");
        text.classList.add("hover");
        hand.classList.add("hover");
      },
      mouseleaveContact() {
        let text = document.querySelector("#contact-text");
        let hand = document.querySelector(".hand");
        text.classList.remove("hover");
        hand.classList.remove("hover");
      },
      clickContact() {
        let hand = document.querySelector(".hand");
        let button = document.querySelector(".button");
        hand.classList.add("click");
        button.classList.add("btn-click");
        setTimeout(() => {
          this.$router.push("/contact");
        }, 800);
      },
    },
  };
</script>

<style lang="scss">
  .site {
    position: relative;
    width: 100%;
    scroll-behavior: smooth;

    @media only screen and (max-width: 400px) {
      font-size: 14px;
    }

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
            font-size: 8vw;
            line-height: 10vw;
            margin-top: 1em;
          }
        }

        p {
          color: #e4e4e4;
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
            margin: 0.4em 0 0 0;
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
          font-size: 0.9em;
        }

        @media only screen and (max-width: 400px) {
          top: 78%;
          font-size: 0.8em;
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
    #services {
      position: relative;
      width: 80%;
      height: auto;
      background-color: #eeeeee;
      padding: 5em 10%;
      border-radius: 5vw;
      margin: 7vh 0 0 0;
      overflow: hidden;

      @media only screen and (max-width: 992px) {
        border-radius: 10vw;
      }

      @media only screen and (max-width: 600px) {
        padding: 2em 10% 10vw 10%;
        font-size: 12px;
      }

      div {
        position: relative;
        width: 100%;
      }

      h2 {
        font-weight: 600;
        font-size: 2.6em;

        @media only screen and (max-width: 992px) {
          font-size: 2.6em;
        }
      }

      .text {
        position: relative;
        background-color: #fff;
        width: 60%;
        padding: 7%;
        border-radius: .6em;
        margin: 5em auto;

        @media only screen and (max-width: 992px) {
          width: 75%;
        }

        @media only screen and (max-width: 665px) {
          width: 100%;
           padding: 0%;
           background-color: rgba(255, 255, 255, 0);
           margin: 1em auto;
        }
      }

      p {
        position: relative;
        text-align: justify;
        margin: 0 0 4em 0;
        font-size: 1.2em;
        width: 100%;

        span {
          position: relative;
          color: #5c5aa4;
          font-size: 1.2em;
          display: block;
          width: 100%;
          text-align: center;
          margin: 2em 0 1.5em 0;
          font-weight: 600;

          &::after {
            position: absolute;
            content: '';
            left: 40%;
            bottom: -1.25em;
            width: 20%;
            height: 2px;
            background-color: rgb(189, 189, 189);
          }
        }

        @media only screen and (max-width: 600px) {
          margin: 2em 0;
        }
      }

      h3 {
        font-weight: 600;
        font-size: 2.2em;
        margin: 5em 0 0 0;

        @media only screen and (max-width: 992px) {
          font-size: 2em;
        }

        @media only screen and (max-width: 665px) {
          margin: 3em 0 0 0;
        }
      }

      h6 {
        font-size: 1.2em;
        font-weight: 500;
        color: #434343;
        margin: 0;
      }

      .services{


      .cards {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        @media only screen and (max-width: 992px) {
            flex-wrap: wrap;
            margin: 4em 0;
          }

        .card {
          margin: 4em 0;
          background-color: #fff;
          width: 25%;
          padding: 2em 3%;
          border-radius: .6em;

          @media only screen and (max-width: 992px) {
            width: 60%;
            margin: .5em 20%;
            padding: 2em 2em;
          }

          @media only screen and (max-width: 665px) {
            width: 100%;
            margin: .5em 0%;
          }

          lottie-player {
            position: relative;
            width: 5em;
            height: 5em;
            margin: 0 0 1em -.3em;
          }

          h5 {
            font-size: 1.6em;
            font-weight: 500;
            margin: 0;

            @media only screen and (max-width: 600px) {
              font-size: 1.2em;
            }
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
      }

      

      .spinner {
        position: absolute;
        right: 0%;
        top: 0%;
        transform: translate(30%, -30%);
        width: 20%;
        max-width: 160px;
        border-radius: 50%;
        cursor: pointer;
        background-color: #ffffff;
        border: 2px solid #da3232;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.151);

        @media only screen and (max-width: 665px) {
          display: none;
        }


        svg {
          position: relative;
          height: auto;
          transform-origin: center;
          width: 100%;
          font-size: 0.6em;
          letter-spacing: 0.53em;
          animation: spin 15s linear infinite;
          top: 4px;

          .rotating-text {
            fill: rgb(0, 0, 0);
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
          opacity: 0.9;
          transition-duration: 0.2s;
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
        border-radius: 0.3vw;
        box-shadow: 10px 10px 0px #000;
        z-index: 1;
        pointer-events: none;
      }

      .services {
        margin-bottom: 2em;
      }

      .products {
        position: relative;
        width: 100%;
        background-color: #fff;
        padding: 2em 15% 2em 15%;
        left: -15%;
        margin: 12em 0 8em 0;

        @media only screen and (max-width: 665px) {
          margin: 6em 0 2em 0;
          padding: 1em 15% 2em 15%;
        }

        .title {
          position: relative;
          top: 0;
          margin: 0 0 4em 0;

          @media only screen and (max-width: 600px) {
            margin: 0 0 2em 0;
          }

          h3 {
            margin: 3em 0 0 0;
          }

        }

        .price-info{
          position: relative;
          display: block;
          text-align: center;
          margin: 3em 0;
        }
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
        margin-bottom: 6em;
        top: 0;
        transition: top 0.4s;

        &:hover {
          top: -2em;
        }
      }

      .project {
        position: relative;
        cursor: pointer;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;

        &:nth-child(2n + 0) {
          .scrollContainer {
            animation: scroll-negativ 45s linear infinite;
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
              transition-duration: 0.4s;

              &:nth-child(2) {
                stroke-dashoffset: 0;
                stroke-dasharray: 16.9;
                transition-delay: 0.2s;
              }
            }
          }

          .project-info {
            opacity: 1;
            transition-delay: 0.1s;
            transition-duration: 0.4s;
          }
        }

        .title {
          position: absolute;
          top: 1.5em;
          right: 10%;
          font-weight: 700;
          opacity: 0;
          transition: opacity 0.4s;

          span {
            font-weight: 300;
            margin-left: 0.3em;
          }
        }

        .scrollContainer {
          width: auto;
          display: flex;
          flex-direction: row;
          animation: scroll 50s linear infinite;
          transition: margin 0.4s;

          .scroll-item {
            display: inline-block;
            font-size: 8em;
            font-weight: 700;
            display: flex;
            -webkit-text-stroke: 2px #dddddd;
            color: #000;

            .icon-container {
              position: relative;
              display: inline-block;
              height: 0.8em;
              width: 0.8em;
              border-radius: 50%;
              border: 2px solid #dddddd;
              margin: auto 0.3em;

              .icon{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 60%;
                height: auto;
              }
            }
          }
        }

        .arrow {
          position: absolute;
          left: 10%;
          bottom: 10%;

          path {
            transition-duration: 0.1s;
            stroke-dashoffset: 78;
            stroke-dasharray: 78;

            &:nth-child(2) {
              stroke-dashoffset: 16.9;
              stroke-dasharray: 16.9;
            }
          }
        }

        .project-info {
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
          transform: translate(-80%, 0);
        }

        100% {
          transform: translate(0, 0);
        }
      }
    }

    //Contact
    #contact {
      position: relative;
      width: 100%;
      height: 100vh;
      background: rgb(72, 78, 156);
      background: linear-gradient(0deg,
          rgba(72, 78, 156, 1) 0%,
          rgba(136, 120, 203, 1) 100%);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      z-index: 0;

      .text-container {
        position: absolute;
        top: calc(50% - 8em);
        left: 10%;
        transform: translate(0, -50%);
        color: #dddddd;
        width: 40%;

        @media only screen and (max-width: 992px) {
          width: 80%;
          top: 15%;
        }


        p {
          font-size: 8vw;
          font-weight: 700;
          line-height: 8vw;
          transition-duration: 0.2s;

          @media only screen and (max-width: 992px) {
            font-size: 9vw;
            line-height: 9vw;
            text-align: center;
            margin-top: 1.5em;
          }

          @media only screen and (max-width: 400px) {
            font-size: 15vw;
            line-height: 15vw;
            text-align: center;
          }
        }

        .hover {
          color: #fff;
        }
      }

      .button {
        position: absolute;
        top: 20%;
        left: 60%;
        width: 14em;
        height: 14em;
        border-radius: 50%;
        background-color: #dddddd;
        cursor: pointer;
        transition: 0.4s;

        @media only screen and (max-width: 992px) {
          font-size: 14px;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        @media only screen and (max-width: 400px) {
          top: 48%;
        }

        .text {
          color: #5c5aa4;
          font-weight: 700;
          font-size: 2em;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;

          div {
            position: relative;
            display: block;
            line-height: 1.4em;
            width: 4em;
            height: 1.4em;
            overflow: hidden;

            span {
              position: absolute;
              left: 50%;
              top: 0;
              transition: 0.4s;

              &:nth-child(1) {
                transform: translate(-50%, 0);
                transform-origin: right center;
              }

              &:nth-child(2) {
                transform: translate(-50%, 125%) rotate(25deg);
                transform-origin: left center;
              }
            }
          }
        }

        &:hover {
          width: 15em;
          height: 15em;
          top: calc(20% - 0.5em);
          left: calc(60% - 0.5em);
          background-color: #fff;

          @media only screen and (max-width: 992px) {
            top: 45%;
            left: 50%;
          }

          @media only screen and (max-width: 400px) {
            top: 48%;
          }

          .text {
            div {
              span {
                &:nth-child(1) {
                  transform: translate(-50%, -125%) rotate(25deg);
                }

                &:nth-child(2) {
                  transform: translate(-50%, 0) rotate(0deg);
                }
              }
            }
          }
        }
      }

      .btn-click {
        transition-delay: 0.3s;
        box-shadow: inset 0 0 10px #000000;
      }

      .hand {
        position: absolute;
        width: 14em;
        height: 14em;
        top: calc(30% + 6em);
        left: calc(70% + 6em);
        pointer-events: none;
        transition: 0.4s;

        @media only screen and (max-width: 992px) {
          top: calc(45% + 6em);
          left: calc(42% + 6em);
        }

        svg {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 50%;
          height: auto;
          transform: rotate(-45deg);
          fill: #fff;
          filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.7));
          opacity: 0;
          transition: 0.4s;
        }
      }

      .hover {
        top: calc(20% + 6em);
        left: calc(60% + 6em);

        @media only screen and (max-width: 992px) {
          top: calc(35% + 6em);
          left: calc(32% + 6em);
        }

        svg {
          opacity: 1;
        }
      }

      .click {
        animation: click 0.4s ease forwards;

        @media only screen and (max-width: 992px) {
          animation: click992 0.4s ease forwards;
        }
      }

      @keyframes click {
        0% {
          top: calc(20% + 6em);
          left: calc(60% + 6em);
        }

        70% {
          transform: scale(1);
        }

        100% {
          top: calc(20% + 3em);
          left: calc(60% + 3em);
          transform: scale(0.98);
        }
      }

      @keyframes click992 {
        0% {
          top: calc(35% + 6em);
          left: calc(32% + 6em);
        }

        70% {
          transform: scale(1);
        }

        100% {
          top: calc(32% + 3em);
          left: calc(30% + 3em);
          transform: scale(0.98);
        }
      }
    }
  }
</style>