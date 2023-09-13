import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MyReviews from './pages/MyReviews';
import AllReviews from './pages/AllReviews';
import Footer from './Components/Footer';
import supabase from './config/supabaseClient'
import {WalletSelector} from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import {AptosClient} from "aptos";
import {useWallet} from "@aptos-labs/wallet-adapter-react";
import SubmitForm from './pages/SubmitForm';

const App: React.FC = () => {
  return (
    
    
    console.log(supabase),

    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/my-reviews" element={<MyReviews/>} />
          <Route path="/SubmitForm" element={<SubmitForm/>} />
          <Route path="/" element={<AllReviews />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};



export default App;
