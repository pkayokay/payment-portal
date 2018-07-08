Vue.component('tab-item', {
  props: ['items'],
  template: `
    <li class="is-active">
    <a class="tabs__link">
      <span class="tabs__icon icon is-small">
        <i class="fas" v-bind:class="items.icon" aria-hidden="true"></i>
      </span>
      <span>{{ items.text }}</span>
    </a>
  </li>`
})

var tabs = new Vue({
  el: '#tabs',
  data: {
    tabList: [
      { id: 0, text: 'Dashboard', icon: 'fa-tachometer-alt'},
      { id: 1, text: 'Payment', icon: 'fa-dollar-sign'},
      { id: 2, text: 'Activity', icon: 'fa-history'},
      { id: 3, text: 'Settings', icon: 'fa-cog'}
    ]
  }
})