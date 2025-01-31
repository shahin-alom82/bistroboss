import { FaRegUser } from "react-icons/fa";
import { nav } from "../contants";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Container from "./Container";

const Header = () => {
      return (
            <div>
                  <Container className="w-full fixed top-0 left-0 right-0 z-10 opacity-70 text-white  bg-black">
                        <div className="flex items-center justify-between py-5 px-7">
                              {/* ---------Logo ------------ */}
                              <Link to={"/"}>
                                    <h1 className="text-2xl font-semibold uppercase tracking-wide">Bistro Boss</h1>
                              </Link>
                              {/* ---------- Nav ----------- */}
                              <div className="flex items-center gap-10 text-white">
                                    {nav.map((item, index) => (
                                          <div key={index}>
                                                <h1 className="text-[18px] tracking-wide">{item?.title}</h1>
                                          </div>
                                    ))}
                              </div>
                              {/* ------ Login Cart icons ------ */}
                              <div className="flex items-center gap-10 text-white">
                                    <div className="flex items-center gap-2">
                                          <span className="border border-white py-2 px-2 rounded-full text-white">
                                                <FaRegUser size={25} />
                                          </span>
                                          <div>
                                                <h1 className="tracking-wide">Hello, Guest</h1>
                                                <p className="text-sm tracking-wide">Login / Register</p>
                                          </div>
                                    </div>
                                    <div className="relative ">
                                          <BsFillCartCheckFill className="text-white" size={30} />
                                          <span className="absolute right-1.5 text-xs bottom-[26px] text-white bg-green-600 px-1 rounded-full">0</span>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Header;
