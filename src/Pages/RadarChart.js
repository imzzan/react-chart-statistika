import React, {useRef, useCallback} from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { CategoryScale } from 'chart.js';
import {productSelectors} from '../features/ProductSlice';
import { useSelector } from 'react-redux';

Chart.register(CategoryScale);
const RadarChart = () => {

    const dataradar = useSelector(productSelectors.selectAll)
    const ref = useRef(null);

    const radardata = {
        labels: dataradar.map((item) => item.tahun),
        datasets: [{
            label: 'Data Penjualan',
            data: dataradar.map((item) => item.penjualan),
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'Data Pengeluaran',
            data: dataradar.map((item) => item.pengeluaran),
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }
        ]
    };

    const downloadImage = useCallback(() => {
        const link = document.createElement('a');
        link.download = 'radar.png';
        link.href = ref.current.toBase64Image();
        link.click();
      }, [])

    return (
        <div className='w-[80%] flex-1'>
            <div className='md:w-1/2 w-full mx-auto mt-5'>
                <Radar data={radardata} ref={ref}/>
            </div>
            <button className=' bg-blue-800 text-white px-3 md:text-lg text-sm' onClick={downloadImage}>Download</button>
        </div>
    )
}

export default RadarChart