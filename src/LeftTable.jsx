import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveRight, searchLeft } from './actions';

const LeftTable = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const leftItems = useSelector(state => state.leftItems);
  const dispatch = useDispatch();

  const handleMoveToRight = () => {
    dispatch(moveRight(selectedItems));
    setSelectedItems([]);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    dispatch(searchLeft(e.target.value));
  };

  const handleCheckboxChange = (item) => {
    const currentIndex = selectedItems.findIndex(selectedItem => selectedItem.id === item.id);
    const newSelectedItems = [...selectedItems];

    if (currentIndex === -1) {
      newSelectedItems.push(item);
    } else {
      newSelectedItems.splice(currentIndex, 1);
    }

    setSelectedItems(newSelectedItems);
  };

  return (
    <div className="bg-gray-300  border border-gray-700 rounded-2xl p-10">
       <h1 className='text-2xl font-bold text-gray-500 ml-12 mb-2'>Basket 1</h1>
      <input className='rounded p-1 text-gray-500 outline-none mb-5 ' type="text" value={searchText} onChange={handleSearch} placeholder="Search fruits..." />
      <table>
        <thead className='text-black'>
          <tr className='text-2xl'>
            <th>Select</th>
            <th>Left Fruit</th>
          </tr>
        </thead>
        <tbody className='text-xl'>
          {leftItems.map(item => (
            <tr key={item.id}>
              <td>
                <input
                className=''
                  type="checkbox"
                  checked={selectedItems.some(selectedItem => selectedItem.id === item.id)}
                  onChange={() => handleCheckboxChange(item)}
                />
              </td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='bg-slate-900 p-1 ml-12 mt-3 text-white border border-gray-400 rounded-md ' onClick={handleMoveToRight} disabled={selectedItems.length === 0}>Move to Right</button>
    </div>
  );
};

export default LeftTable;
