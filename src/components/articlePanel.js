import React from "react";
import Panel from "./panel";

function ArticlePanel({ title, desc }) {
  return (
    <Panel className="cursor-pointer">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-xs">{desc}</p>
    </Panel>
  );
}

export default ArticlePanel;
