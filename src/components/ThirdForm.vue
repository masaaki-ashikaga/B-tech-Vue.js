<template>
<div>
<div class="w-600 box">
  <div>
    <h1 class="is-size-5 has-text-weight-bold">ご相談内容をご記入ください</h1>
  </div>
  <div class="customer-info-form">
    <form>
      <div>
        <p class="has-text-weight-bold has-text-link mb-5">-ご相談内容-</p>
        <textarea class="textarea" rows="10" v-model="message"></textarea>
      </div>
    </form>
  </div>
</div>
<div class="has-text-centered">
  <router-link to="/second" class="button is-primary mr-6">前に戻る</router-link>
  <router-link to="/check" class="button is-primary" @click="goResultCheckPage">次へ進む</router-link>
</div>
</div>
</template>

<script>
import 'bulma/css/bulma.css';
export default {
  computed: {
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.commit('updateMessage', value);
      }
    }
  },
}
</script>

<style scoped>
  .form-title{
    border-bottom: solid 1px;
    text-align: center;
  }
  .w-600 {
    width: 600px;
    border: solid 1px;
    margin: 50px auto;
  }
  .customer-info-form{
    padding: 20px;
  }
</style>