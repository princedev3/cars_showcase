import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/component'
import { fuels, yearsOfProduction } from '@/constant'
import { CarProp } from '@/types'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home({searchParams}) {

  const allCars = await fetchCars({
    manufacturer:searchParams.manufacturer ||"",
    model:searchParams.model ||"",
    year:searchParams.year ||2023,
    limit:searchParams.limit||10,
    fuel:searchParams.fuel||"",
  })
  

  const isCarEmpty = Array.isArray(allCars) || allCars.length<1|| !allCars
  return (
    <main className="overflow-hidden">
        <Hero/>
        <div className="mt-12 padding-x padding-y max-width" id='discover'>
            <div className='home__text-container'>
              <h1 className="text-3xl font-extrabold">Car Catalogue</h1>
              <p>Explore the cars you might like</p>
            </div>
            <div className="home__filters">
              <SearchBar/>
              <div className='home__filter-container'>
                <CustomFilter title="fuel" options={fuels} />
                <CustomFilter title="year" options={yearsOfProduction} />
              </div>
            </div>
            {
              allCars.length>0 ?(
                <section>
                  <div className="home__cars-wrapper">
                    {allCars?.map((car,id)=><CarCard car={car}  key={id} />
                    )}
                  </div>
                  <ShowMore pageNumber={(searchParams.limit||10)/10} isNext={(searchParams.limit||10)>allCars.length} />
                </section>
              ):(
                <div className='home__error-container'>
                  <h2 className='text-black text-xl font-bold'>Ooops no result</h2>
                  <p>{isCarEmpty?.message } </p>
                </div>
              )
            }
        </div>
    </main>
  )
}
