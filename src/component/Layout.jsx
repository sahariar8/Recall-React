

import Search from './Search'
import AllCars from './AllCars'
import Header1 from './Header1'
import { useState } from 'react'

const Layout = () => {
  const [searchCar,setSearchCar] = useState("")
  return (
    <div>
      <Header1/>
      <Search searchCar={searchCar} onSearchCar={setSearchCar} />
      <AllCars searchCar={searchCar} />
    </div>
  )
}

export default Layout
