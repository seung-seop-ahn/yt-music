import React from 'react'
import { FiBarChart, FiMusic, FiSmile } from 'react-icons/fi'

const CategoryMenu = ({ icon, label }) => {
  return (
    <div
      className={`
        w-full h-[56px] py-4 px-[24px] 
        flex flex-row gap-4 items-center bg-neutral-700 text-[20px] cursor-pointer
        rounded-sm hover:bg-neutral-800 transition
      `}
    >
      {icon}
      {label}
    </div>
  )
}

const Category = () => {
  return (
    <div className={`flex flex-col gap-4 w-full lg:flex-row`}>
      <CategoryMenu icon={<FiMusic color={'#AAAAAA'} />} label={'Trend'} />
      <CategoryMenu icon={<FiBarChart color={'#AAAAAA'} />} label={'Chart'} />
      <CategoryMenu icon={<FiSmile color={'#AAAAAA'} />} label={'Genre'} />
    </div>
  )
}

export default Category
