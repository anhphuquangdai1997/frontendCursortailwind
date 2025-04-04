import React, { useContext } from 'react';
import Search from '../../../components/form/Search';
import { FaCartShopping } from "react-icons/fa6";
import { TiThMenuOutline } from "react-icons/ti";
import { HeaderContext } from '../../../context/HeaderContext/HeaderContext';
import { IoIosArrowBack } from "react-icons/io";
import AvatarDropdown from '../../../components/ui/AvatarDropdown';

const Header: React.FC = () => {
    const { isSearchOpen, toggleSearch } = useContext(HeaderContext);

    return (
        <header className="bg-gray-900 shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
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
                    <AvatarDropdown />
                </div>
            </div>
        </header>
    );
};

export default Header;
