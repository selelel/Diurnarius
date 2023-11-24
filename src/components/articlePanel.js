import React from "react";
import Panel from "./panel";

function ArticlePanel({ title, desc }) {
  return (
    <Panel className="cursor-pointer hover:scale-[1.01] hover:shadow-sm ">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-xs">{desc}</p>
    </Panel>
  );
}

export default ArticlePanel;
