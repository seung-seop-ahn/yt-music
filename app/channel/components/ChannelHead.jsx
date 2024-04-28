'use client'

import React from 'react'
import DarkButton from '../../../components/elements/DarkButton'
import WhiteButton from '../../../components/elements/WhiteButton'
import { FiMusic, FiShuffle } from 'react-icons/fi'
import usePlayerState from '@/hooks/usePlayerState'
import { getRandomElementFromArray } from '@/lib/utils'

const ChannelHead = ({ channel }) => {
  const { addSongList } = usePlayerState()

  const onClickShuffle = () => {
    addSongList([getRandomElementFromArray(channel?.songList)])
  }

  return (
    <section>
      <div className={'text-[28px] font-bold'}>{channel.name}</div>
      <article className={'mt-4 lg:hidden'}>
        <div>
          <DarkButton className={'w-[230px] flex justify-center'} label={'Subscribe 4.18M'} />
        </div>
        <div className={'flex flex-row gap-4 mt-4'}>
          <WhiteButton icon={<FiShuffle size={16} />} label={'Shuffle'} onClick={onClickShuffle} />
          <WhiteButton
            icon={<FiMusic size={16} />}
            label={'Music Station'}
            onClick={onClickShuffle}
          />
        </div>
      </article>
      <div className={'hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4'}>
        <WhiteButton icon={<FiShuffle size={16} />} label={'Shuffle'} onClick={onClickShuffle} />
        <WhiteButton
          icon={<FiMusic size={16} />}
          label={'Music Station'}
          onClick={onClickShuffle}
        />
        <DarkButton className={'w-[230px] flex justify-center'} label={'Subscribe 4.18M'} />
      </div>
    </section>
  )
}
export default ChannelHead
