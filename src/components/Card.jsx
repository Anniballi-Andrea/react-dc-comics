export default function Card({ thumb, series }) {


    return (


        <div className="col-lg-2">
            <div className="card">
                <img src={thumb} alt="" />

            </div>
            <div className="card-body">
                <p>{series.toUpperCase()}</p>
            </div>
        </div>
    )



}