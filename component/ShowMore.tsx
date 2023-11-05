"use client"
import { ShowMoreProp } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CustomButton } from '.'
import { updatenewSearchParam } from '@/utils'

const ShowMore = ({pageNumber,isNext}:ShowMoreProp) => {
    const router = useRouter()

    const handleShow = ()=>{
        const newlimit = (pageNumber+1)*10
        const newpathname =updatenewSearchParam("limit", String(newlimit))
        router.push(newpathname)
    }

  return (
    <div className='w-full mt-10 gap-5 flex flex-center'>
        {
                !isNext && <CustomButton containerStyles='bg-primary-blue rounded-full text-white' title='Show More' btnType='button' handleClick={handleShow} />
        }
    </div>
  )
}

export default ShowMore