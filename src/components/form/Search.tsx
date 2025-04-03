import React, { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HeaderContext } from '../../context/HeaderContext/HeaderContext';
import { useNavigate } from 'react-router-dom';

const Search: React.FC = () => {
    const { isSearchOpen} = useContext(HeaderContext);
    const navigate = useNavigate();

    const handleSearchClick = () => {
        if (window.innerWidth < 768) { // Kiểm tra nếu là mobile
            navigate('/search');
        }
    };

    return (
        <div className="flex-grow mx-6 flex justify-center">
            <div className={`relative ${isSearchOpen ? 'w-full md:w-[60%]' : 'w-full'} max-w-md text-white`}>
                {/* Ẩn input trên mobile và chỉ hiển thị icon tìm kiếm */}
                <input
                    type="text"
                    placeholder="Bạn cần tìm điện thoại gì?"
                    className={`w-full p-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${isSearchOpen ? 'block' : 'hidden md:block'
                        }`}
                />
                <span
                    className={`absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 cursor-pointer ${isSearchOpen ? 'hidden' : 'block md:hidden'
                        }`}
                    onClick={handleSearchClick}
                >
                    {/* Ẩn icon trên desktop và chỉ hiển thị trên mobile */}
                    <FiSearch className="h-5 w-5" />
                </span>
            </div>
        </div>
    );
};

export default Search;