import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header"

export default function Formulir() {
  const navigate = useNavigate();

  const [nama,setNama] = useState('');
  const [noPekerja,setNoPekerja] = useState('');
  const [telp,setTelp] = useState('');
  const [unit,setUnit] = useState('');
  const [tanggallahir,setTanggalLahir] = useState('');
  const [alamat, setAlamat] = useState('');

  const [file, setFile] = useState();

  function handleClick(event){
    event.preventDefault()
    alert(
      `Nama = ${nama} \nNo. Pekerja = ${noPekerja} \nNo Telp = ${telp} \nUnit = ${unit} \nTanggal Lahir = ${tanggallahir} \nAlamat = ${alamat} `
      
    )
  }

  function handleChange(e){
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }



  return (
    <>
            <Header/>

       <div className="container flex justify-center m-2 pb-12">
        <div className="h-[300px] w-[450px]">
          <form action="" className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 outline outline-2" onSubmit={handleClick}>
          <div className="flex justify-center">
            <h1 className="text-base font-bold">Formulir SP-FKPPM</h1>
          </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 "
                for="nama"
              >
                Nama
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required placeholder="Nama Lengkap"
                id="nama"
                type="text"
                value={nama} onChange={(event) => {setNama(event.target.value)}}/>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="nopekerja"
              >
                No. Pekerja
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required placeholder="21**"
                id="nopekerja"
                type="number"
                value={noPekerja} onChange={(event) => {setNoPekerja(event.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="notelp"
              >
                No. Telp
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required
                id="telp"
                type="number"
                placeholder="Nomor HP/Rumah/Kantor"
                value={telp} onChange={(event) => {setTelp(event.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="unit"
              >
                Unit
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required
                id="unit"
                type="text"
                placeholder="Departemen"
                value={unit} onChange={(event) => {setUnit(event.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="tanggallahir"
              >
                Tanggal Lahir
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required
                id="tanggallahir"
                type="date"
                value={tanggallahir} onChange={(event) => {setTanggalLahir(event.target.value)}}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="alamat"
              >
                Alamat
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required placeholder="Jl.Pelabuhan Bakahuni"
                id="alamat"
                type="text"
                value={alamat} onChange={(event) => {setAlamat(event.target.value)}}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="gambar"
              >
                Upload gambar
              </label>
              <input
                className=""
                id="gambar"
                type="file"
                onChange={handleChange}
              />
              <img src={file}/>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
       </div>
    </>
  );
}
