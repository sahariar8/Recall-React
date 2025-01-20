
import PropTypes from 'prop-types'
const Search = ({searchCar,onSearchCar,isPremium,onSetPremium}) => {
  console.log(searchCar)
  console.log(isPremium)
  return (
    <div className="flex items-center space-x-4 mt-4">
    <input 
      type="text" 
      placeholder="Search Cars...." 
      value={searchCar}
      onChange={(e)=>onSearchCar(e.target.value)}
      className="border rounded-md p-2 w-[400px] focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <label className="flex items-center space-x-2">
      <input 
        type="checkbox" 
        checked={isPremium}
        onChange={(e)=> onSetPremium(e.target.checked)}
        id="searchFilter" 
        className="w-4 h-4"
      />
      <span className="text-sm">Show Premium Only</span>
    </label>
  </div>
  
  )
}
Search.propTypes = {
  searchCar:PropTypes.string.isRequired,
  onSearchCar:PropTypes.func.isRequired,
  isPremium:PropTypes.bool.isRequired,
  onSetPremium:PropTypes.func.isRequired

}
export default Search
