import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

const Header: React.FC = () => {
    return (
        <div className="h-9 w-full border-b-2 border-gray-300 bg-white">
            <div className='mx-2 mb-2'>
            <Image src={logo} alt="Logo de Esto Es" layout='fixed' className='mx-3' />
            </div>
        </div>
    );
};

export default Header;
