import React, {useRef, useCallback} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { CategoryScale } from 'chart.js';
import {productSelectors} from '../features/ProductSlice';
import { useSelector } from 'react-redux';

Chart.register(CategoryScale);
const DoughnutChart = () => {

    const datanut = useSelector(productSelectors.selectAll)
    const ref = useRef(null);
    const ref2 = useCallback(null);

    const dataPenjualan = {
        labels: datanut.map((item) => item.tahun),
        datasets: [{
            label: 'Data Penjualan',
            data: datanut.map((item) => item.penjualan),
            backgroundColor: ['#AEDBCE', '#6E85B7', '#3330E4', '#F637EC', '#EB4747', '#FF0063', '#E8A0BF', '#C689C6', '#937DC2', '#610C63'],
            hoverOffset: 20
        }]
    };

    const dataPengeluaran = {
        labels: datanut.map((item) => item.tahun),
        datasets: [{
            label: 'Data Pegeluaran',
            data: datanut.map((item) => item.pengeluaran),
            backgroundColor: ['#610C63','#937DC2', '#AEDBCE', '#6E85B7','#C689C6', '#3330E4','#E8A0BF', '#F637EC','#FF0063', '#EB4747',],
            hoverOffset: 20
        }]
    };

    const downloadImage2 = useCallback(() => {
        const link = document.createElement('a');
        link.download = 'doughnut penjulan.png';
        link.href = ref2.current.toBase64Image();
        link.click();
      }, []);
    
      const downloadImage = useCallback(() => {
        const link = document.createElement('a');
        link.download = 'doughnut pengeluaran.png';
        link.href = ref.current.toBase64Image();
        link.click();
      }, [])

    return (
        <div className='w-[80%] flex-1'>
            <div className='md:w-1/2 w-full mx-auto mt-5'>
                <Doughnut data={dataPenjualan} ref={ref}/>
            </div>
            <button className=' bg-blue-800 text-white px-3 mb-5 md:text-lg text-sm' onClick={downloadImage}>Download</button>
            <div className='md:w-1/2 w-full mx-auto mt-5'>
                <Doughnut data={dataPengeluaran} ref={ref2}/>
            </div>
            <button className=' bg-blue-800 text-white px-3 md:text-lg text-sm' onClick={downloadImage2}>Download</button>
        </div>
    )
}

export default DoughnutChart