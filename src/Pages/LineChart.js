import React, {useRef, useCallback} from 'react';
import {Chart} from 'chart.js';
import {CategoryScale} from 'chart.js';
import { Line } from 'react-chartjs-2';

const LineChart = ({dataline}) => {

    const ref = useRef(null);
    const ref2 = useRef(null);

    const LinePenjualan = {
        labels : dataline.map((item) => item.tahun),
        datasets : [
            {
                label : 'Data Penjualan',
                data : dataline.map((item) => item.penjualan),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                backgroundColor: ['red']
            }
        ]
    }

    const LinePengeluaran = {
        labels : dataline.map((item) => item.tahun),
        datasets : [
            {
                label : 'Data Penjualan',
                data : dataline.map((item) => item.pengeluaran),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                backgroundColor: ['orange']
            }
        ]
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
    <div className='w-[80%] flex-1'>
        <div className='w-3/4 mx-auto mt-5'>
            <Line data={LinePenjualan} ref={ref}/>
        </div>
        <button className=' bg-blue-800 text-white px-3 mb-5 md:text-lg text-sm' onClick={downloadImage}>Download</button>
        <div className='w-3/4 mx-auto mt-5'>
            <Line data={LinePengeluaran} ref={ref2}/>
        </div>
        <button className=' bg-blue-800 text-white px-3 md:text-lg text-sm' onClick={downloadImage2}>Download</button>
    </div>
  )
}

export default LineChart