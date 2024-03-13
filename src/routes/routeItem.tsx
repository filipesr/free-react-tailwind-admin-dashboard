import PageTitle from '@/components/PageTitle'
import { Route } from 'react-router-dom'
interface RouteItemProps {
  title: string
  body: React.FC<object>
  url?: string
  index?: boolean
}

const RouteItem = ({
  title,
  url: path,
  body: Body,
  index = false
}: RouteItemProps) => {
  return (
    <Route
      path={path}
      element={
        <>
          <PageTitle title={title} />
          <Body />
        </>
      }
      index={index}
    />
  )
}

export default RouteItem
