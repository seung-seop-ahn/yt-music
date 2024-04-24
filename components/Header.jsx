import React from 'react'
import Image from 'next/image'

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
      <section className={'absolute'}>{children}</section>
    </header>
  )
}

export default Header
