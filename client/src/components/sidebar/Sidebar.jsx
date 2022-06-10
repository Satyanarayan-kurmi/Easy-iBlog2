// import axios from "axios";
// import { useEffect, useState } from "react";
import "./sidebar.css";

export default function Sidebar() {
  // const [cats, setCats] = useState([]);

  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/categories");
  //     setCats(res.data);
  //   };
  //   getCats();
  // }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://cdn.pixabay.com/photo/2018/04/07/08/28/notepad-3297994_960_720.jpg"
          alt=""
        />
        <p>
          I'm a software Developer and competive programmer.
          This is my digital home, where I offer unfiltered advice and offerings about some topic which may be help full to some people.I have started this journey in the month march 2022.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="https://www.facebook.com/groups/14819263191464"><i className="topIcon fab fa-facebook-square"></i></a>
        <a href="https://twitter.com/Satyana25827017"><i className="topIcon fab fa-twitter-square"></i></a>
        <a href="https://in.pinterest.com/themoneymanual/_created/"><i className="topIcon fab fa-pinterest-square"></i></a>
        <a href="https://www.instagram.com/oflatestblog/"><i className="topIcon fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
  );
}
