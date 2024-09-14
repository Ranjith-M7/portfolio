import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="mb-12">
          <h3>About</h3>
          <p className="text-center text-2xl">A little about me</p>
        </div>
        <div className="text-md flex flex-col gap-6 leading-7 text-justify">
          <p>
            I'm Ranjith M, a dedicated React Front-End Developer based in
            Chennai, Tamil Nadu. I graduated with a{" "}
            <span className="font-semibold">
              Master's degree in Computer Science
            </span>{" "}
            Master's degree in Computer Science from Sir Issac Newton Arts &
            Science College, where I achieved a{" "}
            <span className="font-semibold">CGPA of 8.81.</span> With a strong
            foundation in modern web technologies, my technical expertise
            includes{" "}
            <span className="font-semibold">
              React.js, JavaScript, HTML, CSS and Core Java,
            </span>{" "}
            along with experience in utilizing tools like{" "}
            <span className="font-semibold">
              Git, Firebase, Tailwind CSS and Bootstrap.
            </span>
          </p>
          <p>
            Throughout my career, I have gained practical experience through
            internships at{" "}
            <span className="font-semibold">DATADNA, NULOGIC, and CODSOFT</span>
            . During my time at DATADNA Technologies, I worked as a{" "}
            <span className="font-semibold">
              Junior Full Stack Developer Intern
            </span>
            , where I developed multiple projects, including{" "}
            <span className="font-semibold">
              DentaCare, Graders, DATADNA and a Pharmacy Management System
            </span>
            . My role involved building responsive front-end designs using{" "}
            <span className="font-semibold">React.js and Bootstrap,</span>{" "}
            integrating <span className="font-semibold">Firebase </span>for
            <span className="font-semibold"> backend </span> functionalities,
            and implementing React Hooks for efficient state management.
          </p>
          <p>
            At <span className="font-semibold">NULOGIC</span>, I honed my skills
            in <span className="font-semibold">HTML/CSS</span> by creating
            professional, responsive web designs, and at{" "}
            <span className="font-semibold">CODSOFT</span>, I developed web
            projects.
          </p>
          <p>
            I am passionate about enhancing user experiences through innovative
            and effective solutions. My <span className="font-semibold">portfolio</span> showcases my ability to
            deliver high-quality, responsive web applications that meet client
            needs and exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
