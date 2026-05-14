import './Description.css';

function Description() {
    const birthDate = new Date("2005-03-22");
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return (
        <div className="Description">
            <div className="Title">
                <h1>Want to know more ?</h1>
            </div>
            <div className="Text">
                <h3>
                    With my {age}yo, I am a passionate developer always wanting to create new things.<br/>
                    But my curiosity pushed me to learn more.<br/>
                    As my projects are very diverse, I can adapt to given environment<br/>
                </h3>
            </div>
        </div>
    );
}

export default Description;