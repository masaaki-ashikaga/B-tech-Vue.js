<template>
<div>
<div class="w-600 box">
  <div>
    <h1 class="is-size-5 has-text-weight-bold">お客様の情報を入力してください</h1>
  </div>
  <div class="customer-info-form">
    <form>
      <p class="has-text-weight-bold has-text-link">-性別-</p>
      <div class="control mt-2 mb-5">
        <label class="radio"><input type="radio" name="gender" id="male" value="男性" v-model="gender">男性</label>
        <label class="radio"><input type="radio" name="gender" id="female" value="女性" v-model="gender">女性</label>
      </div>

      <p class="has-text-weight-bold has-text-link">-生年月日-</p>
      <div class="mt-2">
      <div class="select is-small">
      <select name="year" v-model="year">
        <option v-for="year in 63" :key="year">{{year + 1925}}年（昭和{{year}}）</option>
        <option v-for="year in 30" :key="year">{{year + 1988}}年（平成{{year}}）</option>
        <option v-for="year in 2" :key="year">{{year + 2018}}年（令和{{year}}）</option>
      </select>
      </div>
      年
      <div class="select is-small">
      <select name="month" v-model="month">
        <option v-for="month in 12" :key="month">{{month}}</option>
      </select>
      </div>
      月
      <div class="select is-small">
      <select name="date" v-model="date">
        <option v-for="date in 31" :key="date">{{date}}</option>
      </select>
      </div>
      日
      </div>
    </form>
  </div>
</div>
<div class="has-text-centered">
  <router-link to="/second" class="button is-primary">次へ進む</router-link>
</div>
</div>
</template>

<script>
import 'bulma/css/bulma.css';
export default {
  computed: {
    gender: {
      get() {
        return this.$store.getters.gender;
      },
      set(value) {
        this.$store.commit('updateGender', value);
      }
    },
    year: {
      get() {
        return this.$store.getters.year;
      },
      set(value) {
        this.$store.commit('updateYear', value);
      }
    },
    month: {
      get() {
        return this.$store.getters.month;
      },
      set(value) {
        this.$store.commit('updateMonth', value);
      }
    },
    date: {
      get() {
        return this.$store.getters.date;
      },
      set(value) {
        this.$store.commit('updateDate', value);
      }
    },
  },
};
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