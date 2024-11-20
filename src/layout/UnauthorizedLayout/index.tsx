import { Outlet } from 'react-router-dom'
import { UnauthorizedLayoutContainer } from './styles'

export function UnauthorizedLayout() {
  return (
    <UnauthorizedLayoutContainer>
      <Outlet />
    </UnauthorizedLayoutContainer>
  )
}
