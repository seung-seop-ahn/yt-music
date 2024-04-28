import React from 'react'
import { getChannelById } from '@/lib/dummyData'
import { permanentRedirect } from 'next/navigation'
import HeaderBgChanger from '@/components/HeaderBgChanger'
import PagePadding from '@/components/PagePadding'
import { getRandomElementFromArray } from '@/lib/utils'

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

  const imageSrc = getRandomElementFromArray(channel.songList)

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      channel/[{props.params.id}]
    </PagePadding>
  )
}

export default page
