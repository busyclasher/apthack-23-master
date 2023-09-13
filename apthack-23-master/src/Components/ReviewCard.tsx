import React, { useState } from 'react';
import { DeleteReview } from './Delete_Review';
import { ReviewCreated } from '../graphql/types';
import { motion } from 'framer-motion';
import supabase from '../config/supabaseClient';

interface ReviewCardProps {
  metaData: {
    reviewer: string;
    metadata: string;
    category: string;
    // image: string;
    "domain-address": string;
    site_url: string;
    site_type: string;
    site_tag: string;
    site_safety: string;
    // ipfsUrl: string;
    id: string;
  } | null;
  MyReviews?: boolean;
  review?: ReviewCreated;
  onReviewDeleted?: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ metaData, MyReviews = false, onReviewDeleted }) => {
  const [showDescription, setShowDescription] = useState(false);

  if (!metaData) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-72 p-5 bg-center bg-cover" style={{ display: "flex", alignItems: "center" }}>
          <motion.div
            className="animate-spin rounded-full h-32 w-32 mx-auto border-t-2 border-b-2 border-indigo-200"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </div>
      </motion.div>
    );
  }
  

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  const handleDelete = () => {
    if (onReviewDeleted) {
      onReviewDeleted(); // Call the callback function when a review is deleted
    }
  };

return (
  <motion.div
    className="flex flex-col items-center justify-center w-full max-w-sm mx-auto"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="w-full h-full p-5 bg-gradient-to-r from-black via-gray-900 to-black shadow-xl shadow-indigo-400/30 bg-center bg-cover rounded-lg shadow-md">
      <motion.div className="flex flex-col h-full justify-between" initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.4 }}>
        <div>
          {showDescription ? (
            <div>
              <motion.h3
                className="text-2xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-200 to-indigo-600 font-bold mb-2"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {metaData.reviewer}

              </motion.h3>
              <div className="mt-5 text-white">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                  {metaData.metadata}
                </motion.p>
              </div>
            </div>
          ) : (
            <div>
              <motion.h3
                className="text-2xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-200 to-indigo-600 font-bold mb-2"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {metaData.reviewer}
                <span className="ml-auto" onClick={async () => {
                  
                  const { error } = await supabase
                  .from('apthacks')
                  .delete()
                  .eq('id', metaData.id)

                  window.location.reload();
                }}  >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>

                </span>

              </motion.h3>
              <motion.p className='truncate mt-4 bg-gradient-to-r from-indigo-600 to-indigo-400 text-gray-900 font-semibold text- rounded-lg p-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <a href={metaData.site_url} className='truncate'>{metaData["domain-address"]}</a>
              </motion.p>

              <motion.div className='grid grid-rows-2 grid-flow-col gap-4 mt-6 text-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <button className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-gray-900 font-semibold rounded-lg p-2">{metaData.category}</button>
                <button className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-gray-900 font-semibold rounded-lg p-2">{metaData.site_safety}</button>
                <button className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-gray-900 font-semibold rounded-lg p-2">{metaData.site_tag}</button>
                <button className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-gray-900 font-semibold rounded-lg p-2">{metaData.site_type}</button>
              </motion.div>
            </div>
          )}
        </div>

        {/* <div>
          {MyReviews && metaData.ipfsUrl ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <DeleteReview uri={metaData.ipfsUrl} id={metaData.id} onDelete={handleDelete} />
            </motion.div>
          ) : null}
        </div> */}
                <button className="mt-5 bg-gradient-to-r from-indigo-600 to-indigo-400 text-gray-900 font-semibold rounded-lg p-2">{metaData.site_url}</button>
        <motion.button
          className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-gray-900 font-semibold rounded-lg p-2 w-full text-center mt-5"
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {showDescription ? 'Go Back' : 'Meta-Data'}
        </motion.button>
      </motion.div>
    </div>
  </motion.div>
);

  
};

export default ReviewCard;