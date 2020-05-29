import React from "react"
// import PropTypes from "prop-types"

import {Link} from 'gatsby'
import {useStaticQuery, graphql} from 'gatsby'


const Footer = () => {
    

    const data = useStaticQuery(graphql`
            query siteName {
                site {
                    siteMetadata {
                        companyName,
                        menuLinks {
                            name,
                            to
                        }
                        }
                    }
                }
        `);

        const menuLinks = data.site.siteMetadata.menuLinks;
    return (
        <>
            <footer className="font-body bg-background-common">
                <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1  md:grid-cols-2 py-8">
                    <div className="flex flex-wrap h-full items-center justify-center md:justify-start mb-8 md:mb-0">
                    {menuLinks.map((link,index) => {
                    
                        return  <Link key={index} className="mr-4 tracking-widest uppercase text-white" to={link.to}>{link.name}</Link>
                    })}
                    </div>
                    <div className="flex flex-col  content-center text-white tracking-wide text-center md:text-right text-lg" >
                        <span>&copy; {new Date().getFullYear()} {data.site.siteMetadata.companyName}</span>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}


export default Footer;


//
// const canvas = document.querySelector("#footer-canvas");
//     const c = canvas.getContext("2d");

//     canvas.width = innerWidth;
//     canvas.height = 300;

//     const wave = {
//       y: canvas.height / 2,
//       length: -0.005,
//       amplitude: 93,
//       frequency: 0.013,
//     };

//     const strokeColor = {
//       h: 33,
//       s: 93,
//       l: 48,
//     };

//     const backgroundColor = {
//       r: 89,
//       g: 2,
//       b: 2,
//       a: 0.071,
//     };

//     let increment = wave.frequency;
//     function animate() {
//       requestAnimationFrame(animate);
//       c.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`;
//       c.fillRect(0, 0, canvas.width, canvas.height);
//       c.beginPath();
//       c.moveTo(0, wave.y);
//       for (let i = 0; i < canvas.width; i++) {
//         c.lineTo(
//           i,
//           wave.y +
//             Math.sin(i * wave.length + increment) *
//               wave.amplitude *
//               Math.sin(increment)
//         );
//       }
//       c.strokeStyle = `hsl(${strokeColor.h}, ${strokeColor.s}%, ${strokeColor.l}%)`;
//       c.stroke();
//       increment += wave.frequency;
//     }
//     animate();

//     window.addEventListener("resize", function() {
//       canvas.width = innerWidth;
//     });