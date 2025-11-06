




import BlueBanner from "./BlueBanner"
import ComicsSection from "./ComicsSection"
import Jumbo from "./jumbo"

export default function Main({ comicsArray, blueBannerItems }) {





    return (
        <main>
            <Jumbo />
            <ComicsSection comicsArray={comicsArray} />

            <BlueBanner blueBannerItems={blueBannerItems} />
        </main>
    )
}


