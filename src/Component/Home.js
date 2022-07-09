import React, {useRef, useCallback} from 'react';

const Home = ({data}) => {

  const ref = useRef(null)
  const downloadImage = useCallback(() => {
    const link = document.createElement('a');
    link.download = 'table.png';
    link.href = ref.current.toBase64Image();
    link.click();
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
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </div>
  )
}

export default Home