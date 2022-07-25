import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/home'
import ConferencesDetail from '@/views/conferences/conference-detail'

import History from '@/views/history/history'
import Main from '@/views/main/main'

/* 로그인 회원가입 등 계정 관련 페이지 */
import LoginView from '@/views/accounts/LoginView'
import SignupView from '@/views/accounts/SignupView'
import LogoutView from '@/views/accounts/LogoutView'
import FindUseridView from '@/views/accounts/FindUseridView'
import FindUserPassword from '@/views/accounts/FindUserPassword'

/* 스터디 모집 페이지 */
import StudyRecruitment from '@/views/home/components/study-recruitment'

/* 공지사항 */
import noticeList from '@/views/notice/noticeListView'
import noticeNewView from '@/views/notice/noticeNewView'
import noticeDetailView from '@/views/notice/noticeDetailView'
import noticeEditView from '@/views/notice/noticeEditView'

/* 마이 페이지 */
import MyPage from '@/views/mypage/MyPage'
import ChangePassword from '@/views/mypage/changepassword/ChangePassword'
import MyAccount from '@/views/mypage/myaccount/MyAccount'
import Withdrawal from '@/views/mypage/withdrawal/Withdrawal'

const fullMenu = require('@/views/main/menu.json')
function makeRoutesFromMenu () {
  let routes = Object.keys(fullMenu).map((key) => {
    if (key === 'home') {
      return { path: fullMenu[key].path, name: key, component: Home  }
    } else if (key === 'history') {
      return { path: fullMenu[key].path, name: key, component: History }
    } else { // menu.json 에 들어있는 로그아웃 메뉴
      return null
    }
  })
  // 로그아웃 파싱한 부분 제거
  routes = routes.filter(item => item)
  // menu 자체에는 나오지 않는 페이지 라우터에 추가(방 상세보기)
  routes.push({
    path: '/conferences/:conferenceId',
    name: 'conference-detail',
    component: ConferencesDetail
  },{
    path: '/home',
    name: 'home',
    component: Home,
    redirect:'/home/studyrecruitment',
    children : [{
      path:'studyrecruitment',
      name:'studyrecruitment',
      component : StudyRecruitment,
    },{
      path: 'login',
      name: 'login',
      component: LoginView
      // component: () => import("@/views/account/login.vue")
    },{
      path: 'signup',
      name: 'signup',
      component: SignupView
    },{
      path: 'logout',
      name: 'logout',
      component: LogoutView
    },{
<<<<<<< HEAD
      path: 'findid',
      name: 'findid',
      component:FindUseridView
=======
      path:'finduserpassword',
      name: 'finduserpassword',
      component :FindUserPassword
    },{
      path:'mypage',
      name: 'mypage',
      component :MyPage,
      redirect: '/home/mypage/myaccount',
      children : [
        {
          path: 'myaccount',
          name: 'myaccount',
          component :MyAccount,
        },{
          path: 'changepassword',
          name: 'changepassword',
          component :ChangePassword,
        },{
          path: 'withdrawal',
          name: 'withdrawal',
          component :Withdrawal,
        }
      ]
>>>>>>> b8b04c460e26b16e0a60de498fc308852b8b3700
    }]
  },{
    path: '/',
    name: 'main',
    component:Main
  },{
    path: '/notice',
    name: 'notices',
    component: noticeList
  },{
    path: '/notice/new',
    name: 'noticeNew',
    component: noticeNewView
  },{
    path: '/notice/:noticeNo',
    name: 'notice',
    component: noticeDetailView
  },
  {
    path: '/notice/:noticeNo/edit',
    name: 'noticeEdit',
    component: noticeEditView
  },

  )
  return routes
}

const routes = makeRoutesFromMenu()

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  console.log(to)
})

export default router
