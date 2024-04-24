import React from 'react'
import { sleep } from '@/lib/utils'

const page = async () => {
  await sleep(2000)
  return (
    <div className={'min-h-[600px]'}>
      {' '}
      home
      <div className={'h-[500px] bg-neutral-700'}>home</div>
      <div className={'h-[500px] bg-neutral-700'}>home</div>
      <div className={'h-[500px] bg-neutral-700'}>home</div>
      <div className={'h-[500px] bg-neutral-700'}>home</div>
    </div>
  )
}
export default page
