import iconBookmark from "../../../assets/icon-nav-bookmark.svg";
import iconHome from "../../../assets/icon-nav-home.svg";
import iconMovies from "../../../assets/icon-nav-movies.svg";
import iconTvSeries from "../../../assets/icon-nav-tv-series.svg";
import { Link } from "react-router-dom";

interface DataIconsAndItems {
  icon: string;
  url: string;
}

export const Nav = () => {
  const dataIconsAndItems: DataIconsAndItems[] = [
    { icon: iconHome, url: "/" },
    { icon: iconMovies, url: "/" },
    { icon: iconTvSeries, url: "/" },
    { icon: iconBookmark, url: "/" },
  ];

  return (
    <nav className="">
      <ul className="flex gap-[24px] items-center">
        {dataIconsAndItems.map(({ icon, url }, index: number) => {
          return (
            <li>
              <a href={url}>
                <img src={icon} alt="nav-icon" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
