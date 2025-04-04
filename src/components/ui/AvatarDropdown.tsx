import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AvatarDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        // Xử lý đăng xuất ở đây
        navigate('/login');
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center focus:outline-none"
            >
                <img
                    src="https://res.cloudinary.com/daiphu1997/image/upload/v1657506636/Qu%E1%BA%A3ng/%E1%BA%A3nh/41712268_331095470789424_6628640091268972544_n_-_Sao_ch%C3%A9p_2_argdzh.jpg"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full cursor-pointer hover:shadow-xl transition-shadow duration-300"
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Profile
                    </Link>
                    <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Dashboard
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default AvatarDropdown; 