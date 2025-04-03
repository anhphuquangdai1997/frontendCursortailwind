import React from 'react';

import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const SearchPage: React.FC = () => {
    
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Quay lại trang trước
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="container mx-auto p-4">
                <div className="flex items-center gap-4 mb-4 ">
                    <IoIosArrowBack
                        onClick={handleBack}
                        className="text-white text-2xl cursor-pointer"
                    />
                    <input
                        type="text"
                        placeholder="Bạn cần tìm điện thoại gì?"
                        className="w-full text-white p-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 "
                        autoFocus
                    />
                </div>
                {/* Nội dung tìm kiếm sẽ được thêm vào đây */}
                <div className="text-white">
                    Kết quả tìm kiếm sẽ hiển thị ở đây
                </div>
            </div>
        </div>
    );
};

export default SearchPage; 