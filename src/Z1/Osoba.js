import PropTypes from 'prop-types';

export default function Osoba({ osoba }) {
    return (
        <p>
            Prezime: {osoba.prezime}<br/>
            Ime: {osoba.ime}<br/>            
            Godine: {osoba.godine}
        </p>
    );
}

Osoba.propTypes = {
    osoba: PropTypes.object
}