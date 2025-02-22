import React, { useEffect, useRef, useState } from 'react';

export default function Designation() {
  const texts = ["FULL Stack  Web  Developer.                          ", "WORDPRESS  Theme  Developer.                       ", "MERN  Stack Developer.                      "];
  let currentTextIndex = 0;
  let charIndex = 0;
  let speed = 200; // Adjust the typing speed as needed

  const textRef = useRef(null);

  useEffect(() => {
    const typeWriter = () => {
      if (charIndex < texts[currentTextIndex].length) {
        
          textRef.current.textContent += texts[currentTextIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeWriter, speed);
        
      } else {
        // Move to the next text in the array
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        charIndex = 0;
        textRef.current.textContent = "";
       
        setTimeout(typeWriter,5000); // Add a delay before starting the next text
        
      }
    };

    typeWriter();
    return () => {
      clearTimeout(typeWriter); // Clear any pending timeouts
    };
  }, []);

  return (
    <>
      <div className="text">
        <h1>Md Abdullah</h1>
       <h3 id="typers" ref={textRef}></h3>
        <p>Want something more specific to your WordPress and React Site? 😊
        </p>
      </div>
    </>
  );
}