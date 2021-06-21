import { useState } from 'react';
import { Select, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [selectedValues, setSelectedValues] = useState([]);

  function onChange(checkedValues) {
    setSelectedValues(checkedValues);
  }

  return (
    <div className="App" style={{ marginTop: '10%' }}>
      <Select
        style={{ width: 500 }}
        mode='tags'
        placeholder="custom dropdown render"
        value={selectedValues}
        dropdownRender={menu => (
          <div style={{ padding: 8 }}>
          <Checkbox.Group 
            style={{ width: '100%', display: 'flex', flexDirection: 'column' }} 
            value={selectedValues} 
            onChange={onChange}
          >
            <Checkbox value="Apple" style={{ marginLeft: 8 }}>Apple</Checkbox>
            <Checkbox value="Orange">Orange</Checkbox>
            <Checkbox value="Fruits">Fruits</Checkbox>
            <Checkbox value="Vegetables">Vegetables</Checkbox>
          </Checkbox.Group>
          </div>
        )}
      />
    </div>
  );
}

export default App;
