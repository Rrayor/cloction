import ClockGrid from '@/components/clock-grid/ClockGrid'
import './App.css'
import Header from '@/components/header/Header'
import CollectionContextProvider from '@/components/collection-context/CollectionContext'

function App() {

  return (
    <main>
      <CollectionContextProvider>
        <Header />
        <ClockGrid />
      </CollectionContextProvider>
    </main>
  )
}

export default App
