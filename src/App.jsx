import React from 'react';
import LeftTable from './LeftTable';
import RightTable from './RightTable';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>

      <div className=" flex  flex-col items-center  sm:justify-center h-screen  ">
      <div className=' flex items-center justify-center mt-10 sm:h-20 mb-5'>
        <h1 className='text-4xl text-white '>Transfer Fruits between baskets 🍏 </h1>
      </div>
      <div className=" flex flex-col sm:flex-row  gap-10  ">
        <LeftTable />
        <RightTable />
      </div>
      </div>

    </Provider>
  );
}

export default App;
