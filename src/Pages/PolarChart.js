import React, {useRef, useCallback} from 'react';
import { PolarArea } from 'react-chartjs-2';
import {productSelectors} from '../features/ProductSlice';
import { useSelector } from 'react-redux';

const PolarChart = () => {

  const datapie = useSelector(productSelectors.selectAll)
  const ref = useRef(null);
  const ref2 = useRef(null);

  const dataPenjualan = {
    labels : datapie.map((item) => item.tahun),
    datasets : [{
      label : 'Data Penjualan',
      data : datapie.map((item) => item.penjualan),
      backgroundColor: ['#610C63','#937DC2', '#AEDBCE', '#6E85B7','#C689C6', '#3330E4','#E8A0BF', '#F637EC','#FF0063', '#EB4747',],
      hoverOffset: 20
    }]
  }

  const dataPengeluaran = {
    labels : datapie.map((item) => item.tahun),
    datasets : [{
      label : 'Data Penjualan',
      data : datapie.map((item) => item.pengeluaran),
      backgroundColor: ['#AEDBCE', '#6E85B7', '#3330E4', '#F637EC', '#EB4747', '#FF0063', '#E8A0BF', '#C689C6', '#937DC2', '#610C63'],
      hoverOffset: 20
    }]
  };

  const downloadImage2 = useCallback(() => {
    const link = document.createElement('a');
    link.download = 'polar penjulan.png';
    link.href = ref2.current.toBase64Image();
    link.click();
  }, []);

  const downloadImage = useCallback(() => {
    const link = document.createElement('a');
    link.download = 'polar pengeluaran.png';
    link.href = ref.current.toBase64Image();
    link.click();
  }, [])

  return (
    <div className='w-[80%] flex-1'>
      <div className='md:w-1/2 w-full mx-auto mt-5'>
        <PolarArea data={dataPenjualan} ref={ref}/>
      </div>
      <button className=' bg-blue-800 text-white px-3 mb-5 md:text-lg text-sm' onClick={downloadImage}>Download</button>
      <div className='md:w-1/2 w-full mx-auto mt-5'>
        <PolarArea data={dataPengeluaran} ref={ref2}/>
      </div>
      <button className=' bg-blue-800 text-white px-3 md:text-lg text-sm' onClick={downloadImage2}>Download</button>
    </div>
  )
}

export default PolarChart