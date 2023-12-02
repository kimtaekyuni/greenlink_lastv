import React from "react";
import TopNav from "../components/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../components/MainNav";
import Btn from "../components/Btn";
import GalleryPic from "../components/GalleryPic";
import GalleryPic1 from "../assets/GalleryPic1.png";
import GalleryPic2 from "../assets/GalleryPic2.png";
import GalleryPic3 from "../assets/GalleryPic3.png";
import GalleryPic4 from "../assets/GalleryPic4.png";
import GalleryPic5 from "../assets/GalleryPic5.png";
import styles from "./GalleryhomePage.module.css";

function GalleryhomePage(props) {
  const topdata = JSON.parse(localStorage.getItem("data"));
  const textname = topdata.user.flower_pot.plant_name;

  return (
    <div>
      <TopNav text={textname + "사진"} icon1={no_icon} icon2={no_icon} />
      <p className={styles.text}>2023.11.18</p>
      <div className={styles.box}>
        <GalleryPic img={GalleryPic2} />
        <GalleryPic img={GalleryPic1} />
      </div>
      <p className={styles.text}>2023.11.01</p>
      <div className={styles.box}>
        <GalleryPic img={GalleryPic3} />
        <GalleryPic img={GalleryPic4} />
      </div>
      <p className={styles.text}> 2023.10.28</p>
      <div className={styles.box}>
        <GalleryPic img={GalleryPic5} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Btn text="사진 올리기" />
      <MainNav />
    </div>
  );
}

export default GalleryhomePage;
