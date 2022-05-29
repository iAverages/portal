export interface IItem {
    name: string;
    image: string;
    url: string;
}

const Item = ({ name, image, url }: IItem) => {
    return (
        <a href={url} className="itemLink">
            <div style={{ width: 300 }}>
                <img src={image} alt={`${name} logo`} className="itemImg" />
                <p style={{}}>{name}</p>
            </div>
        </a>
    );
};

export default Item;
