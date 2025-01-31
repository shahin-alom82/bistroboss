import { FaRegUser } from "react-icons/fa";
import { nav } from "../contants";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
      return (
            <div className="border-b border-gray-300 px-6 py-4">
                  <div className="flex items-center justify-between">
                        {/* ---------Logo ------------ */}
                        <Link to={"/"}>
                              <h1 className="text-2xl font-semibold uppercase tracking-wide">Bistro boss</h1>
                        </Link>
                        {/* ---------- Nav ----------- */}
                        <div className="flex items-center gap-10">
                              {
                                    nav.map((item, index) => (
                                          <div key={index}>
                                                <h1 className="text-[18px] tracking-wide">{item?.title}</h1>
                                          </div>
                                    ))
                              }
                        </div>
                        {/* ------ Login Cart icons ------ */}
                        <div className="flex items-center gap-10">
                              <div className="flex items-center gap-2">
                                    <span className="border border-gray-400 py-2 px-2 rounded-full text-gray-700"><FaRegUser size={25} /></span>
                                    <div>
                                          <h1 className="tracking-wide">Hello, Guest</h1>
                                          <p className="text-sm tracking-wide">Login / Register</p>
                                    </div>
                              </div>
                              <div className="relative">
                                    <BsFillCartCheckFill className="text-gray-700" size={30}/>
                                    <span className="absolute right-1.5 text-xs bottom-[26px] text-white bg-green-600  px-1 rounded-full">0</span>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Header;