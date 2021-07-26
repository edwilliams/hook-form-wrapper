import { NavLink } from 'react-router-dom'

const demos = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11']

const Menu = ({ children }) => (
  <div>
    <div className="flex justify-between p-4">
      {demos.map(demo => (
        <NavLink key={demo} to={`/${demo}`}>
          {demo}
        </NavLink>
      ))}
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
