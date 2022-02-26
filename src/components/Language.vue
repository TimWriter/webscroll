<template>
  <div class="language" @click="changeLanguage()">
      <div v-if="this.$i18n.locale === 'de'">
          <img src="../assets/GB.png" alt="Großbritannien Flagge">
          <span>en</span>
      </div>
      <div v-if="this.$i18n.locale === 'en'">
          <img src="../assets/AT.png" alt="Österreich Flagge">
          <span>at</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Language',
    methods: {
        changeLanguage(){
            if(this.$i18n.locale === 'de'){
                this.$i18n.locale = 'en'
            }else{
                this.$i18n.locale = 'de'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .language{
        position: relative;
        width: 3.3em;
        height: 1.5em;
        border-radius: 0.8em;
        border: 2px solid #E4E4E4;
        text-align: center;
        cursor: pointer;
        transition-duration: .2s;

        span{
            transition-duration: .2s;
        }

        img{
            position: absolute;
            top: 50%;
            left: 3px;
            transform: translate(0, -50%);
            height: 0%;
            width: auto;
            transition-duration: .2s;
            opacity: 0;
        }

        &:hover{
            border: 2px solid #fff;

            span{
                margin-left: 22px;
                color: #fff;
            }

            img{
                height: 80%;
                opacity: 1;
            }
        }
    }
</style>