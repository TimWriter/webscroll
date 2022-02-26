<template>
    <header class="navbar">
        <div class="flex">
            <div class="logo"></div>
            <div class="links">
                <ul>
                    <li>
                        <a href="">{{ $t("nav.about") }}</a>
                    </li>
                    <li>
                        <a href="">{{ $t("nav.project") }}</a>
                    </li>
                    <li>
                        <a href="">{{ $t("nav.contact") }}</a>
                    </li>
                    <li>
                        <Language />
                    </li>
                </ul>
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
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 1.2em;
            font-weight: 500;
            ul{
                list-style: none;
                color: #E4E4E4;
                padding: 0;
                margin: 0;

                li{
                    padding: 0;
                    display: inline-block;
                    margin: 0 1em;
                    -webkit-user-select: none; /* Safari */        
                    -moz-user-select: none; /* Firefox */
                    -ms-user-select: none; /* IE10+/Edge */
                    user-select: none; /* Standard */

                    &:last-child{
                        margin: 0 0 0 1em;
                    }

                    a{
                        color: #E4E4E4;
                        text-decoration: none;
                        transition-duration: .2s;

                        &:hover{
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>