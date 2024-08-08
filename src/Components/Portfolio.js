import React from 'react';

import image from "../images/design-desk.jpeg";

const imageAltText="desktop with books and laptop";

const projectlist=[
    {
        title: "Art Gallery App",
        description:
          "This project is a React-based web application that serves as an online art gallery. It allows users to upload and view artworks. The application utilizes Firebase for backend services, including Firestore for storing artwork data and Firebase Storage for handling file uploads. Users can navigate through the app to view the gallery, upload new art pieces, and encounter a custom 404 page for undefined routes. The project demonstrates proficiency in React, Firebase integration, and basic routing with React Router.",
        url: "https://artgallery-bc3s.onrender.com/",
      },
      {
        title: "Study of Open Source Wi-Fi using FPGA",
        description:
          "Designed and Implemented an open-source Wi-Fi system by programming an ADRV93 FPGA board using Verilog and integrating an RF transceiver. Utilized Orthogonal Frequency Division Multiplexing(OFDM) to achieve reliable signal transmission and reception, resulting in a functional Wi-Fi network operating at the 2.54 GHz frequency range. This project aimed to provide a cost-effective and accessible solution for wireless communication.",
        url: "https://github.com/svp2234/Major-project",
      },
      {
        title: "Face Detection using Python",
        description:
          "I have developed a real-time color detection system using Python and OpenCV. The project involved capturing live video input through a webcam, converting image frames from BGR to HSV color space, and detecting specific colors(red, green, blue) using defined color ranges. Utilized morphological transformaations and contour detection to highlight and isolate the detected colors. This system demonstrates the practical application of computer vision techniques in tasks such as traffic signal recognition and industrial automation for object sorting based on color.",
        url: "https://github.com/svp2234/Python-project",
      },
      {
        title: "Home Automation through Voice Commands",
        description:
          "I have developed a IoT based home automation system using an Arduino Uno, Bluetoothe module(HC-05) and a movile app for voice commands. The system allows remote control of home appliances (AC bulbs and a DC motor) through Bluetooth communication. Utilized a relay module and motor driver for device control, with status updates displayed on an LCD screen. This project aimed to enhance convenience for users, particularly the elderly and disabled, by enabling easy and efficient control of household devices via smartphone.",
        url: "https://github.com/svp2234/Home-Automation-project",
      }
];

const Portfolio = () => {
  return (
    <section className='padding' id='portfolio'>
        <h2 style={{ textAlign:"center"}}>Portfolio</h2>
        <div style={{ display:'flex', flexDirection:'row', paddingTop:'3rem'}}>
            <div style={{ maxWidth:"40%", alignSelf:"center"}}>
                <img 
                 src={image}
                 style={{height:"90%", width:"100%", objectFit:"cover"}}
                 alt={imageAltText}
                 />
            </div>
            <div className='container'>
                {projectlist.map((project)=>(
                    <div className='box'key={project.title}>
                        <a href={project.url} target='_blank' rel='noopener noreferrer'>
                            <h3 style={{ flexBasis:"40px"}}>{project.title}</h3>
                        </a>
                        <p className='small'>{project.description}</p>
                        </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Portfolio;
