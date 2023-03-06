import searchLogo from "../../assets/icon-search.svg";

interface SearchBarProps {
  placeholder: string;
  imgUrl?: string;
}

export const SearchBar = ({ placeholder, imgUrl }: SearchBarProps) => {
  return (
    <div className="flex items-center gap-4">
      <img src={imgUrl ? imgUrl : searchLogo} alt="" />
      <input
        className="test relative bg-transparent text-white placeholder:opactiy-5 focus:outline-none focus:border-grey caret-red"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
