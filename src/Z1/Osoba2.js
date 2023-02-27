import PropTypes from 'prop-types';

export default function Osoba2({ ime, prezime, godine }) {
    return (
        <p>
            Ime: {ime}<br/>
            Prezime: {prezime}<br/>
            Godine: {godine}
        </p>
    );
}

Osoba2.propTypes = {
    ime: PropTypes.string,
    prezime: PropTypes.string,
    godine: PropTypes.number
}