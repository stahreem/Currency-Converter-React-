
import Bg from '../assets/bg.mp4'
import Main from './Main'

function Backgroung() {
  return (
    <div>
      <div className='h-full w-fit'>
        <video src={Bg} autoPlay loop muted
        className='absolute inset-0 object-cover w-screen h-screen '/>
        <div className='absolute z-10 flex flex-col items-center justify-center w-9/12 h-full text-center text-white -translate-x-1/2 -translate-y-1/2 bg-transparent top-2/4 left-2/4'>
            <Main/>
        </div>
      </div>
    </div>
  )
}

export default Backgroung
