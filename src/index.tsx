import App from 'App'
import { createRoot } from 'react-dom/client'

/**
 * Root element where id the React app created
 * @type {HTMLElement}
 */
const container = document.getElementById('app')

if (!container) {
  throw new Error('Root element with id "app" not found.')
}

// Provide necessary React root setup
const root = createRoot(container)
root.render(<App />)
