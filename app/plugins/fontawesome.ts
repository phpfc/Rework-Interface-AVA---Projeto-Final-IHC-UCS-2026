import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faArrowLeft,
  faCheck,
  faTimes,
  faBookmark as fasBookmark,
  faFlag as fasFlag,
  faChevronLeft,
  faChevronRight,
  faFilePdf,
  faVideo,
  faLink,
  faFileWord,
  faSearch,
  faGraduationCap,
  faBuilding,
  faCalendarAlt,
  faPlay,
  faFile,
  faChevronDown,
  faHome,
  faFolder,
  faFilter,
  faBook,
} from '@fortawesome/free-solid-svg-icons'
import {
  faBookmark as farBookmark,
  faFlag as farFlag,
} from '@fortawesome/free-regular-svg-icons'

config.autoAddCss = false

library.add(
  faBars,
  faArrowLeft,
  faCheck,
  faTimes,
  fasBookmark,
  fasFlag,
  faChevronLeft,
  faChevronRight,
  faFilePdf,
  faVideo,
  faLink,
  faFileWord,
  faSearch,
  faGraduationCap,
  faBuilding,
  faCalendarAlt,
  faPlay,
  faFile,
  faChevronDown,
  faHome,
  faFolder,
  faFilter,
  faBook,
  farBookmark,
  farFlag,
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
