const Layout = ({ title, left, right, output, code }) => {
  return (
    <div className="">
      <h3 className="underline text-xl">{title}</h3>
      <hr className="mt-4" />
      <div className="flex justify-around">
        <div className="w-1/2">{left && left()}</div>

        <div className="w-1/2">{right && right()}</div>
      </div>
      <div className="w-full">{output && output()}</div>
      <xmp
        dangerouslySetInnerHTML={{
          __html: code
        }}
      />
    </div>
  )
}

export default Layout
