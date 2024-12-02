import { useState } from "react";
import Button from "../Button/Button";



const NavLInks = () => {
  let [open, setOpen] = useState(false)
  let links = [
    { name: "Home", link: "#" },
    { name: "Service", link: "#" },
    { name: "About", link: "#" },
    { name: "Contact", link: "#" }
  ]
  return (
    <div>
      <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'}`}>
        {
          links.map(link => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500 ml-8'>{link.name}</a>
            </li>
          ))
        }
        <Button title={'Login'} />
      </ul>
    </div>
  );
};

export default NavLInks;