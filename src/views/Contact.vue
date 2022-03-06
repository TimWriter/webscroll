<template>
  <div id="contact">
      <Background :height="'115vh'" />
      <div class="container">
          <div class="flex">
              <div class="form">
                  <h1>{{ $t("contact.heading") }}</h1>
                  <div class="input">
                      <input type="text" v-model="form.name" name="name" id="name">
                      <label for="name" v-bind:class="[form.name.length >= 1 ? 'filled' : '']">
                          Name
                      </label>
                  </div>
                  <div class="input">
                      <input type="email" v-model="form.email" name="email" id="email">
                      <label for="email" v-bind:class="[form.email.length >= 1 ? 'filled' : '']">
                          Email
                      </label>
                  </div>
                  <div class="textarea">
                      <textarea name="text" v-model="form.text" id="text" rows="8"></textarea>
                      <label for="text" v-bind:class="[form.text.length >= 1 ? 'filled' : '']">
                          Nachricht
                      </label>
                  </div>
              </div>
              <div class="oldschool">
                test
              </div>
          </div>
      </div>
      <Footer :background="true"/>
  </div>
</template>

<script>
import Background from '../components/Background.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'Contact',
    components: {
        Background,
        Footer
    },
    data() {
        return{
            form: {
                name: '',
                email: '',
                text: '',
                isValid: false,
                terms: false,
                newsletter: false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#contact{
    position: absolute;
    width: 100vw;
    height: auto;
    .container{
        position: relative;
        width: 80%;
        height: auto;
        margin: 10em 10%;
        overflow: hidden;

        h1{
            color: #fff;
            margin: 0;
            font-size: 4em;
        }

        .flex{
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            margin-top: 2em;

            .form{
                flex-grow: 1;

                .input{
                    position: relative;
                    height: 3.6em;
                    width: 80%;
                    background: rgb(255,255,255);
                    background: linear-gradient(54deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.3) 100%);
                    margin: 1.2em 0;
                    border-radius: 1.8em;
                    backdrop-filter: blur(3px);


                    input{
                        margin: 0;
                        width: calc(100% - 4em);
                        height: 100%;
                        font-size: 1.2em;
                        padding: 0 2em;
                        border: none;
                        background-color: rgba(255, 255, 255, 0);
                        color: #fff;

                        &:focus{
                            outline: none;
                        }
                    }

                    label{
                        position: absolute;
                        top: 50%;
                        left: 2em;
                        color: #fff;
                        z-index: 1;
                        transform: translate(0, -45%);
                        font-size: 1.2em;
                        transition-duration: .2s;
                    }

                    &:focus-within{
                        label{
                            top: 0;
                            transform: translate(-5%, -50%) scale(.8);
                            text-shadow: 0px 0px 10px rgb(0, 0, 0);
                            color: #E4E4E4;
                        }
                    }

                    .filled{
                        top: 0;
                        transform: translate(-5%, -50%) scale(.8);
                        text-shadow: 0px 0px 10px rgb(0, 0, 0);
                        color: #E4E4E4;
                    }
                }

                .textarea{
                    position: relative;
                    width: 80%;
                    background: rgb(255,255,255);
                    background: linear-gradient(54deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.3) 100%);
                    margin: 1.3em 0;
                    border-radius: 1.8em;
                    backdrop-filter: blur(3px);

                    textarea{
                        margin: 0;
                        width: calc(100% - 4em);
                        font-size: 1.2em;
                        padding: 1em 2em;
                        border: none;
                        background-color: rgba(255, 255, 255, 0);
                        color: #fff;
                        resize: none;

                        &:focus{
                            outline: none;
                        }
                    }

                    label{
                        position: absolute;
                        top: 1.5em;
                        left: 2em;
                        color: #fff;
                        z-index: 1;
                        transform: translate(0, -45%);
                        font-size: 1.2em;
                        transition-duration: .2s;
                    }

                    &:focus-within{
                        label{
                            top: 0;
                            transform: translate(-5%, -50%) scale(.8);
                            text-shadow: 0px 0px 10px rgb(0, 0, 0);
                            color: #E4E4E4;
                        }
                    }

                    .filled{
                        top: 0;
                        transform: translate(-5%, -50%) scale(.8);
                        text-shadow: 0px 0px 10px rgb(0, 0, 0);
                        color: #E4E4E4;
                    }
                }
            }

            .oldschool{
                flex-grow: 1;
                background-color: blue;
            }
        }
    }

    .footer{
        position: absolute;
        top: 115vh;
    }
}
</style>