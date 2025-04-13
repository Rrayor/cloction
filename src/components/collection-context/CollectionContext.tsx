import { SampleCollection } from '@/samples/sample-collection'
import { createContext } from 'react'

export const CollectionContext = createContext(SampleCollection)

export default function CollectionContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <CollectionContext.Provider value={SampleCollection }>
      {children}
    </CollectionContext.Provider>
  )
}