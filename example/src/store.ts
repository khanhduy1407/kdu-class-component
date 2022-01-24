import kdu from 'kdu'
import Kduxs from 'kduxs'

interface CounterState {
  count: number
}

kdu.use(Kduxs)

const state = {
  count: 0
}

const mutations = {
  increment (state: CounterState) {
    state.count++
  }
}

export default new Kduxs.Store({
  state,
  mutations
})
