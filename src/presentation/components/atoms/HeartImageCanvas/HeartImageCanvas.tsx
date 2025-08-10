import { useEffect, useRef } from 'react';
import './heart-image-canvas.scss';

interface HeartImageCanvasProps {
    imageUrl: string;
}

export function HeartImageCanvas({ imageUrl }: HeartImageCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!imageUrl) return;

        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.src = imageUrl;

        image.onload = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const size = 500;
            canvas.width = size;
            canvas.height = size;
            ctx.clearRect(0, 0, size, size);

            // 💖 Dibujar forma de corazón (ajustada a 500x500)
            ctx.beginPath();
            ctx.moveTo(250, 300);
            ctx.bezierCurveTo(250, 250, 150, 250, 150, 180);
            ctx.bezierCurveTo(150, 100, 250, 100, 250, 160);
            ctx.bezierCurveTo(250, 100, 350, 100, 350, 180);
            ctx.bezierCurveTo(350, 250, 250, 250, 250, 300);
            ctx.closePath();

            ctx.fillStyle = 'black';
            ctx.fill();

            ctx.clip();

            // 🔍 Calcular escalado proporcional
            const imgAspect = image.width / image.height;
            const targetAspect = size / size;

            let drawWidth = size;
            let drawHeight = size;

            const scale = 0.4; // 80% del tamaño del área recortada

            if (imgAspect > targetAspect) {
                drawWidth = size * scale;
                drawHeight = (size / imgAspect) * scale;
            } else {
                drawHeight = size * scale;
                drawWidth = size * imgAspect * scale;
            }

            const offsetX = (size - drawWidth) / 2;
            const offsetY = (size - drawHeight) / 2.5;

            ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
        };
    }, [imageUrl]);

    const handleDownload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const link = document.createElement('a');
        link.download = 'imagen_corazon.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    return (
        <div>
            <canvas ref={canvasRef} style={{ border: '1px solid #ccc', borderRadius: '8px' }} />
            <button onClick={handleDownload} style={{ marginTop: '1rem' }}>
                Descargar en forma de corazón
            </button>
        </div>
    );
}
