import React from "react";

function Contact() {
  return (
    <div className=" flex flex-col gap-4 text-justify mt-20 ">
      <h1 className="text-3xl font-bold text-center">Let's Connect!</h1>
      <h1 className="text-2xl mt-2">Contact Information</h1>
      <ul className="list-disc pl-6">
        <li>Email: janrusselgorembalem4</li>
        <li>
          Facebook:
          <a href="https://www.facebook.com/rselelel/">Jan Russel Gorembalem</a>
        </li>
        <li>
          Instagram:<a href="https://www.instagram.com/_selelel/">_selelel</a>
        </li>
        <li>
          <a className="flex" href="https://selelel.github.io/portfolio">
            Portfolio:
            <p className="font-bold">{"</sel>"}</p>
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Contact;
