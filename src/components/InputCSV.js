import React from 'react';

const InputCSV = ({handleFileUpload}) => (
  <label className='btn btn-outline-info mt-2' htmlFor='csv'>
    <input id='csv' type='file' accept='.csv' className='d-none' onChange={handleFileUpload}/>
    Upload .csv
  </label>
);

export default InputCSV;
