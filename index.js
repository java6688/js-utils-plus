import { removeDuplicates, isNotEmpty, merge } from './utils/array'
import { 
  copyToClipboard,
  clearCookies,
  getSelectedText,
  isDarkMode,
  goToTop,
  isTabInView,
  isAppleDevice,
  scrolledToBottom,
  redirect,
  showPrintDialog 
} from './utils/browser'
import { 
  isDateValid,
  dayDif,
  dayOfYear,
  timeFromDate
} from './utils/date'
import { 
  isEven,
  average,
  random,
  round,
  rgbToHex,
  randomHex 
} from './utils/number'
import { 
  capitalize,
  reverse,
  randomString,
  truncateString,
  stripHtml
} from './utils/string'
import { 
  randomBoolean,
  trueTypeOf,
  isEmpty
} from './utils/index'

export default {
  removeDuplicates, isNotEmpty, merge,
  copyToClipboard,
  clearCookies,
  getSelectedText,
  isDarkMode,
  goToTop,
  isTabInView,
  isAppleDevice,
  scrolledToBottom,
  redirect,
  showPrintDialog,
  isDateValid,
  dayDif,
  dayOfYear,
  timeFromDate,
  isEven,
  average,
  random,
  round,
  rgbToHex,
  randomHex,
  capitalize,
  reverse,
  randomString,
  truncateString,
  stripHtml,
  randomBoolean,
  trueTypeOf,
  isEmpty
}