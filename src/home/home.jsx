import Banner from "./banner";
import Contact from "./contact-section";
import Footer from "./footer";
import Header from "./header";
import Blogs from "./myBlogs";
import Projects from "./projects";
import About_Section from "./section_about";
import Skill from "./skills";

export default function Home(){
    return(
        <>
            <Header/>
            <Banner/>
            <About_Section/>
            <Skill/>
            <Projects/>
            <Blogs/>
            <Contact/>
            <Footer/>
        </>
    )
}