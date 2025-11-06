import Card from "./card";


export default function Comics() {




    return (

        comics.map((el) => (
            <Card props={el} />
        ))
    )



}