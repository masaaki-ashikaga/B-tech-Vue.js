<template>
  <div id="app">
    <ToDo></ToDo>
  </div>
</template>

<script>
import ToDo from './components/ToDo';
import 'bulma/css/bulma.css';

export default {
  name: 'App',
  components: {
    ToDo,
  }
};
</script>

<style>
</style>
