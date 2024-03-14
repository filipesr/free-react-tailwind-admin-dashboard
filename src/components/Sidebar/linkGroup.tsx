import React, { useEffect, useState } from 'react'
import { IconType } from 'react-icons/lib'
import { NavLink, useLocation } from 'react-router-dom'
import SidebarLinkGroup from './SidebarLinkGroup'
import LinkItem, { LinkItemProps } from './linkItem'
import { BsChevronRight } from 'react-icons/bs'

interface SidebarProps {
  title: string
  icon: IconType
  itens: LinkItemProps[]
}

const LinkGroup = ({ title, itens, icon: Icon }: SidebarProps) => {
  const location = useLocation()
  const { pathname } = location

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString())
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded')
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  const isActive = itens.filter(({ url }) => url === pathname).length > 0
  // console.debug(title, pathname, itens, isActive)

  return (
    <SidebarLinkGroup activeCondition={isActive}>
      {(handleClick, open) => {
        return (
          <React.Fragment>
            <NavLink
              to="#"
              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                isActive && 'bg-graydark dark:bg-meta-4'
              }`}
              onClick={(e) => {
                e.preventDefault()
                sidebarExpanded ? handleClick() : setSidebarExpanded(true)
              }}
            >
              <Icon />
              {title}
              <BsChevronRight
                className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current transition-transform ${
                  open && 'rotate-90'
                }`}
              />
            </NavLink>
            {/* <!-- Dropdown Menu Start --> */}
            <div
              className={`translate transform overflow-hidden  ${
                !open && 'hidden'
              }`}
            >
              <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                {itens.map(LinkItem)}
              </ul>
            </div>
            {/* <!-- Dropdown Menu End --> */}
          </React.Fragment>
        )
      }}
    </SidebarLinkGroup>
  )
}

export default LinkGroup
