// { ime: 'Pero', prezime: 'Perić', godine: 33},
export default function Osoba({ osoba }) {

    return (
        <p>
            {osoba.ime} | {osoba.prezime} | {osoba.godine}
        </p>
    )
}
