import Loading from './components/Loading/Loading.vue'
import Round from './components/Round/Round.vue'

module.exports = {
  install: function (Vue, options) {
    Vue.component('lc-loading', Loading);
    Vue.component('lc-round', Round);
  }
};
