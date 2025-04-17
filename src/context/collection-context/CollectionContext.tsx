import { ClockCollection } from '@/models/clock-collection.model'
import { SampleCollection } from '@/samples/sample-collection'
import { useReducer } from 'react'
import {
  CollectionAction,
  collectionReducer,
  CollectionContext,
} from './collection-context.service'

export default function CollectionContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [collection, dispatch] = useReducer<
    ClockCollection,
    [CollectionAction]
  >(collectionReducer, SampleCollection)
  return (
    <CollectionContext value={[collection, dispatch]}>
      {children}
    </CollectionContext>
  )
}
