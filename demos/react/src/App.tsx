import cls from "@xxhls/classnames"

function App() {
  return (
    <>
      <h1 className={cls('font-color-red', {
        'background-color-blue': true
      })}>Hello World</h1>
    </>
  )
}

export default App
