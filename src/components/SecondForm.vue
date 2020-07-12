<template>
<div>
<div class="w-600 box">
  <div>
    <h1 class="is-size-5 has-text-weight-bold">以下にお答えください</h1>
  </div>
  <div class="customer-info-form">
    <form>
      <div>
        <p class="has-text-weight-bold has-text-link">現在、生命保険に加入されていますか？</p>
        <div class="control mt-2 mb-6">
          <label class="radio mr-3">
            <input type="radio" name="question1" id="yes" value="yes" v-model="answerData.question1">はい
          </label>
          <label class="radio">
            <input type="radio" name="question1" id="no" value="no" v-model="answerData.question1">いいえ
          </label>
        </div>
      </div>

      <div v-show="answerData.question1">
        <p class="has-text-weight-bold has-text-link">
          現在入院中ですか。または、最近3ヶ月以内に医師の診察・検診の結果、入院・手術を勧められたことはありますか？
        </p>
        <div class="control mt-2 mb-6">
          <label class="radio mr-3">
            <input type="radio" name="question2" id="yes" value="yes" v-model="answerData.question2">はい
          </label>
          <label class="radio">
            <input type="radio" name="question2" id="no" value="no" v-model="answerData.question2">いいえ
          </label>
        </div>
      </div>

      <div v-show="answerData.question2">
        <p class="has-text-weight-bold has-text-link">
          過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院したことがありますか？
        </p>
          <div class="control mt-2">
          <label class="radio mr-3"><input type="radio" name="question3" id="yes">はい</label>
          <label class="radio"><input type="radio" name="question3" id="no">いいえ</label>
        </div>
      </div>
    </form>
  </div>
</div>
<div class="has-text-centered">
  <button type="submit" class="button is-primary mr-6">前に戻る</button>
  <button type="submit" class="button is-primary">次へ進む</button>
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