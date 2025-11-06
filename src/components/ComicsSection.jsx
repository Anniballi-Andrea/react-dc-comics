import Card from "./card"

export default function ComicsSection({ comicsArray }) {


    return (

        <div className="container_main bg_black">
            <div className="container">
                <div className="row">
                    {
                        comicsArray.map(comic => (
                            <Card key={comic.id} thumb={comic.thumb} series={comic.series} alt={comic.title} />
                        ))
                    }

                    <div className="col-12 d-flex justify-content-center"><button>LOAD MORE</button></div>
                </div>
            </div>

        </div>
    )
}