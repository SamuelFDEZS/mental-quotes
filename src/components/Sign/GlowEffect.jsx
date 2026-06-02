import { useEffect, useState } from 'react';

export const GlowEffect = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="follow-mouse" style={{
            '--x': `${mousePosition.x}px`,
            '--y': `${mousePosition.y}px`
        }}>
        </div>
    );
};
