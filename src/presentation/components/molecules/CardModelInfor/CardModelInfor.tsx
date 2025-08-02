import './card-model-infor.scss';

interface CardModelInforProps {
    title: string;
    description: string;
    image: string;
    list: string[];
    subTitle: string;
    subTitleDescription: string;
}

export function CardModelInfor({
    title,
    description,
    image,
    list,
    subTitle,
    subTitleDescription,
}: CardModelInforProps) {
    return (
        <div className="card-model-infor">
            <div className="card-model-infor__header">
                <p className="card-model-infor__header__image">{image}</p>
                <h2 className="card-model-infor__header__title">{title}</h2>
            </div>
            <div className="card-model-infor__body">
                <h3 className="card-model-infor__body__sub-title">{subTitle}</h3>
                <ul className="card-model-infor__body__list">
                    {list.map((item, index) => (
                        <li key={index} className="card-model-infor__body__list__item">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="card-model-infor__footer">
                <h3 className="card-model-infor__footer__sub-title">{subTitleDescription}</h3>
                <p className="card-model-infor__footer__description">{description}</p>
            </div>
        </div>
    );
}
