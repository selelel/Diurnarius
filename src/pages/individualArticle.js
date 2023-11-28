/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { useParams } from "react-router-dom";
import { Context } from "../utils/context";
import ReactMarkdown from "react-markdown";

function ArticleIndi() {
  const { id } = useParams();
  const { state } = Context();
  const currentArticle = state.ArrayDB[id];

  if (!currentArticle) {
    return <div>Article not found</div>;
  }

  return (
    <div className="mt-5">
      <div className="w-full h-[15rem] overflow-hidden">
        <img
          className=" object-none object-center h-full w-full"
          src={currentArticle.pic?.replaceAll('"', "")}
          alt="cover"
        />
      </div>

      <p className="text-[0.60rem] my-1 text-right">
        {currentArticle.posted} | @{currentArticle.author?.name}
      </p>

      <div className="flex-col flex gap-3">
        <h1 className="text-4xl font-bold">{currentArticle.title}</h1>
        <h1 className="text-sm font-thin text-justify">
          {currentArticle.desc}
        </h1>
        <div className="text-justify mt-5" />
        <ReactMarkdown
          components={{
            // eslint-disable-next-line jsx-a11y/heading-has-content
            h1: ({ node, ...props }) => (
              <h1 style={{ fontSize: "1.5rem" }} {...props} />
            ),
          }}
        >
          {currentArticle.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default ArticleIndi;
