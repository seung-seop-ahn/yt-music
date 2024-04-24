import React from 'react'
import Image from 'next/image'
import UserIcon from '@/components/UserIcon'
import PagePadding from '@/components/PagePadding'
import { FaChromecast } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'

const Header = ({ children }) => {
  return (
    <header className={'relative overflow-y-auto w-full h-full'}>
      <section className={'absolute top-0 w-full'}>
        <div className={'relative h-[400px] w-full'}>
          <Image
            fill
            src={
              'https://images.unsplash.com/photo-1708844897353-649da595a3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMzk2NzYxOQ&ixlib=rb-4.0.3&q=80&w=1080'
            }
            alt={'background'}
            className={'object-cover'}
          />
          <div className={'absolute h-[400px] top-0-0 bg-black opacity-40 w-full'}></div>
          <div className={'absolute h-[400px] top-0 bg-gradient-to-t from-black w-full '}></div>
        </div>
      </section>
      <secion className={'sticky'}>
        <PagePadding>
          <div className={'flex flex-row justify-between items-center h-[64px]'}>
            <article
              className={
                'flex flex-row items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px]'
              }
            >
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className={'h-full w-full bg-transparent'}
                type={'text'}
                placeholder={'Music, Album, Artist, Podcast Search'}
              />
            </article>
            <article className={'flex flex-row gap-6 items-center'}>
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </secion>
      <section className={'relative'}>{children}</section>
    </header>
  )
}

export default Header
