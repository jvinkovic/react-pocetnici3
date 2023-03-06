import { useState } from 'react';
import AddOsoba from './AddOsoba';
import Osoba from './Osoba';

let currentId = 4;

export default function OsobeList(){
    const [korisnici, setKorisnici] = useState([
                                        { id: 1, ime: 'Pero', prezime: 'Perić', godine: 33},
                                        { id: 2, ime: 'Vitomir', prezime: 'Ogonol', godine: 56},
                                        { id: 3, ime: 'Karolina', prezime: 'Baluk', godine: 11},
                                        { id: 4, ime: 'Tomislava', prezime: 'Org', godine: 26}
                                    ]);

    const handleChangeIme = (tekst, id) => {
        const noviKorisnici = [...korisnici];
        const korisnikZaPromjenu = noviKorisnici.find((k) => k.id === id);
        korisnikZaPromjenu.ime = tekst;
        setKorisnici(noviKorisnici);
    }

    const handleChangePrezime = (tekst, id) => {
        const noviKorisnici = [...korisnici];
        const korisnikZaPromjenu = noviKorisnici.find(k => k.id === id);
        korisnikZaPromjenu.prezime = tekst;
        setKorisnici(noviKorisnici);
    }

    const handleChangeGodine = (tekst, id) => {
        const noviKorisnici = [...korisnici];
        const korisnikZaPromjenu = noviKorisnici.find(k => k.id === id);
        korisnikZaPromjenu.godine = tekst;
        setKorisnici(noviKorisnici);
    }

    const handleDeleteOsoba = (idZaBrisanje) => {
        // nova lista korsnika je lista onih korisnika koji NISU za brisanje
        const newKorisnici = korisnici.filter((k) => k.id !== idZaBrisanje);
        setKorisnici(newKorisnici);
    }

    const handleAddNew = (newOsoba) => {
        // newOsoba objekt ima sve podatke, osim ID
        currentId++;
        const korisnikZaDodati = {...newOsoba, id: currentId};
        
        const newKorisniciList = [...korisnici];
        newKorisniciList.push(korisnikZaDodati);
        setKorisnici(newKorisniciList);
    }

    return (
        <div>
            {korisnici.map((korisnik) => {
                return (
                    <Osoba key={korisnik.id} 
                            osoba={korisnik}
                            onChangeIme={(tekst) => handleChangeIme(tekst, korisnik.id)}
                            onChangePrezime={(tekst) => handleChangePrezime(tekst, korisnik.id)} 
                            onChangeGodine={(tekst) => handleChangeGodine(tekst, korisnik.id)}
                            onDelete={() => handleDeleteOsoba(korisnik.id)} />
                )
            })}

            <AddOsoba onAddNew={handleAddNew} />

            {korisnici.map((korisnik) => {
                return (
                    <p key={korisnik.id}>{korisnik.ime} {korisnik.prezime} {korisnik.godine}</p>
                )
            })}
        </div>
    )
}
