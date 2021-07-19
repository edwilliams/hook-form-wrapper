const Layout = ({ left, right, output }) => {
  return (
    <div className="">
      <div className="flex justify-around">
        <div className="w-1/2">
          <h3 className="text-lg bold underline mb-8">Form</h3>
          {left && left()}
        </div>

        <div className="w-1/2">
          <h3 className="text-lg bold underline mb-8">Form Summary</h3>
          {right && right()}
        </div>
      </div>
      <div className="w-full">{output && output()}</div>
    </div>
  )
}

export default Layout
