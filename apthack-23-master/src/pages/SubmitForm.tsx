import React from "react";
import { useEffect, useState } from "react";

import supabase from "../config/supabaseClient";

const SubmitForm = () => {
  const [name, setName] = useState("")

  function guidGenerator() {    var S4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
 };
 return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

  useEffect(() => {

  }, []);

  async function submitForm(){
    const metadata = (document.getElementById('metadata') as HTMLInputElement)?.value
    const reviewer = (document.getElementById('reviewer') as HTMLInputElement)?.value
    const category = (document.getElementById('Category') as HTMLInputElement)?.value
    const domain_address = (document.getElementById('Domain-Address') as HTMLInputElement)?.value
    const site_url = (document.getElementById('Site-Url') as HTMLInputElement)?.value
    const site_type = (document.getElementById('Site-Type') as HTMLInputElement)?.value
    const site_tag = (document.getElementById('Site-Tag') as HTMLInputElement)?.value
    const safety = (document.getElementById('Safety') as HTMLInputElement)?.value

    const { error: insertErrors } = await supabase
      .from("apthacks")
      .insert({
        id: Math.floor(Math.random() * 100000),
        reviewer: reviewer,
        metadata: metadata,
        category: category,
        "domain-address": domain_address,
        site_url: site_url,
        site_type: site_type,
        site_tag: site_tag,
        site_safety: safety,
      });

      window.location.href="/"

  }

  return (

    <div>
      <p className="font-bold flex items-center justify-left text-px-0 mb-10 mt-5 ml-20 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-200 to-indigo-400 text-2xl md:text-md lg:px-24">
        Submit the reviews here!
      </p>
      <div className="grid grid-rows-3 grid-flow-col gap-4 items-center justify-center">
      <label className="text-white">Reviewer Wallet:
        <input className="mb-3 sm:mb-0 sm:mr-2 p-2 rounded-md bg-black bg-opacity-50 text-indigo-100 border-2 border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent w-full sm:w-full" type="text" id="reviewer" placeholder="0x61262ee207f8d2cbd28c4b5587b388a1b67c75450608c448fb2b602fda2ca07c"/>
      </label>
      <label className="text-white">Metadata:
        <input className="mb-3 sm:mb-0 sm:mr-2 p-2 rounded-md bg-black bg-opacity-50 text-indigo-100 border-2 border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent w-full sm:w-full" type="text" id="metadata" placeholder="Enter metadata"/>
      </label>
      <label className="text-white">Category type:
        <input className="mb-3 sm:mb-0 sm:mr-2 p-2 rounded-md bg-black bg-opacity-50 text-indigo-100 border-2 border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent w-full sm:w-full" type="text" id="Category" placeholder="Enter Category"/>
      </label>
      <label className="text-white">Enter Domain Address:
        <input className="mb-3 sm:mb-0 sm:mr-2 p-2 rounded-md bg-black bg-opacity-50 text-indigo-100 border-2 border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent w-full sm:w-full" type="text" id="Domain-Address" placeholder="Enter Address"/>
      </label>
      <label className="text-white">Enter Site Url:
        <input className="mb-3 sm:mb-0 sm:mr-2 p-2 rounded-md bg-black bg-opacity-50 text-indigo-100 border-2 border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent w-full sm:w-full" type="text"  id="Site-Url" placeholder="Enter Site URL"/>
      </label>
      <label className="text-white">Enter Site Type:
        <input className="mb-3 sm:mb-0 sm:mr-2 p-2 rounded-md bg-black bg-opacity-50 text-indigo-100 border-2 border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent w-full sm:w-full" type="text"  id="Site-Type" placeholder="Enter Site-type"/>
      </label>
      <label className="text-white">Enter Site tag:
        <input className="mb-3 sm:mb-0 sm:mr-2 p-2 rounded-md bg-black bg-opacity-50 text-indigo-100 border-2 border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent w-full sm:w-full" type="text"  id="Site-Tag" placeholder="Enter Site-tag"/>
      </label>
      <label className="text-white">Safety:
        <input className="mb-3 sm:mb-0 sm:mr-2 p-2 rounded-md bg-black bg-opacity-50 text-indigo-100 border-2 border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent w-full sm:w-full" type="text"  id="Safety" placeholder="Safe/Unsafe"/>
      </label>
      <button className="py-2 px-4 font-bold bg-gradient-to-r from-indigo-400 to-indigo-300 text-gray-900 rounded-lg p-2 w-full sm:w-auto" onClick={submitForm}>
        Submit
      </button>

      </div>

 
    </div>
  );
};

export default SubmitForm;
