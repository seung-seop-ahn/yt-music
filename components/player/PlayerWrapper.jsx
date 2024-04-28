'use client'

import React from 'react'
import usePlayerState from '@/hooks/usePlayerState'
import PlayerContents from '@/components/player/PlayerContents'

const PlayerWrapper = () => {
  const { isVisiblePlayer } = usePlayerState()

  if (!isVisiblePlayer) return null

  return (
    <div className={'fixed bottom-0 h-[72px] w-full bg-neutral-900'}>
      <PlayerContents />
    </div>
  )
}

export default PlayerWrapper
