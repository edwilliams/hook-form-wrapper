import { NavLink } from 'react-router-dom'

const Menu = ({ children }) => (
  <div>
    <div className="flex justify-between p-4">
      <NavLink to={'/01'}>01</NavLink>
      <NavLink to={'/02'}>02</NavLink>
      <NavLink to={'/03'}>03</NavLink>
      <NavLink to={'/04'}>04</NavLink>
      <NavLink to={'/05'}>05</NavLink>
      <NavLink to={'/06'}>06</NavLink>
      <NavLink to={'/07'}>07</NavLink>
      <NavLink to={'/08'}>08</NavLink>
    </div>
    {children}
  </div>
)

export const withNav = Comp => () =>
  (
    <Menu>
      <Comp />
    </Menu>
  )
