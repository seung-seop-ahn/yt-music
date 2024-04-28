'use client'

import React from 'react'
import Image from 'next/image'
import { getRandomElementFromArray } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { MdMoreVert } from 'react-icons/md'
import { FiPlay } from 'react-icons/fi'
import IconButton from '@/components/elements/IconButton'
import { Playlist } from '@/types'

interface PlaylistCardProps {
  playlist: Playlist
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  const { push } = useRouter()
  const { id, owner, playlistName, songList } = playlist

  const songListLen = songList.length
  const imgSrc = getRandomElementFromArray(songList).imageSrc

  const onClickCard = () => {
    push(`/playlist?list=${id}`)
  }

  const onClickPlay = () => {
    // todo
  }

  return (
    <article className={'h-[240px] cursor-pointer group'}>
      <section className={'relative h-[136px]'} onClick={onClickCard}>
        <Image fill={true} src={imgSrc} alt={'thumbnail'} className={'object-cover'} />
        <div
          className={
            'hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]'
          }
        >
          <div className={'absolute top-2 right-4'}>
            <IconButton icon={<MdMoreVert size={20} />} />
          </div>
          <div
            onClick={onClickPlay}
            className={`
              absolute bottom-4 right-4 flex justify-center items-center 
              transform-gpu transition-transform hover:scale-110 
              bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full hover:bg-[rgba(0,0,0,0.9)]
              pl-[1.5px]
            `}
          >
            <IconButton icon={<FiPlay size={22} color={'red'} />} />
          </div>
        </div>
      </section>
      <section className={'mt-2'}>
        <div>{playlistName}</div>
        <div className={'text-neutral-500'}>{`${owner} - Track ${songListLen}`}</div>
      </section>
    </article>
  )
}

export default PlaylistCard
