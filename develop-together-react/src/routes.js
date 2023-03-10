import React from 'react'


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// QnA
const QnAList = React.lazy(() => import('./views/board/qna/list/QnA'))
const QnADetail = React.lazy(() => import('./views/board/qna/detail/QnA'))
const QnAWrite = React.lazy(() => import('./views/board/qna/write/QnA'))
const QnATagSearch = React.lazy(() => import('./views/board/qna/tagsearch/QnA'))
const QnAEdit = React.lazy(() => import('./views/board/qna/edit/QnA'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

//Class
const ClassMain = React.lazy(() => import('./views/class/class/ClassMain'))
const ClassDetailMain = React.lazy(() => import('./views/class/class/classdetail/ClassDetailMain'))
const ClassRegisterMain = React.lazy(() => import('./views/class/class/classregister/ClassRegisterMain'))
const ClassEdit = React.lazy(() => import('./views/class/class/classregister/ClassEdit'))

// Teacher
const TeacherMain = React.lazy(() => import('./views/class/teacher/TeacherMain'))
const TeacherDetailMain = React.lazy(() => import('./views/class/teacher/teacherdetail/TeacherDetailMain'))
const TeacherRegisterMain = React.lazy(() => import('./views/class/teacher/teacherregister/TeacherRegisterMain'))
const TeacherEdit = React.lazy(() => import('./views/class/teacher/teacherregister/TeacherEdit'))

//Project
const FreelancerMain = React.lazy(() => import('./views/project/freelancer/FreelancerMain'))
const ProjectMain = React.lazy(() => import('./views/project/project/ProjectMain'))
const FreelancerDetailMain = React.lazy(() => import('./views/project/freelancer/freelancerdetail/FreelancerDetailMain'))
const ProjectRegist = React.lazy(() => import('./views/project/freelancer/ProjectRegist'))
const PersonalHistoryRegist = React.lazy(() => import('./views/project/freelancer/PersonalHistoryRegist'))
const FreelancerProfileRegist = React.lazy(() => import('./views/project/freelancer/FreelancerProfileRegist'))
const ProjectEdit = React.lazy(() => import('./views/project/freelancer/ProjectEdit'))
const PersonalHistoryEdit = React.lazy(() => import('./views/project/freelancer/PersonalHistoryEdit'))




//Search
const SearchMain = React.lazy(() => import('./views/search/SearchMain'))



const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

//Mypage
const Mypage = React.lazy(() => import('./views/pages/Mypage/Mypage'))
const FreeEdit = React.lazy(() => import('./views/pages/Mypage/edit/FreeEdit'))
const CompanyEdit = React.lazy(() => import('./views/pages/Mypage/edit/CompanyEdit'))
const AcademyEdit = React.lazy(() => import('./views/pages/Mypage/edit/AcademyEdit'))
const Blogs = React.lazy(() => import('./views/pages/blogs/blog'))

const routes = [
  
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'ClassMain', element: ClassMain },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/board/qna/list', name: 'Q&AList', element: QnAList },
  { path: '/board/qna/detail', name: 'Q&ADetail', element: QnADetail },
  { path: '/board/qna/write', name: 'Q&AWrite', element: QnAWrite },
  { path: '/board/qna/tagsearch', name: 'Q&ATagSearch', element: QnATagSearch },
  { path: '/board/qna/edit', name: 'Q&AEdit', element: QnAEdit },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  
  { path: '/project/freelancer', name: 'FreelancerMain', element: FreelancerMain },
  { path: '/project/project', name: 'ProjectMain', element: ProjectMain },
  { path: '/project/freelancer/freelancerdetail', name: 'FreelancerDetailMain', element: FreelancerDetailMain },
  { path: '/project/freelancer/projectregist', name: 'ProjectRegist', element: ProjectRegist },
  { path: '/project/freelancer/projectedit', name: 'ProjectEdit', element: ProjectEdit },
  { path: '/project/freelancer/personalhistoryregist', name: 'PersonalHistoryRegist', element: PersonalHistoryRegist },
  { path: '/project/freelancer/personalhistoryedit', name: 'PersonalHistoryEdit', element: PersonalHistoryEdit },
  { path: '/project/freelancer/freelancerprofileregist', name: 'FreelancerProfileRegist', element: FreelancerProfileRegist },

  
  { path: '/class/class', name: 'ClassMain', element: ClassMain },
  { path: '/class/class/classdetail', name: 'ClassDetailMain', element: ClassDetailMain },
  { path: '/class/class/classregister', name: 'ClassRegisterMain', element: ClassRegisterMain },
  { path: '/class/class/classedit', name: 'ClassEdit', element: ClassEdit },

  { path: '/class/teacher', name: 'TeacherMain', element: TeacherMain },
  { path: '/class/teacher/teacherdetail', name: 'TeacherDetailMain', element: TeacherDetailMain },
  { path: '/class/teacher/teacherregister', name: 'TeacherRegisterMain', element: TeacherRegisterMain },
  { path: '/class/teacher/teacheredit', name: 'TeacherEdit', element: TeacherEdit },
  
  
  { path: '/search', name: 'SearchMain', element: SearchMain },

  
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },



  { path: '/Mypage', name: 'Mypage', element: Mypage },
  { path: '/FreeEdit', name: 'FreeEdit', element: FreeEdit },
  { path: '/CompanyEdit', name: 'CompanyEdit', element: CompanyEdit },
  { path: '/AcademyEdit', name: 'AcademyEdit', element: AcademyEdit },
  { path: '/Blogs', name: 'Blogs', element: Blogs },



]



export default routes
