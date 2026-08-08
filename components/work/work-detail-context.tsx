'use client'

import * as React from 'react'

import type { WorkItem } from '@/lib/types/work'
import { WorkDetailDialog } from './work-detail-dialog'

/**
 * Holds whichever work item is currently expanded, for the whole page.
 *
 * One dialog is mounted at the root and fed by context, rather than each card
 * owning its own. With around fifteen cards on the page that is fifteen fewer
 * focus traps and scroll locks to keep in sync, and it makes "open the dialog
 * for this id" something any part of the page can do — which is what lets a
 * `#work-fabins` link from the experience section open the FABINS case study.
 */

interface WorkDetailContextValue {
  open: (item: WorkItem) => void
  close: () => void
}

const WorkDetailContext = React.createContext<WorkDetailContextValue | null>(null)

export function WorkDetailProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = React.useState<WorkItem | null>(null)

  const open = React.useCallback((item: WorkItem) => setActive(item), [])
  const close = React.useCallback(() => setActive(null), [])

  const value = React.useMemo(() => ({ open, close }), [open, close])

  return (
    <WorkDetailContext.Provider value={value}>
      {children}
      <WorkDetailDialog item={active} onClose={close} />
    </WorkDetailContext.Provider>
  )
}

export function useWorkDetail(): WorkDetailContextValue {
  const context = React.useContext(WorkDetailContext)

  if (!context) {
    throw new Error('useWorkDetail must be used inside a WorkDetailProvider')
  }

  return context
}
