'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import UserIcon from '@/components/UserIcon'
import PagePadding from '@/components/PagePadding'
import { FaChromecast } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import Logo from '@/components/elements/Logo'
import Navigator from '@/components/elements/Navigator'
import { cn } from '@/lib/utils'
import useUIState from '@/hooks/useUIState'

const HeaderDrawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Drawer direction={'left'} open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className={'w-[240px] h-full'}>
        <div className={'py-3'}>
          <div className={'px-3'}>
            <Logo isInDrawer={true} onClickClose={() => setIsOpen(false)} />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

const Header = ({ children }) => {
  const { headerImageSrc, setHeaderImageSrc } = useUIState()

  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef()

  useEffect(() => {
    const currentHeaderRef = headerRef?.current
    const handleScroll = () => {
      const scrollValue = currentHeaderRef?.scrollTop
      setIsScrolled(scrollValue !== 0)
    }

    currentHeaderRef?.addEventListener('scroll', handleScroll)
    return () => {
      currentHeaderRef?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header ref={headerRef} className={'relative overflow-y-auto w-full h-full'}>
      <section className={'absolute top-0 w-full'}>
        <div className={'relative h-[400px] w-full'}>
          <Image
            fill
            src={
              headerImageSrc ||
              'https://images.unsplash.com/photo-1708844897353-649da595a3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMzk2NzYxOQ&ixlib=rb-4.0.3&q=80&w=1080'
            }
            alt={'background'}
            className={'object-cover'}
          />
          <div className={'absolute h-[400px] top-0-0 bg-black opacity-40 w-full'}></div>
          <div className={'absolute h-[400px] top-0 bg-gradient-to-t from-black w-full '}></div>
        </div>
      </section>
      {/* Search Section */}
      <section className={cn('sticky top-0 left-0 z-10', isScrolled && 'bg-black')}>
        <PagePadding>
          <div className={'flex flex-row justify-between items-center h-[64px]'}>
            <article
              className={
                'h-[42px] min-w-[480px] hidden lg:flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500'
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
            <HeaderDrawer>
              <article className={'lg:hidden'}>
                <Logo />
              </article>
            </HeaderDrawer>
            <article className={'flex flex-row gap-6 items-center'}>
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className={'relative'}>{children}</section>
    </header>
  )
}

export default Header
