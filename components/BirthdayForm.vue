<template>
  <form ref="contactForm" id="sendbdayform" class="mui-form">
    <img src="@/assets/bow.png" alt="Golden bow" aria-hidden="true">
    <h2>Register</h2>
    <div class="mui-textfield">
      <input
        id="name-input"
        v-model="formData.name"
        type="text"
        name="nameinput"
        maxlength="100"
        placeholder="Name"
        required="true"
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
        required="true"
      >
    </div>
    <div class="mui-textfield">
      <input
        id="phone-input"
        v-model="formData.phone"
        type="phone"
        name="phoneinput"
        maxlength="11"
        placeholder="Phone number (optional)"
        required="false"
      >
    </div>
    <div class="mui-textfield">
      <fieldset>
        <legend>Enter your birthday</legend>

        <div>
          <label for="bdaymonth">Month</label>
          <select v-model="formData.birthMonth" name="bdaymonth" id="bdaymonth" required="true">
            <option
              v-for="(monthObj, monthIndex) in monthsArray"
              :key="`monthoption${monthIndex}`"
              :value="monthObj.name"
            >{{monthObj.name}}
            </option>
          </select>
        </div>

        <div>
          <label for="bdayday">Day</label>
          <select v-model="formData.birthDay" :disabled="!birthMonthSet" name="bdayday" id="bdayday" required="true">
            <option
              v-for="(day, dayIndex) in possibleDays"
              :key="`day${dayIndex}`"
              :value="day"
            >
              {{ day }}
            </option>
          </select>
        </div>
      </fieldset>

    </div>
    <div class="mui-textfield">
      <fieldset>
        <legend>E-mail consent</legend>
        <input
          type="checkbox"
          name="consentbox"
          id="consentbox"
          v-model="formData.marketingConsent"
          required="true"
        />
        <label v-html="checkboxMessage" for="consentbox" />
      </fieldset>
    </div>
    <button :class="{ loading }" :disabled="loading" @click="checkForm" type="submit" class="button--grey">
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
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: false,
      checkboxMessage: 'I give the Wax Shop Kelowna permission to occasionally e-mail me about promotions and I agree with the terms in the <a href="#promo-details">details below</a>.',
      disclaimer: "$25 Gift Card will be sent annually a week prior to the birthdate you submitted through the above form for as long as you remain on our mailing list. This offer must be used within 30 days of the birthdate we have on file. If no other paid services are booked within 6 months of your first appointment, we may remove the birthday offer from your file.",
      formData: {
        name: '',
        email: '',
        birthMonth: 'January',
        birthDay: 0,
        phone: '',
        marketingConsent: false
      },
      apiUrl: {
        dev: 'http://127.0.0.1:8080/v1/send',
        prod: 'https://waxshop.ca/api/v1/send'
      },
      monthsArray: [ { name: 'January', length: 31 },{ name: 'February', length: 29 },{ name: 'March', length: 31 },{ name: 'April', length: 30 },{ name: 'May', length: 31 },{ name: 'June', length: 30 },{ name: 'July', length: 31 },{ name: 'August', length: 31 },{ name: 'September', length: 30 },{ name: 'October', length: 31 },{ name: 'November', length: 30 },{ name: 'December', length: 31 } ]
 
    }
  },
  methods: {
    range: (start, end) => Array.from(Array(end - start + 1)).map((v, i) => i + start),
    resetForm () {
      const f = this.formData
      f.name = ''
      f.email = ''
      f.birthMonth = ''
      f.birthDay = 0
      f.phone = ''
    },
    async submitForm () {
      // detect dev mode by using window.webpackHotUpdate
      const apiUrl = (window.webpackHotUpdate) ? this.apiUrl.dev : this.apiUrl.prod
      this.loading = true
      const postData = { name: this.formData.name, email: this.formData.email, text: ''}
      postData.text = `Birthday promo registration!

      name: ${postData.name}
      email: ${postData.email}
      phone: ${this.formData.phone || 'Not provided'}
      birthday: ${this.formData.birthMonth} ${this.formData.birthDay}
      `
      
      const response = await this.$axios.$post(apiUrl, postData).catch(e => { console.log(e); return { success: false } })
      this.loading = false
      const msg = (response.success) ? 'Submission received, thanks!' : 'Sorry, there was an error. Please e-mail hello@waxshop.ca or call.'
      // this.setSnackbar(msg)
      this.activateSnackbar(msg)
      // this.$refs.contactForm.reset()
      this.resetForm()
      // window.setTimeout(() => this.setSnackbar(''), 5000)
    },
    checkForm (e) {
      const valid = this.$refs.contactForm.checkValidity()
      if (valid) {
        // prevent default only if form is valid as to not interfere with native HTML5 form validation
        e.preventDefault()
        this.submitForm()
      }
    },
    // ...mapMutations({
    //   setSnackbar: 'setSnackbar'
    // }),
    ...mapActions([
      'activateSnackbar'
    ])
  },
  computed: {
    birthMonthSet() {
      return this.formData.birthMonth !== ''
    },
    birthMonthMaxDays() {
      return (
        this.monthsArray.find(obj => obj.name === this.formData.birthMonth) ||
        { length: 0 }
      ).length
    },
    minBdayDays() {
      return this.birthMonthSet ? 1 : 0
    },
    possibleDays() {
      return this.range(this.minBdayDays, this.birthMonthMaxDays)
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-form {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 0px;
  width: 90%;
  background-color: rgba(0,0,0,0.85);
  color: rgba(255, 255, 255, 0.87);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  // box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  // box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 10px 15px;
  border-radius: 4px;
  img {
    padding-top: 4px;
    max-width: 25%;
    // opacity: 0.87;
  }
  h2 {
    display: block;
    width: 100%;
    padding: 0;
    // padding-top: 15px;
    margin-bottom: 0.625rem;
    font-size: 1.3rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.87);
    line-height: inherit;
    border: 0;
  }
  .mui-textfield {
    display: block;
    padding-top: 0.3rem;
    margin-bottom: .31rem;
    margin-bottom: 0.9375rem;
    position: relative;
    input,
    select,
    textarea {
      width: 90%;
      box-sizing: border-box;
      display: block;
      background-color: rgba(255,255,255,0.10);
      color: rgba(255, 255, 255, 0.87);
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.26);
      outline: 0;
      width: 100%;
      padding: 2px 6px;
      box-shadow: none;
      border-radius: 1px;
      font-size: 1.2rem;
      font-family: inherit;
      line-height: inherit;
      background-image: none;
      transition: all 50ms ease;
      &:focus {
        border-bottom: 2px solid #0074e8;
      }
    }
    fieldset {
      // display: flex;
      // justify-content: center;
      // flex-wrap: nowrap;
      border-color: rgba(255, 255, 255, 0.37);
      legend {
        color: rgba(255, 255, 255, 0.77);
        
      }
      label {
        color: rgba(255, 255, 255, 0.77);
      }
      input#consentbox {
        // display: inline-block;
        // margin-right: auto;
        margin: 0 auto;
        display: block;
        width: 32px;
        height: 32px;
        // -webkit-appearance: none;
        appearance: none;
        background-color: #fafafa;
        border: 1px solid #cacece;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
        padding: 9px;
        border-radius: 3px;
        // display: inline-block;
        // position: relative;

        &:active, &:checked:active {
          box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
        }

        &:checked {
          background-color: #1565c0;
          border: 1px solid #adb8c0;
          // box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
            // inset 0px -15px 10px -12px rgba(0,0,0,0.05);
          box-shadow: 0 1px 2px rgba(0,0,0,0.05),
            inset 0px -15px 10px -12px rgba(0,0,0,0.05),
            inset 15px 10px 10px -12px rgba(255,255,255,0.1);
          // box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
          color: #99a1a7;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAAAmJLR0QAOfWIqzoAAAAJcEhZcwAADdcAAA3XAUIom3gAAAGZSURBVFgJ7cFBZJtxHMfhL3+hwpR5KTGqTOlldixRapcSalQvuZQqIXYeO9Yuo8bkUnrcLdQIM6rMmBAjx12mVChVqkSJEC+f0UPz+2dZx/v+ppc+jx7cG57yhkO69DhlTf4o0SRlrCxvVLnCasobNWLnJPLFEtdYKavyxSy/iO3IF4FjYh/kjXfEvhHki5fEzpiTLxboY40oyxczdInV5Y0GsYa8sUnsiCBfzNPHuqQkXxToENuQN/aI7cobL0ixvhDki4RzrB6P5Y0W1ohleaNO7LW8scgA64ggXxT4gXVBIm/sYqWsyRvPGWG9lzcCHawuBWVHkTn9gW2sAYvKiiptUqClCAv0sWrKhlmOGVvXLQLfsVrKijZWW7eoY12QKBtKTFrWDZ5wjVVRVhQYEjvUDT5jHSgPOsRGzEu8wjqhqDx4y6QmFYaMpawoH8r8y77yInDJXa5IlB8fuUtFHtjg7xrywSOGTHdCUV74xDQpK/LDOtPsyROBHpN+MiNfbBEb8kz++MrYgKr+D5bYpMYWqxT14D78BnL/sMKl6kh4AAAAAElFTkSuQmCC");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }

      }
      div {
        width: 47%;
        display: inline-block;
        margin: 0 auto;
        select {
          font-size: 1.3rem;
          width: 95%;
          display: inline-block;
          option {
            color: rgba(0,0,0,0.85);
            text-align: center;
          }
        }
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
        background-color: #fff;
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
