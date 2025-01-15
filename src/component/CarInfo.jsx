
import PropTypes from 'prop-types'

const CarInfo = ({ title, brand, year, price, ispremium }) => {
    return (
      <div>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <b>Brand: </b>{brand} <br />
        <b>Year: </b>{year} <br />
        <b>Price: </b>{price} <br />
        <b>Premium: </b>{ispremium ? "Yes" : "No"}
      </div>
    );
  };
  
  // Correct propTypes definition
  CarInfo.propTypes = {
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    ispremium: PropTypes.bool.isRequired,
  };
export default CarInfo
