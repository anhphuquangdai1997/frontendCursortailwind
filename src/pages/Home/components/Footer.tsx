import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Về chúng tôi</h3>
                        <p className="text-gray-400">
                            Chúng tôi cung cấp các sản phẩm điện thoại chất lượng cao với giá cả phải chăng.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition">Trang chủ</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-white transition">Sản phẩm</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition">Giới thiệu</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Liên hệ</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hỗ trợ khách hàng</h3>
                        <ul className="space-y-2">
                            <li><Link to="/faq" className="text-gray-400 hover:text-white transition">Câu hỏi thường gặp</Link></li>
                            <li><Link to="/shipping" className="text-gray-400 hover:text-white transition">Vận chuyển</Link></li>
                            <li><Link to="/returns" className="text-gray-400 hover:text-white transition">Đổi trả</Link></li>
                            <li><Link to="/privacy" className="text-gray-400 hover:text-white transition">Chính sách bảo mật</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM</li>
                            <li>Email: info@example.com</li>
                            <li>Điện thoại: (84) 123-456-789</li>
                        </ul>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaFacebook className="text-2xl" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaInstagram className="text-2xl" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <FaYoutube className="text-2xl" />
                    </a>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 Your Company. All rights reserved.
                        </p>
                        <div className="flex space-x-4">
                            <img src="/images/payment/visa.png" alt="Visa" className="h-8" />
                            <img src="/images/payment/mastercard.png" alt="Mastercard" className="h-8" />
                            <img src="/images/payment/paypal.png" alt="PayPal" className="h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;