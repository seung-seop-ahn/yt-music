import React from 'react'
import { getChannelById } from '@/lib/dummyData'
import { permanentRedirect } from 'next/navigation'
import HeaderBgChanger from '@/components/HeaderBgChanger'
import PagePadding from '@/components/PagePadding'
import { getRandomElementFromArray } from '@/lib/utils'
import DarkButton from '@/components/elements/DarkButton'
import WhiteButton from '@/components/elements/WhiteButton'
import { FiMusic, FiShuffle } from 'react-icons/fi'
import SongCardRowExpand from '@/components/SongCardRowExpand'
import PlaylistCarousel from '@/components/PlaylistCarousel'

interface ChannelPageProps {
  params: {
    id: string
  }
}

const page = async (props: ChannelPageProps) => {
  const channel = await getChannelById(Number(props.params.id))
  if (!channel) {
    permanentRedirect('/')
  }

  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className={'mt-[150px]'}></div>
      <section>
        <div className={'text-[28px] font-bold'}>{channel.name}</div>
        <article className={'mt-4 lg:hidden'}>
          <div>
            <DarkButton className={'w-[230px] flex justify-center'} label={'Subscribe 4.18M'} />
          </div>
          <div className={'flex flex-row gap-4 mt-4'}>
            <WhiteButton icon={<FiShuffle size={16} />} label={'Shuffle'} />
            <WhiteButton icon={<FiMusic size={16} />} label={'Music Station'} />
          </div>
        </article>
        <div className={'hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4'}>
          <WhiteButton icon={<FiShuffle size={16} />} label={'Shuffle'} />
          <WhiteButton icon={<FiMusic size={16} />} label={'Music Station'} />
          <DarkButton className={'w-[230px] flex justify-center'} label={'Subscribe 4.18M'} />
        </div>
      </section>
      <section className={'mt-[80px]'}>
        <div className={'text-[28px] font-bold'}>Song</div>
        <div className={'mt-[20px]'}>
          <ul className={'flex flex-col gap-2'}>
            {channel.songList.map((song, index) => {
              return <SongCardRowExpand key={index} song={song} />
            })}
          </ul>
        </div>
      </section>
      <section className={'mt-[80px]'}>
        <div className={'text-[28px] font-bold'}>Album</div>
        <PlaylistCarousel playlistArray={channel.playlistArray} />
      </section>
      <section className={'mt-[80px]'}></section>
    </PagePadding>
  )
}

export default page
