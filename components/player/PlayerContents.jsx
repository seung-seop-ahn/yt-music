'use client'

import React, { useCallback, useEffect } from 'react'
import { PlayerSlider } from '@/components/ui/player-slider'
import { useAudio } from 'react-use'
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoShuffle,
  IoVolumeHighOutline,
} from 'react-icons/io5'
import { AiFillCaretUp, AiOutlinePause } from 'react-icons/ai'
import usePlayerState from '@/hooks/usePlayerState'
import { ClipLoader } from 'react-spinners'
import { RiPlayFill } from 'react-icons/ri'
import Image from 'next/image'
import { RxLoop } from 'react-icons/rx'

const PlayerContents = () => {
  const { activeSong, nextPlayerQueue, prevPlayerQueue, playNext, playBack } = usePlayerState()
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src,
    autoPlay: true,
  })

  const isLoading = activeSong?.src && state.buffered?.length === 0

  const onClickPrevBtn = () => {
    if (state.playing && state.time > 10) {
      controls.seek(0)
      return
    }
    if (prevPlayerQueue.length === 0) {
      return
    }
    playBack()
  }

  const onClickNextBtn = useCallback(() => {
    if (nextPlayerQueue.length === 0) {
      controls.pause()
    } else {
      playNext()
    }
  }, [controls, playNext, nextPlayerQueue.length])

  const onClickStartBtn = () => {
    if (activeSong) {
      controls.play()
    } else {
      playNext()
    }
  }

  const onClickPauseBtn = () => {
    controls.pause()
  }

  useEffect(() => {
    ref?.current?.addEventListener('ended', onClickNextBtn)
    return () => {
      ref?.current?.removeEventListener('ended', onClickNextBtn)
    }
  }, [ref, onClickNextBtn])

  return (
    <div className={'h-full w-full relative'}>
      <div className={'absolute top-[-16px] w-full'}>
        <PlayerSlider
          className={'w-full'}
          defaultValue={[0]}
          value={[state.time]}
          max={state.duration}
          onValueChange={(value) => {
            controls.seek(value)
          }}
        />
      </div>
      {audio}
      <section className={'flex flex-row justify-between items-center w-full h-full px-2 lg::px-6'}>
        <div className={'h-full flex flex-row items-center gap-1 lg:gap-8'}>
          <IoPlaySkipBackSharp size={24} className={'cursor-pointer'} onClick={onClickPrevBtn} />
          {isLoading ? (
            <ClipLoader color={'#FFF'} />
          ) : state.playing ? (
            <AiOutlinePause size={40} className={'cursor-pointer'} onClick={onClickPauseBtn} />
          ) : (
            <RiPlayFill size={40} className={'cursor-pointer'} onClick={onClickStartBtn} />
          )}
          <IoPlaySkipForwardSharp size={24} className={'cursor-pointer'} onClick={onClickNextBtn} />
        </div>
        <article>
          <div className={'flex flex-row gap-4 items-center'}>
            <div className={'relative w-[40px] h-[40px]'}>
              <Image fill={true} src={activeSong?.imageSrc} alt={'img'} />
            </div>
            <div className={'flex flex-col'}>
              <div>{activeSong?.name}</div>
              <div className={'text-neutral-500 text-[14px]'}>
                {activeSong?.channel} • Views 7.8M • Likes 1.7K
              </div>
            </div>
          </div>
        </article>
        <div>
          <div className={'flex flex-row gap-2'}>
            <div className={'hidden lg:flex flex-row gap-2'}>
              <IoVolumeHighOutline size={24} className={'cursor-pointer'} />
              <IoShuffle size={24} className={'cursor-pointer'} />
              <RxLoop size={24} className={'cursor-pointer'} />
            </div>
            <div>
              <AiFillCaretUp size={24} className={'cursor-pointer'} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlayerContents
