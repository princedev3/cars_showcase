"use client"
import React,{useState} from 'react'
import { SearchManufacturer } from '.'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SearchBar = () => {

  const router = useRouter()
  const[manufacturer,setManufacturer]=useState("")
  const[model,setModel]=useState("")
  const[correct,setCorrect]=useState(false)

 
 


  const SearchButton=({otherclasses}:{otherclasses:string})=>(
    <button type='submit' className={`-ml-3 z-10 ${otherclasses}`}>
        <Image src={`/magnifying-glass.svg`} alt='' width={40} height={40} className='object-contain'/>
    </button>
  )
  
  const handleSearch =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    
    if(!manufacturer){
      setCorrect(true)
    }

    updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
  }
  


 
  const updateSearchParams = (model:string,manufacturer:string)=>{
    const searchParams = new URLSearchParams(window.location.search)
    if(model){
      searchParams.set("model",model)
    }else{
      searchParams.delete("model")
    }
    if(manufacturer){
      searchParams.set("manufacturer",manufacturer)
    }else{
      searchParams.delete("manufacturer")
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

  router.push(newPathName) 
  }
  return (
    <div className='flex flex-col w-full'>
    <form  className="searchbar" onSubmit={handleSearch}>
          <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
            <SearchButton otherclasses={`sm:hidden`}/>
          </div>
          <div className="searchbar__item">
            <Image src={`/model-icon.png`} width={25} height={25} className='absolute w-[20px] h-[20px] ml-4 ' alt=''/>
            <input type="text" value={model} onChange={e=>setModel(e.target.value)} placeholder='Tiguan' className='searchbar__input'/>
            <SearchButton otherclasses={`sm:hidden`}/>
          </div>
            <SearchButton otherclasses={`max-sm:hidden`}/> 
    </form>
      {correct && <p className='mt-4 text-red-600 font-bold'>fill form correctly</p> }
    </div>
  )
}

export default SearchBar