<template>
    <div id="contact">
        <Background :height="'130vh'" />
        <div class="container">
            <div class="flex">
                <div class="form">
                    <h1>{{ $t("contact.heading") }}</h1>
                    <div class="input">
                        <input type="text" v-model="form.name" name="name" id="name" />
                        <label for="name" v-bind:class="[form.name.length >= 1 ? 'filled' : '']">
                            {{ $t("contact.name") }}
                        </label>
                    </div>
                    <div class="input">
                        <input type="email" v-model="form.email" name="email" id="email" />
                        <label for="email" v-bind:class="[form.email.length >= 1 ? 'filled' : '']">
                            {{ $t("contact.email") }}
                        </label>
                    </div>
                    <div class="textarea">
                        <textarea name="text" v-model="form.text" id="text" rows="8"></textarea>
                        <label for="text" v-bind:class="[form.text.length >= 1 ? 'filled' : '']">
                            {{ $t("contact.message") }}
                        </label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" v-model="form.terms" name="terms" id="terms" />
                        <div class="box" v-bind:class="[form.terms ? 'checked' : '']">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 5.25L7.875 14.875L3.5 10.5" stroke="#55E798" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <label for="terms">{{ $t("contact.terms") }}</label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" v-model="form.newsletter" name="newsletter" id="newsletter" />
                        <div class="box" v-bind:class="[form.newsletter ? 'checked' : '']">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 5.25L7.875 14.875L3.5 10.5" stroke="#55E798" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <label for="newsletter">{{ $t("contact.newsletter") }}</label>
                    </div>
                    <div class="validation">
                        <p>{{ $t("contact.validation") }}</p>
                        <div class="numbers">
                            <div class="number" v-for="(item, index) in numbers" :key="index"
                                @click="clickedNumber(index)">
                                <span>
                                    {{ item }}
                                </span>
                            </div>
                            <div class="wrong hide" @click="resetNumbers()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                                    <path
                                        d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                                </svg>
                            </div>
                            <div class="success hide">
                                <lottie-player v-if="robot" src="https://assets5.lottiefiles.com/packages/lf20_awyrfcmg.json" background="transparent" speed="1" autoplay></lottie-player>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="oldschool">
                    <div class="blob">
                        <svg width="459" height="383" viewBox="0 0 459 383" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M220.619 0.0416493C319.405 -1.48562 419.197 38.9973 449.97 120.36C480.948 202.263 428.612 286.39 348.034 336.916C268.008 387.096 160.445 402.347 80.5628 351.994C0.79567 301.714 -17.0134 207.89 15.1435 127.082C45.4691 50.8759 127.615 1.47953 220.619 0.0416493Z"
                                fill="url(#paint0_linear_15_48)" />
                            <defs>
                                <linearGradient id="paint0_linear_15_48" x1="351.175" y1="19.7511" x2="125.5"
                                    y2="412.483" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.3" />
                                    <stop offset="1" stop-color="white" stop-opacity="0.1" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div class="text">
                            <h2>
                                {{ $t("contact.oldschool") }}
                            </h2>
                            <div>
                                <span>{{ $t("contact.email") }}</span>
                                <a href="mailto:office@webscroll.at">office@webscroll.at</a>
                            </div>
                            <div>
                                <span>{{ $t("contact.phone") }}</span>
                                <a href="tel:+436641977564">+43 664 1977564</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer :background="true" />
    </div>
</template>

<script>
    import Background from "../components/Background.vue";
    import Footer from "../components/Footer.vue";

    export default {
        name: "Contact",
        components: {
            Background,
            Footer,
        },
        data() {
            return {
                form: {
                    name: "",
                    email: "",
                    text: "",
                    robot: false,
                    terms: false,
                    newsletter: false,
                },
                numbers: [],
            };
        },
        mounted() {
            for (let i = 0; this.numbers.length < 3; i++) {
                let random = Math.floor(Math.random() * 100);
                if (!this.numbers.includes(random)) {
                    this.numbers.push(random);
                }
            }
        },
        methods: {
            clickedNumber(index) {
                let text = document.querySelector('.validation p');
                let icon = document.querySelector('.wrong');
                let success = document.querySelector('.success');
                let sortedNumbers = [...this.numbers].sort(function (a, b) {
                    return a - b;
                });
                if (sortedNumbers[0] === this.numbers[index]) {
                    this.numbers.splice(index, 1);
                    if(this.numbers.length < 1){
                        success.classList.remove('hide');
                        text.innerHTML = this.$t("contact.validation_success");
                        setTimeout(this.robot = true, 1000);
                    }
                } else {
                    this.numbers = [];
                    text.innerHTML = this.$t("contact.validation_wrong");
                    icon.classList.remove('hide');
                }
            },
            resetNumbers(){
                let text = document.querySelector('.validation p')
                let icon = document.querySelector('.wrong')
                text.innerHTML = this.$t("contact.validation");
                icon.classList.add('hide');
                for (let i = 0; this.numbers.length < 3; i++) {
                    let random = Math.floor(Math.random() * 100);
                    if (!this.numbers.includes(random)) {
                        this.numbers.push(random);
                    }
                }
            },
        },
    };
</script>

<style lang="scss" scoped>
    #contact {
        position: absolute;
        width: 100vw;
        height: auto;
        font-family: Poppins, sans-serif;

        .container {
            position: relative;
            width: 80%;
            height: auto;
            margin: 10em 10%;
            overflow: hidden;

            .flex {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: row;

                .form {
                    flex-grow: 1;

                    h1 {
                        color: #fff;
                        margin: 0 0 1em 0;
                        font-size: 4em;
                        width: 80%;
                        line-height: 1.2em;
                    }

                    .input {
                        position: relative;
                        height: 3.6em;
                        width: 80%;
                        background: rgb(255, 255, 255);
                        background: linear-gradient(54deg,
                                rgba(255, 255, 255, 0.15) 0%,
                                rgba(255, 255, 255, 0.3) 100%);
                        margin: 1.2em 0;
                        border-radius: 1.8em;
                        backdrop-filter: blur(3px);

                        input {
                            margin: 0;
                            width: calc(100% - 4em);
                            height: 100%;
                            font-size: 1.2em;
                            padding: 0 2em;
                            border: none;
                            background-color: rgba(255, 255, 255, 0);
                            color: #fff;

                            &:focus {
                                outline: none;
                            }

                            &:-webkit-autofill{
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: white !important;
                            }
                        }

                        label {
                            position: absolute;
                            top: 50%;
                            left: 2em;
                            color: #fff;
                            z-index: 1;
                            transform: translate(0, -45%);
                            font-size: 1.2em;
                            transition-duration: 0.2s;
                        }

                        &:focus-within {
                            label {
                                top: 0;
                                transform: translate(-5%, -50%) scale(0.8);
                                text-shadow: 0px 0px 10px rgb(0, 0, 0);
                                color: #e4e4e4;
                            }
                        }

                        .filled {
                            top: 0;
                            transform: translate(-5%, -50%) scale(0.8);
                            text-shadow: 0px 0px 10px rgb(0, 0, 0);
                            color: #e4e4e4;
                        }
                    }

                    .textarea {
                        position: relative;
                        width: 80%;
                        background: rgb(255, 255, 255);
                        background: linear-gradient(54deg,
                                rgba(255, 255, 255, 0.15) 0%,
                                rgba(255, 255, 255, 0.3) 100%);
                        margin: 1.3em 0;
                        border-radius: 1.8em;
                        backdrop-filter: blur(3px);

                        textarea {
                            margin: 0;
                            width: calc(100% - 4em);
                            font-size: 1.2em;
                            padding: 1em 2em;
                            border: none;
                            background-color: rgba(255, 255, 255, 0);
                            color: #fff;
                            resize: none;

                            &:focus {
                                outline: none;
                            }
                        }

                        label {
                            position: absolute;
                            top: 1.5em;
                            left: 2em;
                            color: #fff;
                            z-index: 1;
                            transform: translate(0, -45%);
                            font-size: 1.2em;
                            transition-duration: 0.2s;
                        }

                        &:focus-within {
                            label {
                                top: 0;
                                transform: translate(-5%, -50%) scale(0.8);
                                text-shadow: 0px 0px 10px rgb(0, 0, 0);
                                color: #e4e4e4;
                            }
                        }

                        .filled {
                            top: 0;
                            transform: translate(-5%, -50%) scale(0.8);
                            text-shadow: 0px 0px 10px rgb(0, 0, 0);
                            color: #e4e4e4;
                        }
                    }

                    .checkbox {
                        position: relative;
                        width: 80%;
                        margin-bottom: 1em;

                        input {
                            -webkit-appearance: none;
                            background: rgb(255, 255, 255);
                            background: linear-gradient(54deg,
                                    rgba(255, 255, 255, 0.15) 0%,
                                    rgba(255, 255, 255, 0.3) 100%);
                            position: absolute;
                            height: 2em;
                            width: 2em;
                            border-radius: 0.6em;
                            margin: 0;
                            padding: 0;
                            cursor: pointer;
                            transition-duration: .4s;

                            &:hover {
                                background: linear-gradient(54deg,
                                    rgba(255, 255, 255, 0.20) 0%,
                                    rgba(255, 255, 255, 0.35) 100%);
                            }
                        }

                        label {
                            color: #e4e4e4;
                            font-size: 1.2em;
                            transition-duration: 0.2s;
                            margin: 0 0 0 2.5em;
                            user-select: none;
                            transition-duration: 0.2s;

                            &:hover {
                                color: #fff;
                            }
                        }

                        .box {
                            position: absolute;
                            width: 2em;
                            height: 2em;
                            pointer-events: none;

                            svg {
                                position: absolute;
                                width: auto;
                                height: 60%;
                                top: 45%;
                                left: 40%;
                                transform: translate(-50%, -50%);

                                path {
                                    stroke-dasharray: 19.799;
                                    stroke-dashoffset: -19.799;
                                    transition-duration: 0.4s;
                                }
                            }
                        }

                        .checked {
                            svg {
                                path {
                                    stroke-dasharray: 19.799;
                                    stroke-dashoffset: 0;
                                }
                            }
                        }
                    }

                    .validation {
                        width: 80%;
                        color: #fff;
                        font-size: 1.2em;
                        margin-top: 2.5em;

                        p {
                            margin: 0;
                            text-align: center;
                        }

                        .numbers {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            margin: 1em 0;

                            .number {
                                position: relative;
                                width: 2.8em;
                                height: 2.8em;
                                border-radius: 0.8em;
                                background: rgb(255, 255, 255);
                                background: linear-gradient(54deg,
                                        rgba(255, 255, 255, 0.15) 0%,
                                        rgba(255, 255, 255, 0.3) 100%);
                                margin: 0 0.7em;
                                transition-duration: 0.1s;
                                cursor: pointer;
                                outline: 2px solid rgba(255, 255, 255, 0);

                                &:hover {
                                    outline: 2px solid #fff;
                                }

                                span {
                                    position: absolute;
                                    left: 50%;
                                    top: 50%;
                                    transform: translate(-50%, -50%);
                                }
                            }

                            .wrong{
                                position: relative;
                                display: block;
                                width: 2.8em;
                                height: 2.8em;
                                cursor: pointer;
                                animation: wrong .4s ease forwards;
                                top: .5em;
                                svg{
                                    width: 100%;
                                    height: auto;
                                }
                            }

                            .success{
                                position: relative;
                                display: block;
                                width: 2.8em;
                                height: 2.8em;
                            }

                            .hide{
                                display: none;
                            }
                            
                            @keyframes wrong {
                                0%{
                                    opacity: 0;
                                    top: 1.5em;
                                }
                                100%{
                                    opacity: 1;
                                    top: .5em;
                                }
                            }
                        }
                    }
                }

                .oldschool {
                    flex-grow: 1;
                    position: relative;

                    .blob {
                        position: relative;
                        width: 100%;

                        svg {
                            width: 100%;
                            height: auto;
                        }

                        .text {
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            width: 60%;
                            font-size: 100%;

                            h2 {
                                color: #fff;
                                font-weight: 600;
                                font-size: 1.6em;
                                margin-bottom: 1em;
                            }

                            div {
                                font-size: 1.1em;
                                margin: 1em 0;

                                span {
                                    color: #dddddd;
                                    font-weight: 300;
                                    display: block;
                                    margin: 0.1em 0;
                                }

                                a {
                                    color: #fff;
                                    font-weight: 400;
                                    text-decoration: none;
                                    transition-duration: 0.4s;

                                    &:hover {
                                        color: #605eca;
                                        text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .footer {
            position: absolute;
            top: 130vh;
        }
    }
</style>