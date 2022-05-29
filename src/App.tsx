import "./App.css";
import Item from "./Item";
import items from "./items";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    {Object.entries(items).map(([name, opt]) => (
                        <div>
                            <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                            <div className="items">
                                {opt.map(({ name, url, image }) => (
                                    <Item name={name} image={image} url={url} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;
