import React, { useRef, useCallback } from 'react';
import { Chart } from 'chart.js';
import { CategoryScale } from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {productSelectors} from '../features/ProductSlice';
import { useSelector } from 'react-redux';

Chart.register(CategoryScale);
const BarChart = () => {

  const databar = useSelector(productSelectors.selectAll)
  const ref = useRef(null);
  const ref2 = useRef(null);

  const BarData = {
    labels : databar.map((item) => item.tahun),
    datasets : [{
      label : 'Data Statistik Penjualan',
      data : databar.map((item) => item.penjualan),
      backgroundColor : '#937DC2',
      borderColor : 'blue',
      borderWidth : 1
    }]
  };

  const BarPengeluaran = {
    labels : databar.map((item) => item.tahun),
    datasets : [{
      label : 'Data Statistik Pengeluaran',
      data : databar.map((item) => item.pengeluaran),
      backgroundColor : 'red',
      borderColor : 'blue',
      borderWidth : 1
    }]
  };

  const downloadImage2 = useCallback(() => {
    const link = document.createElement('a');
    link.download = 'line penjulan.png';
    link.href = ref2.current.toBase64Image();
    link.click();
  }, []);

  const downloadImage = useCallback(() => {
    const link = document.createElement('a');
    link.download = 'line pengeluaran.png';
    link.href = ref.current.toBase64Image();
    link.click();
  }, [])

  return (
    <div className='w-[100%] flex-1'>
      <div className=' md:w-1/2 w-full mx-auto mt-5'>
        <Bar data={BarData} ref={ref}/>
      </div>
      <button className=' bg-blue-800 text-white px-3 md:text-lg text-sm' onClick={downloadImage}>Download</button>
      <div className=' md:w-1/2 w-full mx-auto mt-10'>
        <Bar data={BarPengeluaran} ref={ref2}/>
      </div>
      <button className=' bg-blue-800 text-white px-3 md:text-lg text-sm' onClick={downloadImage2}>Download</button>
    </div>
  )
}

export default BarChart