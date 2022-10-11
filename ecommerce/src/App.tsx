import { FunctionComponent } from 'react'

// Componentes
import Header from './components/header/header.component'

interface AppProps {
  message?: string
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  return <Header />
}

export default App

