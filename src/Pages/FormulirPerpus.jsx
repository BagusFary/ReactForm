import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function FormulirPerpus() {
  const navigate = useNavigate();

  const [nama,setNama] = useState('');
  const [tanggallahir,setTanggalLahir] = useState('');
  const [npm,setNpm] = useState('');
  const [telp,setTelp] = useState('');
  const [semester,setSemester] = useState('');
  const [alamat, setAlamat] = useState('');
  const [email, setEmail] = useState('');


  function handleCLick(event){
    event.preventDefault()
    alert(
        `Nama = ${nama} \nTanggal Lahir = ${tanggallahir} \nNPM = ${npm} \nNO Telp = ${telp} \nSemester = ${semester} \nAlamat = ${alamat} \nEmail = ${email}`
    )
  }

  return (
    <>
            <Header/>

      <div className="container flex justify-center m-2 pb-10">
        <div className="h-[700px] w-[400px]">
          <form action="" className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 outline outline-2 " onSubmit={handleCLick}>
            <div className="flex justify-center">
              <h1 className="flex items-center text-lg font-extrabold dark:text-white">
                Formulir Anggota Perpustakaan
              </h1>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="nama"
              >
                Nama
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline outline outline-1"
                placeholder="Nama Lengkap"
                id="nama"
                type="text"
                value={nama} onChange={(event) => {setNama(event.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="tanggallahir"
              >
                Tempat Tanggal Lahir
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline outline outline-1"
                id="tanggallahir"
                type="date"
                value={tanggallahir} onChange={(event) => {setTanggalLahir(event.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="alamat"
              >
                Alamat
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline outline outline-1"
                placeholder="Jl.Pelabuhan Bakahuni"
                id="alamat"
                type="text"
                value={alamat} onChange={(event) => {setAlamat(event.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="npm"
              >
                NPM
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline outline outline-1"
                placeholder="21**"
                id="npm"
                type="number"
                value={npm} onChange={(event) => {setNpm(event.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="semester"
              >
                Tingkat/Semester
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline outline outline-1"
                id="semester"
                type="text"
                placeholder="Semester 2"
                value={semester} onChange={(event) => {setSemester(event.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="notelp"
              >
                No. Hp
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline outline outline-1"
                id="notelp"
                type="number"
                placeholder="Nomor HP"
                value={telp} onChange={(event) => {setTelp(event.target.value)}}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline outline outline-1"
                id="email"
                type="email"
                placeholder="test@gmail.com"
                value={email} onChange={(event) => {setEmail(event.target.value)}}
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
              />
            </div>
            <div className="flex items-center justify-between">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" type="submit">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Masukkan Data
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
