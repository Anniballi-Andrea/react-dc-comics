




import BlueBanner from "./BlueBanner"
import ComicsSection from "./ComicsSection"
import Jumbo from "./jumbo"

export default function Main({ comicsArray }) {





    return (
        <main>
            <Jumbo />
            <ComicsSection comicsArray={comicsArray} />

            <BlueBanner />
        </main>
    )
}


