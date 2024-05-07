import React from 'react'

function Herramientas() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHerramientas = () => {
        setIsOpen(!isOpen);
        return (

            <div className="herramientas">
                <button className="dropbtn" onClick={toggleHerramientas}>Menú</button>
                {isOpen && (
                    <div className="herramientas-content">
                        <a href="#">Opción 1</a>
                        <a href="#">Opción 2</a>
                    </div>
                )}
            </div>
        )
    }
}

export default Herramientas