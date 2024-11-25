import Footer from "../home/footer";
import Header from "../home/header";
import Search from "../projects/search";
import AllBlogs from "./allBlogs";

export default function BlogPage(){
    return(
        <>
            <Header/>
            <Search/>
            <AllBlogs/>
            <Footer/>
        </>
    )
}