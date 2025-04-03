import React, { useContext } from 'react';
import Search from '../../../components/form/Search';
import { FaCartShopping } from "react-icons/fa6";
import { TiThMenuOutline } from "react-icons/ti";
import { HeaderContext } from '../../../context/HeaderContext/HeaderContext';
import { IoIosArrowBack } from "react-icons/io";

const Header: React.FC = () => {
    const { isSearchOpen, toggleSearch } = useContext(HeaderContext);

    return (
        <header className="bg-gray-900 shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4 gap-2">
                {/* Logo - Hidden on mobile when search is open */}
                <div className={`${isSearchOpen ? 'hidden md:block' : 'block'}`}>
                    <div className="text-3xl font-bold text-blue-500 transition-colors duration-300 hover:text-blue-400">
                        Logo
                    </div>
                </div>

                {/* Back button - Only shown on mobile when search is open */}
                <div className={`${isSearchOpen ? 'block md:hidden' : 'hidden'}`}>
                    <IoIosArrowBack
                        onClick={toggleSearch}
                        className="text-white text-2xl cursor-pointer"
                    />
                </div>

                {/* Menu - Always visible on desktop, hidden on mobile when search is open */}
                <div className={`${isSearchOpen ? 'hidden md:block' : 'block'}`}>
                    <TiThMenuOutline className="text-white text-2xl cursor-pointer hover:text-blue-400 transition-colors duration-300" />
                </div>

                {/* Search component */}
                <Search />

                {/* Cart and Avatar - Hidden on mobile when search is open */}
                <div className={`flex items-center gap-4 ${isSearchOpen ? 'hidden md:flex' : 'flex'}`}>
                    <FaCartShopping className="text-red-400 text-2xl cursor-pointer hover:text-blue-400 transition-colors duration-300" />
                    <img
                        src="https://res.cloudinary.com/daiphu1997/image/upload/v1657506636/Qu%E1%BA%A3ng/%E1%BA%A3nh/41712268_331095470789424_6628640091268972544_n_-_Sao_ch%C3%A9p_2_argdzh.jpg"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
