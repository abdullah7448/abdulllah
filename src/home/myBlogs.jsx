import "../styles/comphonents-styles/blog.css"
import image_blog from "../assets/image/programmer.jpg"
import BlogCard from "./blog_cards";
import BlogHeader from "./home_blog_header";


export default function Blogs(){
    
    const blogArray = [
        {
            image: image_blog,
            title: "title of first blog",
            description: "This is the first image.",
            id: 1
        },
        {
            image: image_blog,
            title: "title of first blog",
            description: "This is the second image.",
            id: 2
        },
        {
            image:image_blog,
            title: "title of first blog",
            description: "This is the third image.",
            id: 3
        }
    ];
    return(
        <>
            <section className="blogs">
                <div className="container">
                    <div className="blog_wrapper">
                        <div className="heading_blog">
                            <BlogHeader/>
                            
                        </div>
                        <div className="cards">
                            {
                                blogArray.map((blogData)=>(
                                    <BlogCard key={blogData.id} blogData={blogData} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}