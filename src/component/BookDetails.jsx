
import PropTypes from 'prop-types'
const BookDetails = ({title,author}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className='text-gray-600'>{author}</p>
    </div>
  );
}

BookDetails.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};
export default BookDetails
