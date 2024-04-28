'use client'

import React from 'react'
import IconButton from '@/components/elements/IconButton'
import { FiFolderPlus, FiMoreVertical, FiPlay } from 'react-icons/fi'
import Image from 'next/image'
import { getRandomElementFromArray } from '@/lib/utils'
import WhiteButton from '@/components/elements/WhiteButton'
import DarkButton from '@/components/elements/DarkButton'
import usePlayerState from '@/hooks/usePlayerState'

const PlaylistHead = ({ playlist = {} } = {}) => {
  const { addSongList } = usePlayerState()

  const { playlistName, owner, songList } = playlist
  const randomSong = getRandomElementFromArray(songList)

  const onClickPlay = () => {
    addSongList(songList)
  }

  return (
    <section>
      <div className={'flex flex-row gap-[50px]'}>
        <div className={'relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]'}>
          <Image fill={true} src={randomSong?.imageSrc} alt={'songImg'} />
        </div>
        <article className={'flex flex-col justify-center'}>
          <div className={'font-bold text-[28px]'}>{playlistName}</div>
          <div className={'text-neutral-400 mt-4 text-[14px]'}>
            <div>{`Album • ${owner} • 2019`}</div>
            <div>{`${songList.length} Songs`}</div>
          </div>
          <ul className={'hidden lg:flex flex-row gap-4 mt-4'}>
            <WhiteButton
              className={'w-[85px] text-[14px]'}
              icon={<FiPlay />}
              label={'Play'}
              onClick={onClickPlay}
            />
            <DarkButton
              className={'w-[135px] text-[14px]'}
              icon={<FiFolderPlus />}
              label={'Collection'}
            />
            <IconButton icon={<FiMoreVertical size={24} />} />
          </ul>
        </article>
      </div>
      <ul className={'flex flex-row gap-4 mt-4 lg:hidden'}>
        <WhiteButton
          className={'w-[85px] text-[14px]'}
          icon={<FiPlay />}
          label={'Play'}
          onClick={onClickPlay}
        />
        <DarkButton
          className={'w-[135px] text-[14px]'}
          icon={<FiFolderPlus />}
          label={'Collection'}
        />
        <IconButton icon={<FiMoreVertical size={24} />} />
      </ul>
    </section>
  )
}
export default PlaylistHead
