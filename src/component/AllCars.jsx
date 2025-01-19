import Car from "./Car";
import PropTypes from 'prop-types'

const AllCars = ({cars,searchCar}) => {
  const rows = [];
  cars.forEach((car) => {
    if(!car.title.toLowerCase().includes(searchCar.toLowerCase())){
      return;
    }
      rows.push(<Car car={car} key={car.id}/>)
  });
  return (
    <div className="grid grid-cols-3 gap-5 mt-4">
      {rows}
    </div>
  )
}

AllCars.propTypes = {
  cars:PropTypes.object.isRequired,
  searchCar:PropTypes.string.isRequired
}

export default AllCars
