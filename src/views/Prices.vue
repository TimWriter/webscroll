<template>
  <div id="prices">
      <Template :breadcrumbs="breadcrumbs">
          <h1>Pakete &amp; Preise</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget placerat volutpat massa aliquet cras tellus sed. Elit, ac scelerisque pharetra, tincidunt libero, praesent. Dui tempor id maecenas neque, mus ut amet in fermentum. Sit morbi phasellus tristique cras ac ullamcorper nec a velit. Adipiscing et vitae, sit aenean in. </p>
                <h2>Sie haben die Wahl</h2> 
        <Products :dark="true" />
        <h2>Wir kümmern uns um Ihre Website</h2>
        <div class="cards">
          <div class="card">
            <div class="left">
              <div class="icon"></div>
            </div>
            <div class="right">
              <h6>Instandhaltung &amp; Wartung</h6>
              <p>Um sich auf die wesentlichen Dinge im Leben konzentrieren zu können, kümmern wir uns um die Wartung und Instandhaltung Ihres Webauftritts. </p>
              <div class="price">
                Für €15* pro Monat
              </div>
            </div>
          </div>
        </div>
        <LinkButton class="button" :to="'/contact'" :center="true">
            ANFRAGE
        </LinkButton>
        <h2>
          Darf's ein bisschen mehr sein?
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget placerat volutpat massa aliquet cras tellus sed. Elit, ac scelerisque pharetra, tincidunt libero, praesent. Dui tempor id maecenas neque, mus ut amet in fermentum. Sit morbi phasellus tristique cras ac ullamcorper nec a velit. Adipiscing et vitae, sit aenean in. </p>
        <LinkButton class="button" :to="'/contact'" :center="true">
                    UNSER DIENSTLEISTUNGSANGEBOT
        </LinkButton>
        <div class="price-info">
          * sämtliche Preise verstehen sich als Endpreise <br>
          ** Mindestlaufzeit 12 Monate 
        </div>
      </Template> 
  </div>
</template>

<script>
import Template from "../components/Page_Template.vue";
import Products from "../components/Products.vue";
import LinkButton from "../components/Link_Button.vue";

export default {
    components: {
      Template,
      Products,
      LinkButton
    },
    data() {
      return{
        breadcrumbs: [{
            name: this.$t("nav.prices"),
            link: "/prices",
          }]
      }
    }
}
</script>

<style lang="scss" scoped>
#prices{
    position: relative;

    .cards{
      position: relative;
      width: 100%;
      margin: 0 0 3em 0;

      .card{
        position: relative;
        width: calc(100% - 6em);
        display: flex;
        flex-direction: row;
        background-color: #282828;
        padding: 3em;
        border-radius: 10px;
        .left{
          width: 30%;
        }
        .right{
          width: 70%;
        }

        h6{
          font-size: 1.6em;
          margin: 0;
        }
        p{
          margin: 1em 0;
          text-align: left;
        }

        .price{
          font-weight: 600;
          font-size: 1.2em;
        }
      }
    }

    .price-info{
      position: relative;
      display: block;
      text-align: center;
      margin: 12em 0 0 0;
      line-height: 2.4em;

      &::before{
        content: '';
        position: absolute;
        left: 45%;
        top: -3em;
        width: 10%;
        height: 1px;
        background-color: #BCBCBC;

        @media only screen and (max-width: 450px) {
            left: 40%;
            width: 20%;
        }
      }
    }
}
</style>