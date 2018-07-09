Vue.component('tab-item', {
  props: ['items'],
  template: `
    <li>
      <a class="tabs__link">
        <span class="tabs__icon icon is-small">
          <i class="fas" :class="items.icon" aria-hidden="true"></i>
        </span>
        <span>{{ items.text }}</span>
      </a>
    </li>`
})

var tabs = new Vue({
  el: '#tabs',
  data: {
    tabList: [
      { id: 0, text: 'Dashboard', icon: 'fa-tachometer-alt', active: true},
      { id: 1, text: 'Payment', icon: 'fa-dollar-sign', active: false},
      { id: 2, text: 'Activity', icon: 'fa-history', active: false},
      { id: 3, text: 'Settings', icon: 'fa-cog', active: false}
    ]
  },
  methods: {
    toggleActive: function(tab) {
      this.tabList.map(item => {
        item.active = false
      })
      tab.active = true
    }
  }
})