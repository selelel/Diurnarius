import React from "react";

function About() {
  return (
    <div className="flex flex-col gap-4 text-justify mt-20 ">
      <h1 className="text-3xl font-bold text-center">About My Blog App</h1>
      <h1 className="text-2xl text-center mt-2">
        Welcome to my personal blog app!
      </h1>
      <p>
        I'm a passionate computer programmer with a keen interest in both
        frontend and backend development. This blog serves as a platform for me
        to share my journey of learning, exploring, and creating in the world of
        coding.
      </p>
      <h1 className="text-2xl text-center">Why I Created This App</h1>
      <p>
        The primary motivation behind this app is to document my progress and
        share my experiences along the way. I believe that sharing knowledge and
        fostering a sense of community are essential aspects of personal growth.
        Through this blog, I hope to connect with fellow programmers, inspire
        others, and contribute to the collective learning experience.
      </p>
      <h1 className="text-2xl text-center">How I Created This App</h1>
      <p>
        To bring this blog app to life, I utilized a combination of powerful
        tools and technologies. Firebase serves as the backbone for backend
        authentication, ensuring secure user management. ReactJs plays a pivotal
        role in crafting the interactive and user-friendly frontend interface.
        Additionally, I heavily rely on ChatGPT and YouTube tutorials to expand
        my knowledge and gain insights into programming concepts.
      </p>
      <h1 className="text-2xl text-center">Limitations and Future Plans</h1>
      <p>
        As a developer in progress, I'm continually refining and enhancing my
        skills. While this app is fully functional, I acknowledge that it may
        not be without limitations. I haven't conducted rigorous testing, and
        the development process was relatively short-lived. However, I'm
        committed to continuous improvement and plan to address any shortcomings
        in the future.
      </p>
      <h1 className="text-2xl text-center">Thank you for visiting my blog!</h1>

      <p>
        I invite you to embark on this journey of learning and exploration with
        me. Share your thoughts, ask questions, and engage in meaningful
        discussions. Together, we can foster a vibrant community of programmers
        and enthusiasts.
      </p>
    </div>
  );
}

export default About;
