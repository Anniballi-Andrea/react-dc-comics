export default function NavBar() {

    const navBarComponent = [
        {
            id: 1,
            name: 'CHARACTERS',
            href: '#',
        },
        {
            id: 2,
            name: 'COMICS',
            href: '#',
        },
        {
            id: 3,
            name: 'MOVIES',
            href: '#',
        },
        {
            id: 4,
            name: 'TV',
            href: '#',
        },
        {
            id: 5,
            name: 'GAMES',
            href: '#',
        },
        {
            id: 6,
            name: 'COLLECTIBLES',
            href: '#',
        },
        {
            id: 7,
            name: 'VIDEOS',
            href: '#',
        },
        {
            id: 8,
            name: 'FANS',
            href: '#',
        },
        {
            id: 9,
            name: 'NEWS',
            href: '#',
        },
        {
            id: 10,
            name: 'SHOP',
            href: '#',
        }

    ];


    return (
        navBarComponent.map((el) => (

            <li key={el.id} className="nav-item">
                <div className="border_hover">
                    <a className="nav-link active" aria-current="page" href={el.href}>{el.name}</a>
                </div>
            </li>
        ))

    )




}