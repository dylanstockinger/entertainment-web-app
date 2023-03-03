import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { ProfilPicture } from "./ProfilPicture";

export const Navbar = () => {
  return (
    <div className=" flex justify-between items-center bg-[#151D2F] px-[16px] py-[18px]">
      <Logo />
      <Nav />
      <ProfilPicture />
    </div>
  );
};
