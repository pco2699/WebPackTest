import Vue from 'vue'
import "../css/index.css"

const root = document.querySelector('#root')
root.innerHTML = `<p>Hello webpack.</p>`

const vm = new Vue({
  el: '#example',
  data: {
    name: 'みかん',
    price: 100
  }
});
