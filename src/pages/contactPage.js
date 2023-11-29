import React from "react";

function Contact() {
  return (
    <div className=" flex flex-col gap-10 text-justify mt-20 max-w-max mx-auto items-center justify-center">
      <h1 className="text-3xl font-bold text-center">Let's Connect!</h1>
      <div className="flex flex-col items-center justify-center">
        <a
          className="text-xl"
          href="https://www.linkedin.com/in/jan-russel-gorembalem-828630241/"
        >
          Jan Russel Gorembalem
        </a>
        <p className="text-xs">(Linkedin)</p>
        <a className="text-xl" href="https://www.facebook.com/rselelel/">
          Jan Russel Gorembalem
        </a>
        <p className="text-xs">(Facebook)</p>
        <a className=" text-xl" href="https://www.instagram.com/_selelel/">
          _selelel
        </a>
        <p className="text-xs">(Instagram)</p>
        <a className=" text-xl" href="https://selelel.github.io/portfolio">
          <p className="font-bold">{"</sel>"}</p>
        </a>
        <p className="text-xs">(Portfolio)</p>
        <p className=" text-xl">janrusselgorembalem4@gmail.com</p>
        <p className="text-xs">(Email)</p>
      </div>
    </div>
  );
}

export default Contact;
