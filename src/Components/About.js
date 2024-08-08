import React from 'react';
import image from "../images/motion-background.jpg";

const imageAltText="purple and blue abstract background";

const description=
  "I'm a Software Developer and VLSI Engineer. I enjoy creating unique and simplistic applications in creative ways and make Design Verification for Integrated chips.";

const skillsList=[
    "Full Stack Web Development",
    "UI/UX design",
    "Cloud Computing using AWS",
    "Python Programming",
    "OOPS concept in Java",
    "DSA with C",
    "Digital Logic Deign",
    "System Verilog"
]  

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my skillset, I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className='padding' id='about'>
        <img className='background' src={image} alt={imageAltText} />
    <div 
        style={{
            backgroundColor: "white",
            width:"50%",
            padding:'4rem',
            margin:'3rem auto',
            textAlign:'center'
        }}
    >
      <h2>About Myself</h2>
      <p className='large'>{description}</p>
      <hr />
      <h3>My Skills</h3>
      <ul 
        style={{
            textAlign:"left",
            columns: 2,
            fontSize:'1.25rem',
            margin:'2rem 3rem',
            gap:'3rem'
        }}
        >
            {skillsList.map((skill)=>(
                <li key={skill}>{skill}</li>
            ))}
        </ul>
        <hr />
        <p style={{ padding:"1rem 3rem 0"}}>{detailOrQuote}</p>
    </div>
    </section>
  )
}

export default About;
