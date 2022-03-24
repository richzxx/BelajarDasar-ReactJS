
// Export Default
function Hello() {
    return <p>Ini pake Export Default biasa</p>
}

// Bisa Export non-default
// Bisa juga ngambil dari closing tag html biasa dengan nama props.children
export function World(props) {
    return <p>{props.children}</p>
}

export default Hello;