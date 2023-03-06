// { ime: 'Pero', prezime: 'Perić', godine: 33},
export default function Osoba({ osoba, onChangeIme, onChangePrezime, onChangeGodine, onDelete }) {
    const handleChangeIme = (e) => {
        onChangeIme(e.target.value);
    }

    const handleChangePrezime = (e) => {
        onChangePrezime(e.target.value);
    }

    const handleChangeGodine = (e) => {
        onChangeGodine(e.target.value);
    }

    const handleDelete = () => {
        onDelete();
    }

    return (
        <p>
            <input value={osoba.ime} onChange={handleChangeIme} />
            <input value={osoba.prezime} onChange={handleChangePrezime} />
            <input type="number" value={osoba.godine} onChange={handleChangeGodine} />
            <button onClick={handleDelete}>X</button>
        </p>
    )
}
