import { IconType } from 'react-icons/lib'
import { NavLink, useLocation } from 'react-router-dom'

export interface LinkItemProps {
  title: string
  url: string
  icon: IconType
}

const LinkItem = ({ title, url, icon: Icon }: LinkItemProps) => {
  const location = useLocation()
  const { pathname } = location

  const className = `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
    (pathname === url || pathname.includes('dashboard')) &&
    'bg-graydark dark:bg-meta-4'
  }`
  return (
    <li>
      <NavLink to={url} className={className}>
        <Icon />
        {title}
      </NavLink>
    </li>
  )
}

export default LinkItem
