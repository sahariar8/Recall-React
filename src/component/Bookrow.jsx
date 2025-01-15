
import PropTypes from 'prop-types'
import BookDetails from './BookDetails'
import Featured from './Featured'
const Bookrow = ({book}) => {
  return (
    <div className='mt-2 flex justify-between items-center border rounded-md p-3 shadow-md'>
      <BookDetails title={book.title} author={book.author} />
      <Featured />
    </div>
  )
}

export default Bookrow
Bookrow.propTypes = {
    book:PropTypes.object.isRequired,
}