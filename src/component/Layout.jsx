

import Search from './Search'
import AllCars from './AllCars'
import Header1 from './Header1'
import { useState } from 'react'


const Cars = [   
  { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
  { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
  { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
  { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
  { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
];

const Layout = () => {
  const [searchCar,setSearchCar] = useState("");
  const [isPremium,setIsPremium] = useState(false);

 
  return (
    <div>
      <Header1/>
      <Search searchCar={searchCar} onSearchCar={setSearchCar} isPremium={isPremium} onSetPremium={setIsPremium} />
      <AllCars searchCar={searchCar} cars={Cars} isPremium={isPremium} />
    </div>
  )
}

export default Layout
