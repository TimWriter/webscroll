<template>
    <div class="template">
        <div class="breadcrumbs">
            <router-link to="/" class="link">
                <svg width="33" height="33" viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 14H33.5V29C33.5 31.2091 31.7091 33 29.5 33H12.5C10.2909 33 8.5 31.2091 8.5 29V14Z"
                        fill="white" />
                    <path
                        d="M18.1862 2.78495C19.7449 1.24224 22.2551 1.24224 23.8138 2.78495L32.2726 11.157C34.8125 13.6709 33.0324 18 29.4588 18H12.5412C8.96759 18 7.18746 13.6709 9.72735 11.157L18.1862 2.78495Z"
                        fill="white" />
                </svg>
            </router-link>
            <template v-for="item in breadcrumbs">
            <div class="chevron" :key="item.id">
                <svg width="8" height="11" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4.5 4.5L1 8" stroke="white" stroke-linecap="round" />
                </svg>
            </div>
            <router-link :to="item.link" class="link" :key="item.id">
                <span>{{item.name}}</span>
            </router-link>
            </template>
        </div>
        <section>
            <slot></slot>
        </section>
        <Footer :background="false" />
    </div>
</template>

<script>
    import Footer from "./Footer.vue";
    export default {
        components: {
            Footer,
        },
        props: {
            breadcrumbs: Array,
        }
    }
</script>

<style lang="scss" scoped>
    .template {
        position: relative;
        margin: calc(100px + 3em) 0 0 0;
        font-family: Poppins, sans-serif;
        z-index: 1;

        @media only screen and (max-width: 450px) {
                font-size: 12px;
                margin: 100px 0 0 0;
        }

        .breadcrumbs {
            position: relative;
            margin: 1em 9%;
            display: flex;
            flex-direction: row;

            @media only screen and (max-width: 1200px) {
                margin: 1em 3%;
            }

            @media only screen and (max-width: 992px) {
                margin: 1em 9%;
            }

            @media only screen and (max-width: 450px) {
                margin: 1em 5%;
            }

            .link{
                position: relative;
                height: 2em;
                color: rgb(226, 226, 226);
                text-decoration: none;
                line-height: 2em;
                transition-duration: .4s;
                svg{
                    height: 100%;
                    path{
                        fill: #5c5aa4;
                        transition-duration: .4s;
                    }
                }
                span{
                    position: relative;
                    font-size: 1.2em;
                    margin-top: .5em;
                }

                &:hover{
                    color: #fff;
                    svg{
                        path{
                            fill: #fff;
                        }
                    }
                }
            }
            .chevron{
                position: relative;
                height: 2em;
                margin: 0 1em;
                svg{
                    height: 100%;
                }
            }
        }

        section {
            background-color: #1D1D1D;
            color: #fff;
            min-height: 100vh;
            margin: 0 9% 5vw 9%;
            padding: 5em 6%;
            border-radius: 6px;

            @media only screen and (max-width: 1200px) {
                margin: 0 3% 5vw 3%;
                padding: 5em 4%;
            }

            @media only screen and (max-width: 992px) {
                margin: 0 9% 5vw 9%;
                padding: 5em 6%;
            }

            @media only screen and (max-width: 450px) {
                margin: 0 5% 5vw 5%;
                padding: 3em 6%;
            }

            h1 {
                font-weight: 700;
                font-size: 2.8em;
                text-align: center;
                margin: 0;
            }

            h2 {
                font-weight: 600;
                font-size: 2.4em;
                text-align: center;
                margin: 3.5em 0 1.5em 0;

                @media only screen and (max-width: 450px) {
                    margin: 2.5em 0 0.5em 0;
                }
            }

            p {
                font-size: 1.2em;
                line-height: 1.6em;
                text-align: center;
                margin: 3em 0 3em 0;

                @media only screen and (max-width: 450px) {
                    margin: 1.5em 0 3em 0;
                }
            }
        }

        .link-button {
            position: relative;
            display: inline-block;
            width: auto;
            overflow: hidden;
            font-size: 1em;
            color: #fff;
            background-color: #5c5aa4;
            padding: 1em 1.5em;
            text-decoration: none;
            font-weight: 600;
            border-radius: .4em;
            cursor: pointer;
            transition-duration: .4s;

            &:hover {
                box-shadow: 10px 10px 0px #000;

                &::after {
                    left: 150%;
                    transition-duration: 1s;
                }
            }

            &::after {
                position: absolute;
                content: '';
                left: -50%;
                top: -50%;
                height: 200%;
                width: 30%;
                background-color: #ffffff28;
                transform: rotate(20deg);
            }
        }

        .link-button.center {
            left: 50%;
            transform: translate(-50%, 0);
        }
    }
</style>