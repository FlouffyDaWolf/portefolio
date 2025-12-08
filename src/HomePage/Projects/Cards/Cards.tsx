import './Cards.css';

function Cards({image, name, desc, tags}: {image: string, name: string, desc: string, tags: string[]}) {
    let tagList = tags.map(item => <div> {item} </div>);
    return (
        <div className='Cards'>
            <img src={image} alt="feur"></img>
            <div className="separator"></div>
            <div>
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
            <div className="separator"></div>
            <div className="tags">
                {tagList}
            </div>
        </div>
    );
}

export default Cards;