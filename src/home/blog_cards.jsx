

export default function BlogCard({blogData}){

    
    return(
        <>
          
            <a href="#" className="card">
                <img src={blogData.image} alt="" />
                <h5>{blogData.title}</h5>
            </a>
            
        </>
    )
}