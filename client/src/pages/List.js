import React, { useState } from 'react'
import FetchMarks from '../api/FetchMarks'
import AddMark from '../api/AddMark'



function List() {

  const [shouldFetchMarks, setShouldFetchMarks] = useState(false);

  const handleAddMark = () => {
    // Toggle the shouldFetchMarks state to trigger a refresh
    setShouldFetchMarks(!shouldFetchMarks);
  };

  return (
    <div>
      <FetchMarks shouldFetch={shouldFetchMarks} /> {/* Pass shouldFetchMarks as a prop */}
      <AddMark onAddMark={handleAddMark} /> {/* Pass handleAddMark as a prop */}
    </div>
  )
}

export default List