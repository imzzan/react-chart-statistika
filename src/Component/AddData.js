import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { saveProduct } from '../features/ProductSlice';
import { useNavigate } from 'react-router-dom';

const AddData = () => {

    const [tahun, setTahun] = useState('');
    const [penjualan, setPenjualan] = useState('');
    const [pengeluaran, setPengeluaran] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createOne = async (e) => {
        e.preventDefault();
        await dispatch(saveProduct({tahun, penjualan, pengeluaran}));
        navigate('/');
    }

    
    return (
        <div className=' mx-auto mt-10 md:w-[800px]'>
            <form onSubmit={createOne}>
                <div className=' w-full p-5 bg-blue-200 rounded-md'>
                    <div>
                        <label htmlFor="tanggal" className=' font-bold'>Tanggal :</label>
                        <select name="tanggal" id="tanggal" className='border border-gray-500 w-full rounded-md' value={tahun} onChange={(e) => setTahun(e.target.value)}>
                            <option value="">Pilin Tahun</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                        </select>
                    </div>
                    <div className=' mt-5'>
                        <label htmlFor="penjualan" className=' font-bold'>Penjualan :</label>
                        <input type="number" value={penjualan} onChange={(e) => setPenjualan(e.target.value)} name="penjualan" id="penjualan" className=' border border-gray-500 w-full rounded-md'/>
                    </div>
                    <div className=' mt-5'>
                        <label htmlFor="pengeluaran" className=' font-bold'>Pengeluaran :</label>
                        <input type="number" value={pengeluaran} onChange={(e) => setPengeluaran(e.target.value)} name="pengeluaran" id="pengeluaran" className=' border border-gray-500 w-full rounded-md'/>
                    </div>
                </div>
                <button className=' bg-blue-500 text-white rounded-md mt-5 p-2'>Tamabah Data</button>
            </form>
        </div>
    )
}

export default AddData