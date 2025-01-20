import CarInfo from "./CarInfo"
import PropTypes, { object } from 'prop-types'


const Car = ({car}) => {
  return (
    <div className="border rounded-md shadow-md p-5" >
      <CarInfo title={car.title} brand={car.brand} year={car.year} price={car.price} ispremium={car.isPremium}/>
    </div>
  )
}
Car.propTypes = {
    car: PropTypes.shape({
      title: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      isPremium: PropTypes.bool.isRequired,
    }).isRequired,
  };
  
export default Car
