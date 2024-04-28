import React from 'react'
import { sleep } from '@/lib/utils'
import Category from '@/app/(site)/components/Category'

const page = async () => {
  await sleep(2000)
  return (
    <div className={'min-h-[600px]'}>
      <div className={'mt-9'}></div>
      <Category />
    </div>
  )
}
export default page
