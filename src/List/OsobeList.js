import { useState } from 'react';
import Osoba from './Osoba';

let currentId = 4;

export default function OsobeList(){
    const [korisnici, setKorisnici] = useState([
                                        { id: 1, ime: 'Pero', prezime: 'Perić', godine: 33},
                                        { id: 2, ime: 'Vitomir', prezime: 'Ogonol', godine: 56},
                                        { id: 3, ime: 'Karolina', prezime: 'Baluk', godine: 11},
                                        { id: 4, ime: 'Tomislava', prezime: 'Org', godine: 26}
                                    ]);

    const handleChangeIme = (tekst, index) => {
        const noviKorisnici = [...korisnici];
        noviKorisnici[index].ime = tekst;        
        setKorisnici(noviKorisnici);
    }

    const handleChangePrezime = (tekst, index) => {
        const noviKorisnici = [...korisnici];
        noviKorisnici[index].prezime = tekst;
        setKorisnici(noviKorisnici);
    }

    const handleChangeGodine = (tekst, index) => {
        const noviKorisnici = [...korisnici];
        noviKorisnici[index].godine = tekst;
        setKorisnici(noviKorisnici);
    }

    const handleDeleteOsoba = (index) => {
        const newKorisnici = [];
        
        for(let i = 0; i < korisnici.length; i++){
            if(i !== index) {
                newKorisnici.push({...korisnici[i]});
            }
        }

        setKorisnici(newKorisnici);
    }

    return (
        <div>
            {korisnici.map((korisnik, index) => {
                return (
                    <Osoba key={korisnik.id} osoba={korisnik}
                                        onChangeIme={(tekst) => handleChangeIme(tekst, index)}
                                        onChangePrezime={(tekst) => handleChangePrezime(tekst, index)} 
                                        onChangeGodine={(tekst) => handleChangeGodine(tekst, index)}
                                        onDelete={() => handleDeleteOsoba(index)} />
                )
            })}

            {korisnici.map((korisnik) => {
                return (
                    <p key={korisnik.id}>{korisnik.ime} {korisnik.prezime} {korisnik.godine}</p>
                )
            })}
        </div>
    )
}
