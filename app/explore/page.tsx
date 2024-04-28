import React from 'react'
import PagePadding from '@/components/PagePadding'
import Category from '@/app/explore/components/Category'
import { getAllPlaylist, getSongListTop10 } from '@/lib/dummyData'
import PlaylistCarousel from '@/components/PlaylistCarousel'
import SongListCarousel from '@/components/SongListCarousel'

const page = async () => {
  const [playlistArray, songListTop10Array] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ])

  return (
    <PagePadding>
      <div className={'mt-4'}></div>
      <Category />
      <div className={'mt-20'}></div>
      <PlaylistCarousel title={'New Album and Single'} playlistArray={playlistArray} />
      <div className={'mt-20'}></div>
      <SongListCarousel title={'Popular'} songListTop10={songListTop10Array} />
      <div className={'mt-20'}></div>
      <div className={'mt-20'}></div>
      <div className={'mt-20'}></div>
    </PagePadding>
  )
}

export default page
