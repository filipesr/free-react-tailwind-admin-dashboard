import { Route, Routes } from 'react-router-dom'

import PageTitle from '@/components/PageTitle'
import SignIn from '@/pages/_examples/Authentication/SignIn'
import SignUp from '@/pages/_examples/Authentication/SignUp'
import Calendar from '@/pages/_examples/Calendar'
import Chart from '@/pages/_examples/Chart'
import ECommerce from '@/pages/_examples/Dashboard/ECommerce'
import FormElements from '@/pages/_examples/Form/FormElements'
import FormLayout from '@/pages/_examples/Form/FormLayout'
import Profile from '@/pages/_examples/Profile'
import Settings from '@/pages/_examples/Settings'
import Tables from '@/pages/_examples/Tables'
import Alerts from '@/pages/_examples/UiElements/Alerts'
import Buttons from '@/pages/_examples/UiElements/Buttons'

import {
  BsBoxArrowInRight,
  BsBoxArrowLeft,
  BsCalendarRange,
  BsExclamationCircle,
  BsFillPieChartFill,
  BsGraphDown,
  BsInputCursorText,
  BsMenuButton,
  BsPerson,
  BsTable,
  BsTools
} from 'react-icons/bs'

import RouteItem from './routeItem'

export const routesForm = [
  {
    title: 'Form Layout',
    url: '/forms/form-layout',
    body: FormLayout,
    icon: BsMenuButton
  },
  {
    title: 'Form Elements',
    url: '/forms/form-elements',
    body: FormElements,
    icon: BsInputCursorText
  },
  {
    title: 'Alerts',
    url: '/ui/alerts',
    body: Alerts,
    icon: BsExclamationCircle
  },
  {
    title: 'Buttons',
    url: '/ui/buttons',
    body: Buttons,
    icon: BsMenuButton
  }
]

export const roustesUser = [
  {
    title: 'Profile',
    url: '/profile',
    body: Profile,
    icon: BsPerson
  },
  {
    title: 'Signin',
    url: '/auth/signin',
    body: SignIn,
    icon: BsBoxArrowInRight
  },
  {
    title: 'Signup',
    url: '/auth/signup',
    body: SignUp,
    icon: BsBoxArrowLeft
  }
]

export const routesRest = [
  {
    title: 'Dashboard',
    url: '/',
    body: ECommerce,
    icon: BsFillPieChartFill
  },
  {
    title: 'Basic Chart',
    url: '/chart',
    body: Chart,
    icon: BsGraphDown
  },
  {
    title: 'Calendar',
    url: '/calendar',
    body: Calendar,
    icon: BsCalendarRange
  },
  {
    title: 'Tables',
    url: '/tables',
    body: Tables,
    icon: BsTable
  },
  {
    title: 'Settings',
    url: '/settings',
    body: Settings,
    icon: BsTools
  }
]

export const routesApp = [
  {
    title: 'CRUD',
    url: '/forms/form-elements',
    body: FormElements,
    icon: BsInputCursorText
  }
]
export const routes = [...roustesUser, ...routesForm, ...routesRest]

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard" />
              <ECommerce />
            </>
          }
        />
        {routes.map(RouteItem)}
      </Routes>
    </>
  )
}

export default MainRoutes
