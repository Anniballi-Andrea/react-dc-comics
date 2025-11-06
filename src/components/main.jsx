




import BlueBanner from "./BlueBanner"
import ComicsSection from "./ComicsSection"

export default function Main({ comicsArray }) {





    return (
        <main>
            <div className="container_main bg_jumbo">
                <div className="container ">
                    <span className="current_series bg-primary">
                        <h2><strong>CURRENT SERIES</strong></h2>
                    </span>

                </div>
            </div>
            <ComicsSection comicsArray={comicsArray} />

            <BlueBanner />
        </main>
    )
}


