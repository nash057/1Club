import Image from 'next/image'
import BUp from '../Images/BorderUp.png'
import BDown from '../Images/BorderDown.png'

function Partners() {
  return (
    <div className="m-0 pb-0 pt-0 h-80 md:mt-60 text-white text-lg pr-0 bg-gradient-to-r from-green-700 via-green-400 to-green-900 justify-items-center">
        <div className="resize-x">
          <Image 
          className="mt-0 h-1 w-full block ml-auto mr-auto"
          src={BUp}
          // layout="intrinsic"
          />
        </div>
        <p>Our Partners</p>
        <Image 
        className="mb-0 h-1 w-full justify-items-stretch"
        src={BDown}
        // height={60}
        />
    </div>
  )
}

export default Partners