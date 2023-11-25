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
    return e.author.name;
  });

  const time = state.ArrayDB.map((e) => {
    return e.posted;
  });

  return (
    <>
      <h1 className="text-2xl font-semibold">{title[id]}</h1>
      <h1 className="text-sm font-thin">{description[id]}</h1>
      <h1 className="text-justify mt-5">{content[id]}</h1>
      <p className="text-sm">@{name_of_the_creator[id]}</p>
      <p>{time[id]}</p>
    </>
  );
}

export default ArticleIndi;
