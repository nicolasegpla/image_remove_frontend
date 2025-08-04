import logoacium from '../../../../../public/logoacium.png';
import './logo-image.scss';

export function LogoImage() {
    return (
        <div className="logo-image">
            <img src={logoacium} alt="" />
        </div>
    );
}
