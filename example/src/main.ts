import Kdu from 'kdu'
import App from './App.kdu'
import store from './store'

new Kdu({
  el: '#app',
  store,
  render: h => h(App, {
    props: { propMessage: 'World' }
  })
})
