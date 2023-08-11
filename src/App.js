import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1)

  const [bedFields, setBedFields] = useState([
    { monitor: '', bed: '', timing: '',  }
  ]);

  const [icuFields, setIcuFields] = useState([
    { name: '', ip: '', rstport: '', username: '', password: '' }
  ]);

  const [hospitalState, setHospitalState] = useState('');

  const handleFormChange = (index, event, fieldArray, setFieldArray) => {
    const data = [...fieldArray];
    data[index][event.target.name] = event.target.value;
    setFieldArray(data);
  };

  const addFields = () => {
    const newField = { name: '', age: '' };
    setBedFields([...bedFields, newField]);
    setCount((a) => a + 1)
  };

  const addIcuFields = () => {
    const newField = { name: '', ip: '', rstport: '', username: '', password: '' };
    setIcuFields([...icuFields, newField]);
    setBedFields([...bedFields, newField]);
    setCount((a) => a + 1)
  };

  const submit = (e) => {
    e.preventDefault();
    console.log({ hospitalState, bedFields, icuFields });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Hospital Details</h2>
        <div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Hospital Name</label>
            <input
              type="text"
              placeholder="Enter hospital name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block font-medium mb-1">Hospital PinCode</label>
              <input
                type="text"
                placeholder="Enter hospital PinCode"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Hospital State</label>
              <select
                value={hospitalState}
                onChange={(e) => setHospitalState(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select a state</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
                <option value="state3">State 3</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Hospital City</label>
              <select
                value={hospitalState}
                onChange={(e) => setHospitalState(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select a City</option>
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
                <option value="city3">City 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-6 bg-white p-6 rounded shadow flex gap-6">
        <form onSubmit={submit}>
          {icuFields.map((input, index) => (
            <div key={index} className="mb-4">
              <label className="block font-medium mb-1">ICU Name</label>
              <input
                name="name"
                placeholder="Enter ICU Name"
                value={input.name}
                onChange={(event) => handleFormChange(index, event, icuFields, setIcuFields)}
                className="w-full p-2 border rounded"
              />
              <label className="block font-medium mt-2 mb-1">IP Address</label>
              <input
                name="ip"
                placeholder="Enter IP Address"
                value={input.ip}
                onChange={(event) => handleFormChange(index, event, icuFields, setIcuFields)}
                className="w-full p-2 border rounded"
              />
              <label className="block font-medium mt-2 mb-1">RST Port</label>
              <input
                name="rstport"
                placeholder="Enter RST Port"
                value={input.rstport}
                onChange={(event) => handleFormChange(index, event, icuFields, setIcuFields)}
                className="w-full p-2 border rounded"
              />
              <label className="block font-medium mt-2 mb-1">Username</label>
              <input
                name="username"
                placeholder="Username"
                value={input.username}
                onChange={(event) => handleFormChange(index, event, icuFields, setIcuFields)}
                className="w-full p-2 border rounded"
              />
              <label className="block font-medium mt-2 mb-1">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={input.password}
                onChange={(event) => handleFormChange(index, event, icuFields, setIcuFields)}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
          <button type="button" onClick={addIcuFields} className="bg-blue-500 text-white px-4 py-2 rounded mr-2 mt-2">
            Add More ICU
          </button>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded sm:px-2 ">
            Submit
          </button>
        </form>
        <form onSubmit={submit}>
          {bedFields.map((input, index) => (
            <div key={index} className="mb-4">
              <h2>Bed {index + 1}</h2>
              <label className="block font-medium mb-1">Monitor IP</label>
              <input
                name="monitor"
                placeholder="Enter IP"
                value={input.monitor}
                onChange={(event) => handleFormChange(index, event, bedFields, setBedFields)}
                className="w-full p-2 border rounded"
              />
              <label className="block font-medium mt-2 mb-1">Bed Number</label>
              <input
                name="bednumber"
                placeholder="Enter Bed Number"
                value={input.bed}
                onChange={(event) => handleFormChange(index, event, bedFields, setBedFields)}
                className="w-full p-2 border rounded"
              />
              <label className="block font-medium mt-2 mb-1">Bed Timing</label>
              <input
                name="timing"
                placeholder="Enter Timing"
                value={input.timing}
                onChange={(event) => handleFormChange(index, event, bedFields, setBedFields)}
                className="w-full p-2 border rounded"
              />
              
            </div>
          ))}
          <button type="button" onClick={addFields} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Add More Bed
          </button>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded sm:px-2">
            ADD ICU
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
