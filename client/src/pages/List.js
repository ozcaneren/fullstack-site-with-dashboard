import React, { useState } from 'react';
import FetchMarks from '../api/FetchMarks';

function List() {
  
  return (
    <div>
      <FetchMarks />
    </div>
  )
}

export default List;