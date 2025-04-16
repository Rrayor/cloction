import { ClockCollection } from '@/models/clock-collection.model'
import { SampleCollection } from '@/samples/sample-collection'
import {createContext, useContext, useReducer } from 'react'

export enum CollectionActionType {
  ADD_CLOCK = 'ADD_CLOCK',
  UPDATE_CLOCK = 'UPDATE_CLOCK',
  DELETE_CLOCK = 'DELETE_CLOCK',
  UPDATE_SETTINGS = 'UPDATE_SETTINGS',
}

export type CollectionAction =
  | { type: CollectionActionType.ADD_CLOCK, payload: ClockCollection['clocks'][string] }
  | { type: CollectionActionType.UPDATE_CLOCK, payload: ClockCollection['clocks'][string] }
  | { type: CollectionActionType.DELETE_CLOCK, payload: string }
  | { type: CollectionActionType.UPDATE_SETTINGS, payload: Partial<ClockCollection['settings']> }

export const CollectionContext = createContext<ReturnType<typeof useReducer<ClockCollection, [ CollectionAction ]>> | undefined>(undefined)

function collectionReducer(state: ClockCollection, action: CollectionAction): ClockCollection {
  switch (action.type) {
    case CollectionActionType.ADD_CLOCK:
      return { ...state, clocks: { ...state.clocks, [action.payload.id]: action.payload } }
    case CollectionActionType.UPDATE_CLOCK:
      return { ...state, clocks: { ...state.clocks, [action.payload.id]: action.payload } }
    case CollectionActionType.DELETE_CLOCK: {
      const { [action.payload]: _, ...remainingClocks } = state.clocks
      return { ...state, clocks: remainingClocks }
    }
    case CollectionActionType.UPDATE_SETTINGS:
      return { 
        ...state, 
        settings: { 
          ...state.settings, 
          ...action.payload, 
          columnCount: action.payload?.columnCount || state.settings.columnCount  
        } 
      }
    default:
      return state
  }
}

export function useCollectionContext() {
  const collectionContext = useContext(CollectionContext)
    if (!collectionContext)
      throw new Error('CollectionContext is not available')
  return collectionContext
}

export default function CollectionContextProvider({ children }: { children: React.ReactNode }) {
  const [collection, dispatch] = useReducer<ClockCollection, [ CollectionAction ]>(collectionReducer, SampleCollection)
  return (
    <CollectionContext value={[collection, dispatch]}>
      {children}
    </CollectionContext>
  )
}