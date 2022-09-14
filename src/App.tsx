import {MagnifyingGlassPlus} from 'phosphor-react'

import './styles/main.css';
import foto from './assets/logo-nlw-esports.png';
function App() {
  return (
    
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={foto} alt="" />

      <h1 className="text-6xl text-white font-black mt-20"> 
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a  href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" alt="game-1" />
          <div className="w-full pt-16 pb-4 px-4 bg-name-gradient absolute bottom-0 left-0 right-0">
          <strong className='font-bold text-white block'>League of Legends</strong>
          <span className='text-zinc-300 text-sm block'>4 anuncios</span>
        </div>
        </a>

       

        
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt="game-2" />
          <div className="w-full pt-16 pb-4 px-4 bg-name-gradient absolute bottom-0 left-0 right-0">
          <strong className='font-bold text-white block'>Dota 2</strong>
          <span className='text-zinc-300 text-sm block'>4 anuncios</span>
        </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt="game-3" />
          <div className="w-full pt-16 pb-4 px-4 bg-name-gradient absolute bottom-0 left-0 right-0">
          <strong className='font-bold text-white block'>Counter Strike</strong>
          <span className='text-zinc-300 text-sm block'>4 anuncios</span>
        </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.png" alt="game-4" />
          <div className="w-full pt-16 pb-4 px-4 bg-name-gradient absolute bottom-0 left-0 right-0">
          <strong className='font-bold text-white block'>Apex Legends</strong>
          <span className='text-zinc-300 text-sm block'>4 anuncios</span>
        </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt="game-5" />
          <div className="w-full pt-16 pb-4 px-4 bg-name-gradient absolute bottom-0 left-0 right-0">
          <strong className='font-bold text-white block'>Fortnite</strong>
          <span className='text-zinc-300 text-sm block'>4 anuncios</span>
        </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt="game-6" />
          <div className="w-full pt-16 pb-4 px-4 bg-name-gradient absolute bottom-0 left-0 right-0">
          <strong className='font-bold text-white block'>World Of Warcraft</strong>
          <span className='text-zinc-300 text-sm block'>4 anuncios</span>
        </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
            <div>
              <strong className="text-2xl text-white font-black block">
                Não encontrou seu duo?
              </strong>
              <span className="text-zinc-400 block">
                Publique um anuncio para encontrar novos players.
              </span>
            </div>

            <button className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3">
              <MagnifyingGlassPlus size={24}/>
              Publicar anuncio
            </button>
        </div>
      </div>
   </div>
  )
  }

export default App
