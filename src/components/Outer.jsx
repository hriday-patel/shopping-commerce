const Outer = ({children}) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
        {children}
    </div>
  )
}
export default Outer