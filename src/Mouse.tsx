import { useEffect, useState } from 'react';
import { usePageInfo } from "./PageContext";
import './Mouse.css';

function Mouse() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { hover } = usePageInfo();

    useEffect(() => {
        const handleMove = (e: { clientX: number; clientY: number; }) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);
    
    return (
        <div className={hover ? "Mouse on-hover" : "Mouse"} style={{top: position.y, left: position.x}}>
            
        </div>
    );
}

export default Mouse;