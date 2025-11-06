

export default function BlueBanner({ blueBannerItems }) {


    return (
        <div className="container-fluid bg_blue">
            <div className="container d-flex justify-content-between align-items-center">
                {
                    blueBannerItems.map((el) => (
                        <a key={el.id} href={el.href}>
                            <img src={el.name} alt="" /> {el.description}
                        </a>

                    )
                    )}


            </div>
        </div>
    )
}