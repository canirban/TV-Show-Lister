import React from "react";
import TvShowListItem from "../TvShowListItem/TvShowListItem";
import s from "./TvShowList.module.css";
const TvShowList = ({ tvShowList, onClick }) => {
  return (
    <>
      <div className={s.title}>You might also like :</div>
      <div className={s.list}>
      {tvShowList.map((show) => {
        return (
        <span key={show.id} className={s.tv_show_item}>
            <TvShowListItem onClick={onClick} tvShow={show} />
        </span>
        );
      })}
      </div>
    </>
  );
};

export default TvShowList;
