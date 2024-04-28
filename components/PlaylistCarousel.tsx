import React from 'react'
import { Playlist } from '@/types'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import PlaylistCard from '@/components/PlaylistCard'

interface PlayListCarouselProps {
  title: string
  subTitle?: string
  thumbnail?: React.ReactNode
  playlistArray?: Playlist[]
}

const PlaylistCarousel: React.FC<PlayListCarouselProps> = ({
                                                             title,
                                                             subTitle,
                                                             thumbnail,
                                                             playlistArray,
                                                           }) => {
  return (
    <div className={'w-full'}>
      <Carousel>
        <div className={'flex flex-row justify-between items-end my-2'}>
          <article className={'flex flex-row gap-3'}>
            {thumbnail}
            <div className={'flex flex-col justify-center'}>
            <div>{subTitle && <div className={'text-neutral-500'}>{subTitle}</div>}</div>
            <div className={'text-[34px] font-bold leading-[34px]'}>{title}</div>
            </div>
          </article>
          <div className={'relative left-[-45px]'}>
            <div className={'absolute bottom-[20px]'}>
              <CarouselPrevious className={'right-2'} />
              <CarouselNext className={'left-2'}/>
            </div>
          </div>
        </div>
        <CarouselContent>
          {playlistArray?.map((playlist, index) => {
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <PlaylistCard playlist={playlist} />
              </CarouselItem>
            )
          })}
        </CarouselContent>

      </Carousel>
    </div>
  )
}

export default PlaylistCarousel
