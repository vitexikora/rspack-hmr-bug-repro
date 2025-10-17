import md5 from 'md5'
import { isEqual } from 'es-toolkit'

const TestPage = () => {
  return (
    <div>
      {/* uncomment this to trigger "RuntimeError: factory is undefined (.../isEqual.mjs)" */}
      {/* {isEqual(1, 1) ? 'Equal' : 'Not Equal'} */}
      <br />
      {/* commenting this would fix the factory issue in HMR */}
      {md5('test')}
    </div>
  )
}

export default TestPage
