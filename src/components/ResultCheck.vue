<template>
<div>
<div class="w-600 box">
  <div>
    <h1 class="is-size-5 has-text-weight-bold">以下の内容をご確認ください</h1>
  </div>
  <div class="customer-info-form">
    <form>
      <div>
        <p class="has-text-link">-性別-</p>
        <div class="mt-2 mb-5 ml-5">
          <p>{{gender}}</p>
        </div>
      </div>

      <div>
        <p class="has-text-link">-生年月日-</p>
        <div class="mt-2 mb-5 ml-5">
          <p>{{year}}年{{month}}月{{date}}日</p>
        </div>
      </div>

      <div>
        <p class="has-text-link">
          -現在、生命保険に加入されていますか？-
        </p>
        <div class="mt-2 mb-5 ml-5">
          <p>{{question1}}</p>
        </div>
      </div>

      <div>
        <p class="has-text-link">
          -現在入院中ですか。または、最近3ヶ月以内に医師の診察・検診の結果、入院・手術を勧められたことはありますか？-
        </p>
        <div class="mt-2 mb-5 ml-5">
          <p>{{question2}}</p>
        </div>
      </div>

      <div>
        <p class="has-text-link">
          -過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院したことがありますか？-
        </p>
        <div class="mt-2 mb-5 ml-5">
          <p>{{question3}}</p>
        </div>
      </div>

      <div>
        <p class="has-text-link">-ご相談内容-</p>
        <div class="mt-2 mb-5 ml-5">
          <p>{{ message }}</p>
        </div>
      </div>


    </form>
  </div>
</div>
<div class="has-text-centered mb-6">
  <router-link to="/third" class="button is-primary mr-6">前に戻る</router-link>
  <router-link to="" class="button is-primary">次へ進む</router-link>
</div>
</div>
</template>

<script>
import 'bulma/css/bulma.css';
export default {
  data(){
    return{
      answerData: {
        question1: '',
        question2: '',
      }
    };
  },
  computed: {
    message() {
      return this.$store.getters.message;
    },
    gender() {
      return this.$store.getters.gender;
    },
    year() {
      return this.$store.getters.year;
    },
    month() {
      return this.$store.getters.month;
    },
    date() {
      return this.$store.getters.date;
    },
    question1() {
      return this.$store.getters.question1;
    },
    question2() {
      return this.$store.getters.question2;
    },
    question3() {
      return this.$store.getters.question3;
    },
  }
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