/**
 * @description: 简易状态管理器
 */

export default class Store {
  state = {}
  static store = null

  constructor(initialState) {
    if (initialState) {
      this.state = initialState
    }
  }

  /**
   * @description: 返回单例
   * @param {*} initialState
   * @return {Store} 实例本身
   */
  static getStore(initialState) {
    if (!Store.store) {
      Store.store = new Store(initialState)
    }

    return Store.store
  }

  /**
   * @description: 状态更改
   * @param {string} key
   * @param {unknown} val
   */
  mutation(key, val) {
    this.state[key] = val
    console.log('==============================')
    console.log(`store mutation ${key}: `)
    console.log(val)
    console.log('==============================')
    console.log(`store state: `)
    console.log(this.state)
    console.log('==============================')
  }
}
