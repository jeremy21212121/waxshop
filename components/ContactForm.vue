<template>
  <form ref="contactForm" class="mui-form">
    <img src="~/assets/sm-msg.png" aria-hidden="true">
    <legend>Send a message</legend>
    <div class="mui-textfield">
      <input
        id="name-input"
        v-model="formData.name"
        type="text"
        name="nameinput"
        maxlength="100"
        placeholder="Name"
        required
      >
    </div>
    <div class="mui-textfield">
      <input
        id="email-input"
        v-model="formData.email"
        type="email"
        name="emailinput"
        maxlength="100"
        placeholder="E-mail"
        required
      >
    </div>
    <div class="mui-textfield">
      <textarea
        id="message-text"
        v-model="formData.text"
        name="messagetext"
        maxlength="1024"
        cols="30"
        rows="5"
        placeholder="Message"
        required
      />
    </div>
    <button type="submit" class="button--grey" :class="{ loading }" :disabled="loading" @click="checkForm">
      <span v-if="!loading">
        Send
      </span>
      <div v-else class="lds-ellipsis" aria-hidden="true">
        <div />
        <div />
        <div />
        <div />
      </div>
    </button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      loading: false,
      formData: {
        name: '',
        email: '',
        text: ''
      },
      apiUrl: {
        dev: 'http://127.0.0.1:8080/v1/send',
        prod: 'https://waxshop.ca/api/v1/send'
      }
    }
  },
  methods: {
    async submitForm () {
      // detect dev mode by using window.webpackHotUpdate
      const apiUrl = (window.webpackHotUpdate) ? this.apiUrl.dev : this.apiUrl.prod
      this.loading = true
      const response = await this.$axios.$post(apiUrl, this.formData)
      this.loading = false
      const msg = (response.success) ? 'Message sent! We will get back to you ASAP.' : 'Sorry, error sending message. Please e-mail hello@waxshop.ca or call.'
      this.setSnackbar(msg)
      this.$refs.contactForm.reset()
      window.setTimeout(() => this.setSnackbar(''), 5000)
    },
    checkForm (e) {
      const valid = this.$refs.contactForm.checkValidity()
      if (valid) {
        // prevent default only if form is valid as to not interfere with native HTML5 form validation
        e.preventDefault()
        this.submitForm()
      }
    },
    ...mapMutations({
      setSnackbar: 'setSnackbar'
    })
  }
}
</script>

<style lang="scss" scoped>
.mui-form {
  max-width: 400px;
  margin-top: 30px;
  width: 90%;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  padding: 10px 15px;
  border-radius: 8px;
  img {
    padding-top: 10px;
    max-width: 15%;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    // padding-top: 15px;
    margin-bottom: 0.625rem;
    font-size: 1.3rem;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.87);
    line-height: inherit;
    border: 0;
  }
  .mui-textfield {
    display: block;
    padding-top: 0.9375rem;
    margin-bottom: 1.25rem;
    position: relative;
    input,
    textarea {
      width: 90%;
      box-sizing: border-box;
      display: block;
      background-color: transparent;
      color: rgba(0, 0, 0, 0.87);
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.26);
      outline: 0;
      width: 100%;
      padding: 0;
      box-shadow: none;
      border-radius: 0;
      font-size: 1rem;
      font-family: inherit;
      line-height: inherit;
      background-image: none;
      transition: all 50ms ease;
      &:focus {
        border-bottom: 2px solid #0074e8;
      }
    }
  }
  button {
    border: none;
    font-size: 1rem;
    width: 78px;
    height: 30px;
    &.loading {
      padding: 0;
    }
    .lds-ellipsis {
      display: inline-block;
      position: relative;
      // right: 10px;
      left: 8px;
      width: 64px;
      width: 100%;
      height: 30px;
      overflow: hidden;
      div {
        position: absolute;
        top: 10px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
        &:nth-child(1) {
          left: 6px;
          animation: lds-ellipsis1 0.6s infinite;
        }
        &:nth-child(2) {
          left: 6px;
          animation: lds-ellipsis2 0.6s infinite;
        }
        &:nth-child(3) {
            left: 26px;
            animation: lds-ellipsis2 0.6s infinite;
        }
        &:nth-child(4) {
            left: 45px;
            animation: lds-ellipsis3 0.6s infinite;
        }
      }
    }
  }
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
</style>
