import wordEnding from './wordEnding.js'

const wordEndingWrapper = {
  install (Vue, options) {
    Vue.directive('word-ending', wordEnding)
  }
}

export default wordEndingWrapper
