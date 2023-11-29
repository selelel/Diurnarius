import React from "react";
import classNames from "classnames";

function Panel({ children, ...rest }) {
  const args = classNames(
    rest.className,
    "duration-100 ease-out overflow-hidden p-4 my-1 border border-black rounded-sm"
  );

  return (
    <div className={args}>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

export default Panel;
