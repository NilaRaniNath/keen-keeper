import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#2d4f48] text-white py-12 px-6">
      <div className="container mx-auto flex flex-col items-center">


        
       
        <h2 className="text-5xl font-bold mb-4 tracking-tight">KeenKeeper</h2>



        
        <p className="text-gray-300 text-center max-w-2xl mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

     
        <div className="flex flex-col items-center gap-4 mb-12">
          <h3 className="text-lg font-semibold uppercase tracking-wider">Social Links</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-white text-[#2d4f48] p-3 rounded-full hover:bg-gray-200 transition-all">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="bg-white text-[#2d4f48] p-3 rounded-full hover:bg-gray-200 transition-all">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="bg-white text-[#2d4f48] p-3 rounded-full hover:bg-gray-200 transition-all">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>


     
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;