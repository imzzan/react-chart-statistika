import React, {useEffect} from 'react';
import { getProduct, productSelectors, deleteProduct  } from '../features/ProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {

  const dispatch = useDispatch();
  const data = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProduct());
  }, [])

  return (
    <div className=' w-[80%] flex-1'>
    <h1 className=' text-center font-bold'>Table Statictic</h1>
    <table className=' border-collapse border border-gray-800 mx-auto w-[80%] mt-10 table md:text-lg text-sm'>
      <thead>
        <tr className=' border border-gray-800'>
          <th className='border border-gray-800'>No</th>
          <th className='border border-gray-800'>Tahun</th>
          <th className='border border-gray-800'>Penjualan</th>
          <th className='border border-gray-800'>Pengeluaran</th>
          <th className='border border-gray-800'>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => {
            return (
              <tr key={item.id}>
                <td className=' font-bold border border-gray-800 py-2'>{item.id}.</td>
                <td className=' border border-gray-800'>{item.tahun}</td>
                <td className=' border border-gray-800'>Rp.{item.penjualan}</td>
                <td className='border border-gray-800'>Rp.{item.pengeluaran}</td>
                <th className='border border-gray-800'><button onClick={() => dispatch(deleteProduct(item.id))} className=' bg-red-600 p-1 font-normal rounded-md text-white'>Hapus</button></th>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    <Link to='/form'><button className=' bg-blue-600 p-2 text-white rounded-md'>Add Data</button></Link>
    </div>
  )
}

export default Home