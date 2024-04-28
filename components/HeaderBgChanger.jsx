'use client'

import React, { useEffect } from 'react'
import useUIState from '@/hooks/useUIState'

const HeaderBgChanger = ({ imageSrc }) => {
  const { setHeaderImageSrc } = useUIState()

  useEffect(() => {
    setHeaderImageSrc(imageSrc)
  }, [imageSrc])

  return <></>
}
export default HeaderBgChanger
