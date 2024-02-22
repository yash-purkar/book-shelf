import React, { useEffect, useState } from "react";
import "./navbar.css";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isUserOnSearchPage, setIsUserOnSearchPage] = useState<boolean>(false);

  const handleNavigate = () => {
    const navigateTo = isUserOnSearchPage ? "/" : "/search";
    navigate(navigateTo);
  };

  useEffect(() => {
    if (location.pathname.includes("search")) {
      setIsUserOnSearchPage(true);
    } else {
      setIsUserOnSearchPage(false);
    }
  }, [location]);

  return (
    <nav>
      <h1>Book Shelf</h1>
      <button onClick={handleNavigate} className="navigate_button">
        {isUserOnSearchPage ? (
          <>
            <FaArrowLeftLong /> Home{" "}
          </>
        ) : (
          <>
            Search <FaArrowRightLong />
          </>
        )}
      </button>
    </nav>
  );
};
