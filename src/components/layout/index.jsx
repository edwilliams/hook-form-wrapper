const Layout = ({ left, right, output }) => {
  return (
    <div className="">
      <div className="flex justify-around">
        <div className="w-1/2">
          <h3 className="text-lg bold underline mb-8">Form</h3>
          {left()}
        </div>

        <div className="w-1/2">
          <h3 className="text-lg bold underline mb-8">Form Summary</h3>
          {right()}
        </div>
      </div>
      <div className="w-full">{output()}</div>
    </div>
  )
}

export default Layout
