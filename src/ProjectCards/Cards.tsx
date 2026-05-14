import './Cards.css';
import { usePageInfo } from "./../PageContext";

function Cards({image, name, desc, tags, link}: {image: string, name: string, desc: string, tags: string[], link: string}) {
    const { setHover } = usePageInfo();
    let tagList = tags.map(item => <div> {item} </div>);
    let linkButton = <></>;
    if (link == "PRIVATE")
    {
        linkButton = <button className="link">Ask for more !</button>;
    }
    else if (link == "WIP")
    {
        linkButton = <button className="link">Link will come soon ;)</button>;
    }
    else if (link != "")
    {
        linkButton = <button className="link" onClick={() => window.open(link, '_blank')} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>See project</button>;
    }
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
            {linkButton}
        </div>
    );
}

export default Cards;