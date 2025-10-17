import { lazy, Suspense } from 'react'

const TestPage = lazy(() => import('./TestPage'))

// Using a direct import instead of lazy would fix the HMR issue too (but there would be a full-reload on change)
// import TestPage from './TestPage'

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <TestPage />
  </Suspense>
)

export default App
