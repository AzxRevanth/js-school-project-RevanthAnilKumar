import {useState} from 'react';

export default function Header() {
    const [dark, toggleDark] = useState(false);

    const toggleTheme = () => {
        toggleDark(!dark);
    };

    return (
        <header id="title-header">
            <figure>
                <img src="logo.png" alt="Logo" />
            </figure>
            <h1>Timeline App</h1>
            <button id="toggle-theme" onClick={toggleTheme}>
                Toggle Theme
            </button>
        </header>
    );
}
