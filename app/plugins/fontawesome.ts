import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faArrowLeft,
  faBell,
  faEnvelope,
  faUsers,
  faChartBar,
  faHandsHelping,
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
  faCog,
  faSignOutAlt,
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
  faBell,
  faEnvelope,
  faUsers,
  faChartBar,
  faHandsHelping,
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
  faCog,
  faSignOutAlt,
  faFilter,
  faBook,
  farBookmark,
  farFlag,
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
