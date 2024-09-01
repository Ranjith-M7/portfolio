import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="flex flex-col gap-5 leading-6">
          <p>
            I'm Ranjith M, a dedicated React Front-End Developer based in
            Chennai, Tamil Nadu. I graduated with a Master's degree in Computer
            Science from Sir Issac Newton Arts & Science College, where I
            achieved a CGPA of 8.81. With a strong foundation in modern web
            technologies, my technical expertise includes React.js, JavaScript,
            HTML, CSS and Core Java, along with experience in utilizing tools like Git,
            Firebase, Tailwind and Bootstrap.
          </p>
          <p>
            Throughout my career, I have gained practical experience through
            internships at DATADNA, NULOGIC, and CODSOFT. During my time at
            DATADNA, I worked as a Junior Developer Intern, where I developed
            multiple projects, including DentaCare, Graders, DATADNA and a Pharmacy
            Management System. My role involved building responsive front-end
            designs using React.js and Bootstrap, integrating Firebase for
            backend functionalities, and implementing React Hooks for efficient
            state management.
          </p>
          <p>
            At NULOGIC, I honed my skills in HTML/CSS by creating professional,
            responsive web designs, and at CODSOFT, I developed web projects.
          </p>
          <p>
            I am passionate about enhancing user experiences through innovative
            and effective solutions. My portfolio showcases my ability to
            deliver high-quality, responsive web applications that meet client
            needs and exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
