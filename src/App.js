import React, { useState } from 'react';
import InputComponent from './components/InputComponent/InputComponent';
import TableComponent from './components/TableComponent/TableComponent';

const App = () => {
  const [result, setResult] = useState(null);

  const handleFormSubmit = (number1, number2) => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult({ number1, number2, sum });
  };

  return (
      <div>
        <InputComponent onSubmit={handleFormSubmit} />
        {result && <TableComponent result={result} />}
      </div>
  );
};

export default App;
