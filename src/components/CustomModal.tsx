'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineClose } from "react-icons/ai";

interface CustomModalProps {
  imageUrl: string;
}

const CustomModal: React.FC<CustomModalProps> = ({ imageUrl }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <>
      <div className="relative cursor-pointer" onClick={openModal}>
        <Image
          src={imageUrl}
          alt="Thumbnail"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>

      {open && (
        <>
          

          <div
            className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative flex items-center justify-center p-4 bg-white">
              <button
                className="absolute top-4 right-4 text-2xl text-[#F06384] bg-white rounded-full p-2 shadow-md transition-transform transform hover:scale-110"
                onClick={() => setOpen(false)}
              >
                <AiOutlineClose />
              </button>
              <Image
                src={imageUrl}
                alt="Full Size"
                width={800}
                height={600}
                layout="intrinsic"
                className="max-w-[90vw] max-h-[90vh] object-cover"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CustomModal;
