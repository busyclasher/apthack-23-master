import { ChangeEvent, useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {WalletSelector} from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import {AptosClient} from "aptos";
import {useWallet} from "@aptos-labs/wallet-adapter-react";


import daptoraterLogo from '../assets/DAptrater.png';
import LogoutButton from './Logout';
// import ConnectWalletButton from './ConnectWallet';
import {useNavigate} from 'react-router-dom';
 
export const NETWORK = "testnet";
// TODO: Load URL from wallet
export const NODE_URL = `https://fullnode.${NETWORK}.aptoslabs.com`;
export const client = new AptosClient(NODE_URL);

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navigate = useNavigate();

  const {account, network, connected, signAndSubmitTransaction} = useWallet();

  const connectWallet = async () => {
    navigate('/my-reviews');
  };

  const navMain = async () => {
    navigate('/');
  };
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-lg"
      >
        <button onClick={connectWallet} className="bg-black z-10 font-bold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-200 to-indigo-400">Your Reviews</button>
      </Typography>
      {/*
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-lg"
      >
        <Link to="/" className='bg-black z-10 font-bold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-200 to-indigo-400'>
          All Reviews
        </Link>
      </Typography>
      */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg font-bold">
        <LogoutButton/>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-black border border-indigo-200">
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-bold"
        >
          <div>
            <div className="flex flex-row items-center">
              <img src={daptoraterLogo} alt="daptrater logo" className="h-12 w-12 mr-2"/>
              <div onClick={navMain} className="text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-200 to-indigo-400 text-3xl">DAptorater</div>
            </div>
          </div>
        </Typography>
        
        <div className="hidden lg:inline-block p-1 md:ml-5"><WalletSelector/></div>

        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="mr-2 mb-5 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="mx-auto">
            {/* <ConnectWalletButton/> */}
          </div>
        </div>
      </MobileNav>
    </Navbar>
    
  );
}