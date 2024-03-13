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
    url: '/exemple/forms/form-layout',
    body: FormLayout,
    icon: BsMenuButton
  },
  {
    title: 'Form Elements',
    url: '/exemple/forms/form-elements',
    body: FormElements,
    icon: BsInputCursorText
  },
  {
    title: 'Alerts',
    url: '/exemple/ui/alerts',
    body: Alerts,
    icon: BsExclamationCircle
  },
  {
    title: 'Buttons',
    url: '/exemple/ui/buttons',
    body: Buttons,
    icon: BsMenuButton
  }
]

export const roustesUser = [
  {
    title: 'Profile',
    url: '/exemple/profile',
    body: Profile,
    icon: BsPerson
  },
  {
    title: 'Signin',
    url: '/exemple/auth/signin',
    body: SignIn,
    icon: BsBoxArrowInRight
  },
  {
    title: 'Signup',
    url: '/exemple/auth/signup',
    body: SignUp,
    icon: BsBoxArrowLeft
  }
]

export const routesRest = [
  {
    title: 'Dashboard',
    url: '/exemple/',
    body: ECommerce,
    icon: BsFillPieChartFill
  },
  {
    title: 'Basic Chart',
    url: '/exemple/chart',
    body: Chart,
    icon: BsGraphDown
  },
  {
    title: 'Calendar',
    url: '/exemple/calendar',
    body: Calendar,
    icon: BsCalendarRange
  },
  {
    title: 'Tables',
    url: '/exemple/tables',
    body: Tables,
    icon: BsTable
  },
  {
    title: 'Settings',
    url: '/exemple/settings',
    body: Settings,
    icon: BsTools
  }
]

export const routesApp = [
  {
    title: 'CRUD',
    url: '/exemple/forms/form-elements',
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
