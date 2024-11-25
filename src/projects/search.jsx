import "../styles/comphonents-styles/search.css"
export default function Search(){
    return(
        <>
            <section className="search">
                <div className="container">
                    <div className="search_box">
                        <form action="search.php" method="GET" className="searchForm">
                            <input type="text" name="search" placeholder="Explore here ..."/>
                            <input type="submit" value="Search"/>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}