'use client'

import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useRouter } from 'next/navigation'
import IconButton from '@/components/elements/IconButton'

const Logo = () => {
  const router = useRouter()

  const onClickLogo = () => {
    router.push('/')
  }

  const onClickMenu = () => {}

  return (
    <section className={'flex flex-row items-center gap-3'}>
      <IconButton icon={<RxHamburgerMenu size={24} />} onClickIcon={onClickMenu} />

      <div className={'cursor-pointer'} onClick={onClickLogo}>
        <Image src={'/main-logo.svg'} alt={'logo'} width={100} height={30} />
      </div>
    </section>
  )
}

export default Logo
