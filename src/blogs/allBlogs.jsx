import "../styles/comphonents-styles/blog.css"
import image_blog from "../assets/image/programmer.jpg"
import BlogCard from "../home/blog_cards";


export default function AllBlogs(){
    
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
        },
        {
            image: image_blog,
            title: "title of first blog",
            description: "This is the second image.",
            id: 4
        },
        {
            image: image_blog,
            title: "title of first blog",
            description: "This is the second image.",
            id: 5
        },
        {
            image: image_blog,
            title: "title of first blog",
            description: "This is the second image.",
            id: 6
        },
        {
            image: image_blog,
            title: "title of first blog",
            description: "This is the second image.",
            id: 7
        },
        {
            image: image_blog,
            title: "title of first blog",
            description: "This is the second image.",
            id: 8
        }
    ];
    return(
        <>
            <section className="blogs">
                <div className="container">
                    <div className="blog_wrapper">
                        <div className="all_blog_head">
                            <h2>My Blogs</h2>
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