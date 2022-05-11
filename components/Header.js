import Image from "next/dist/client/image"
import Logo from "../Images/ClubLogo.jpeg"
import {
    WhatsappShareButton,
    WhatsappIcon,
    TelegramIcon,
  } from 'next-share'
import DiscordLogo from '../Images/discord1.png'
// import Button from "@material-tailwind/react/Button";
// import { FaDiscord } from 'react-icons/fa'

function Header() {
  return (
    <div className="flex flex-col top-0 sm:flex-row md:ml-20 justify-between items-center md:mr-2 h-auto px-4 py-2 rounded-md">
        <Image 
            className="object-cover rounded-2xl mt-1"
            src={Logo} 
            width={200} 
            height={75}
            alt=""
        />

        {/* <WhatsappShareButton
            url={'https://chat.whatsapp.com/IW18ObNsO6OGXX3hUvuRpj'}
            title={'next-share is a social share buttons for your next React apps.'}
            separator=":: "
        >
        </WhatsappShareButton> */}

        <div className="inline-flex sm:flex-wrap">
            {/* <span>Join us on WhatsApp</span> */}        
            <a className="p-2 sm:hover:scale-105 hover:z-50" href="https://discord.com/invite/CjCS2vseUD">
                <Image 
                    className="object-cover rounded-2xl"
                    src={DiscordLogo} 
                    width={60} 
                    height={60} 
                    alt=""
                />
            </a>
            <a className="p-2 sm:hover:scale-105 hover:z-50" href="https://t.me/+kBLSiQQrSDtlZmY9">
                <TelegramIcon size={60} borderRadius={20} round={false}/>
            </a>
            <a className="p-2 sm:hover:scale-105 hover:z-50" href="https://chat.whatsapp.com/C2UEC7NfSQt6SxBpJxt3XA">
                <WhatsappIcon className="WhatsApp" size={'3.75rem'} borderRadius={20} round={false}/>
            </a>
            
        </div>
        
            
    </div>
  )
}

export default Header
