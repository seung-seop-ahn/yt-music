import React from 'react'
import { sleep } from '@/lib/utils'
import Category from '@/app/(site)/components/Category'
import PagePadding from '@/components/PagePadding'
import PlaylistCarousel from '@/components/PlaylistCarousel'
import { dummyPlaylistArray } from '@/lib/dummyData'
import UserIcon from '@/components/UserIcon'

const page = async () => {
  await sleep(2000)

  const dummyPlaylistArray1 = [...dummyPlaylistArray]

  return (
    <PagePadding>
      <div className={'min-h-[600px]'}>
        <div className={'mt-9'}></div>
        <Category />
        <div className={'mt-12'}></div>
        <PlaylistCarousel
          title={'Replay'}
          subTitle={'Kevin'}
          thumbnail={
            <div className={'w-[56px] h-[56px]'}>
              <UserIcon size={'lg'} />
            </div>
          }
          playlistArray={dummyPlaylistArray1}
        />
      </div>
    </PagePadding>
  )
}
export default page
