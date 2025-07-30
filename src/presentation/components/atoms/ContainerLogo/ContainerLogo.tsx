import './container-logo.scss';

interface ContainerLogoProps {
    // Agregá tus props acá
}

export function ContainerLogo({}: ContainerLogoProps) {
    return (
        <div className="container-logo">
            <h2 className="container-logo__text">ACIUM</h2>
        </div>
    );
}
