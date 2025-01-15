

const Search = () => {
  return (
    <div className="flex items-center space-x-4 mt-4">
    <input 
      type="text" 
      placeholder="Search Cars...." 
      className="border rounded-md p-2 w-[400px] focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <label className="flex items-center space-x-2">
      <input 
        type="checkbox" 
        id="searchFilter" 
        className="w-4 h-4"
      />
      <span className="text-sm">Show Premium Only</span>
    </label>
  </div>
  
  )
}

export default Search
