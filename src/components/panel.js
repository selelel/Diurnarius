import React from "react";
import classNames from "classnames";

function Panel({ children, ...rest }) {
  const args = classNames(
    rest.className,
    "duration-100 ease-out overflow-hidden h-28 p-4 my-2 border border-black rounded-sm"
  );

  return (
    <div className={args}>
      <div className="h-20 break-all flex flex-col gap-1">{children}</div>
    </div>
  );
}

export default Panel;
