import Kdu, { CreateElement } from 'kdu'
import Component from '../../../lib/index'

@Component
export default class World extends Kdu {
  render (h: CreateElement) {
    return <p>This is rendered via TSX</p>
  }
}
