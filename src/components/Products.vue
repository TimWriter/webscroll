<template>
  <div id="product-component" :class="{ dark: dark }">
      <div class="flex">
            <div class="product" v-for="(item, index) in $t('site.services.products')" :data-index="index" :key="index">
              <div class="icon">
                <lottie-player v-if="!dark" class="lottie" :src="item.lottie" background="transparent" speed="0.8" loop autoplay/>
                <lottie-player v-if="dark" class="lottie" :src="item.lottie_dark" background="transparent" speed="0.8" loop autoplay/>
              </div>
              <div class="title">
                <h6>{{item.title}}</h6>
              </div>
              <div class="content">
                <p class="text1">
                  {{item.text1}}
                </p>
                <p class="text2" v-html="item.text2" />
                <p class="price">
                  {{item.price}}
                </p>
              </div>
                <LinkButton class="button" :to="'/contact'" :center="true">
                    {{item.button}}
                </LinkButton>
            </div>
          </div>
  </div>
</template>

<script>
import LinkButton from "../components/Link_Button.vue";

export default {
    components: {
      LinkButton
    },
    props: ['dark']
}
</script>

<style lang="scss" scoped>
#product-component {
        position: relative;
        width: 100%;
        background-color: #fff;
        font-size: 1em;

        .flex{
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            @media only screen and (max-width: 992px) {
              flex-wrap: wrap;
            }
        }

        .product {
          position: relative;
          border-radius: .7em;
          width: 25%;
          padding: 2em 3% 3em 3%;
          border: 2px solid #aaaaaa;
          background-color: #fff;
          z-index: 1;
          transition-duration: .4s;

          @media only screen and (max-width: 992px) {
              width: 75%;
              margin: 1em 12.5%;
            }

            @media only screen and (max-width: 665px) {
              width: 100%;
              margin: 1em 0;
            }

          &:hover {
            border: 2px solid #777777;
          }

          .icon {
            position: relative;
            display: flex;
            justify-content: center;

            .lottie {
              width: 12em;
              height: 12em;

              @media only screen and (max-width: 665px) {
              width: 8em;
              height: 8em;
            }
            }
          }

          .title {
            position: relative;

            h6 {
              font-weight: 600;
              font-size: 1.6em;
              text-align: center;
              margin: 0;
            }
          }

          .content {
            margin: 2em 0 6em 0;

            p {
              font-size: 1em;
              color: #434343;
              margin: 0;
              text-align: center;
            }

            .text1 {
              position: relative;
              font-size: 1em;
              color: #000;
              width: auto;

              &::after {
                position: absolute;
                content: '';
                width: 30%;
                height: 2px;
                background: #cfcfcf;
                bottom: -1em;
                left: 35%;
              }
            }

            .text2 {
              margin: 2em 0 1em 0;
            }

            .price {
              font-weight: 600;
              font-size: 1.2em;
            }
          }

          .button{
              position: absolute;
              bottom: 2.5em;
            }
        }
      }

      #product-component.dark{
          background-color: rgba(0, 0, 0, 0);

          .product {
              border: none;
              background-color: #282828;
              color: #fff;
          }

          .content {
              p{
                  color: rgb(236, 236, 236);
              }

              .text1{
                  color: #fff;
              }
          }
      }
</style>