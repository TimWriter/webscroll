<template>
    <header class="navbar">
        <div class="flex">
            <div class="logo"></div>
            <div class="links">
                <ul>
                    <li class="hover">
                        <a class="link-1" href="">{{ $t("nav.about") }}</a>
                        <a class="link-2" href="">{{ $t("nav.about") }}</a>
                    </li>
                    <li class="hover">
                        <a class="link-1" href="">{{ $t("nav.project") }}</a>
                        <a class="link-2" href="">{{ $t("nav.project") }}</a>
                    </li>
                    <li class="hover">
                        <a class="link-1" href="">{{ $t("nav.contact") }}</a>
                        <a class="link-2" href="">{{ $t("nav.contact") }}</a>
                    </li>
                    <li id="placeholder">

                    </li>
                </ul>
                <div class="language-container">
                    <Language />
                </div>
            </div>
        </div>
  </header>
</template>

<script>
import Language from './Language.vue';

export default {
    name: 'Navbar',
    components: {
        Language
    },
}
</script>

<style lang="scss" scoped>
    .navbar{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100px;
        z-index: 10;

        .flex{
            position: relative;
            width: 80%;
            height: 100%;
            margin: 0 10%;
            display: flex;
            justify-content: space-between;
        }

        .links{
            position: relative;
            font-size: 1.2em;
            font-weight: 500;

            .language-container{
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
                right: 0;
            }

            

            ul{
                list-style: none;
                color: #E4E4E4;
                padding: 0;
                margin: 0;
                display: inline-block;
                position: relative;
                top: 50%;
                transform: translate(0, -50%);
                height: 1.6em;

                li{
                    position: relative;
                    padding: 0;
                    display: inline-block;
                    margin: 0 1em;
                    -webkit-user-select: none; /* Safari */        
                    -moz-user-select: none; /* Firefox */
                    -ms-user-select: none; /* IE10+/Edge */
                    user-select: none; /* Standard */
                    height: 1.6em;

                    a{
                        color: #E4E4E4;
                        text-decoration: none;
                        transition-duration: .4s;
                        position: relative;
                    }
                }

                #placeholder{
                    width: 2.5em;
                }

                .hover{
                    height: 1.6em;
                    width: auto;
                    transition: transform 0.5s ease;
                    overflow: hidden;

                    a{
                        display: block;
                        transition: .5s;

                        &:hover{
                            color: #fff;
                        }
                    }

                    .link-1{
                        transform-origin: right center;
                    }

                    .link-2{
                        position: absolute;
                        top: 0;
                        transform: translate(0, 2.1em) rotate(20deg);
                        transform-origin: left center;
                    }

                    &:hover{
                        .link-1{
                            transform: translate(0, -2.1em) rotate(20deg);
                        }
                        .link-2{
                            top: 0;
                            transform: translate(0, 0) rotate(0deg);
                        }
                    }
                }
            }
        }
    }
</style>