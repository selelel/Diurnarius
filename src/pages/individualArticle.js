import React from "react";
import { useParams } from "react-router-dom";
import { Context } from "../utils/context";

function ArticleIndi() {
  const { id } = useParams();
  const { state } = Context();
  const title = state.ArrayDB.map((e) => {
    return e.title;
  });
  const content = state.ArrayDB.map((e) => {
    return e.content;
  });
  const description = state.ArrayDB.map((e) => {
    return e.desc;
  });

  const name_of_the_creator = state.ArrayDB.map((e) => {
    return e.author?.name;
  });

  const time = state.ArrayDB.map((e) => {
    return e.posted;
  });

  const cover_url = state.ArrayDB.map((e) => {
    return e.pic?.replaceAll('"', "");
  });

  console.log(cover_url);

  return (
    <>
      <img src={cover_url[id]} alt="cover" />
      <p className="text-xs my-1">
        {time[id]} | @{name_of_the_creator[id]}
      </p>
      <h1 className="text-4xl font-semibold">{title[id]}</h1>
      <h1 className="text-sm font-thin">{description[id]}</h1>
      <h1 className="text-justify mt-5">{content[id]}</h1>
    </>
  );
}

export default ArticleIndi;
