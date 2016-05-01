import { STORAGE_KEY } from './store'
import createLogger from 'vuex/logger'

// 每次mutation触发后对数据进行本地存储
const localStorageMiddleware = {
  onMutation (mutation, { notes }) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  }
}
// 如果在开发模式下使用内置的logger中间件进行debugging
export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStorageMiddleware]
  : [localStorageMiddleware]
