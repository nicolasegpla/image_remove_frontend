import { useContext } from 'react';

import { BUttonClosed, ButtonTour, PrimaryButton } from '@/presentation/components/atoms';
import { CardModelInfor, ContainerInfo } from '@/presentation/components/molecules';
import { GlobalContext } from '@/store/context/global/GlobalContext';

import './information.scss';
interface InformationProps {
    // Agregá tus props acá
}

export function Information({}: InformationProps) {
    const { setModal } = useContext(GlobalContext);

    class TypeModelInformation {
        constructor(
            public title: string,
            public description: string,
            public image: string,
            public list: string[],
            public subTitle: string,
            public subTitleDescription: string
        ) {
            this.title = title;
            this.description = description;
            this.image = image;
            this.list = list;
            this.subTitle = subTitle;
            this.subTitleDescription = subTitleDescription;
        }
    }

    const groupTypeModelInformation = [
        new TypeModelInformation(
            'ClearCut',
            'Cuando necesitas resultados confiables para humanos o animales, sin requerir máxima precisión.',
            '⚡',
            [
                'Ideal para personas y mascotas en fondos variados.',
                'Buen equilibrio entre calidad, precisión y velocidad.',
                'Funciona bien incluso en condiciones de iluminación poco ideales.',
            ],
            'Recorte limpio y balanceado',
            'Cuándo usarlo:'
        ),
        new TypeModelInformation(
            'HumanPro',
            'Cuando el enfoque principal es una persona o un grupo de personas.',
            '👤',
            [
                'Entrenado especialmente para personas: rostros, cabello, ropa.',
                'Alta precisión en retratos y siluetas humanas.',
                'También funciona con mascotas, pero su fuerte son los humanos.',
            ],
            'Optimizado para cuerpos y siluetas humanas',
            'Cuándo usarlo:'
        ),

        new TypeModelInformation(
            'SmartEdge',
            'Cuando necesitas rapidez y el fondo es sencillo o bien definido.',
            '⚙️',
            [
                'Recorte ágil para humanos y animales en fondos simples o contrastados.',
                'Ideal para procesamiento masivo o en tiempo real.',
                'Recomendado cuando no hay mucha complejidad visual.',
            ],
            'Ligero y rápido',
            'Cuándo usarlo:'
        ),

        new TypeModelInformation(
            'UltraClean',
            'Cuando necesitas un recorte de alta precisión en personas o animales con detalles finos.',
            '💎',
            [
                'Recortes detallados con excelente definición de bordes.',
                'Ideal para fotografías complejas o con fondos difíciles.',
                'Requiere conexión a internet y consume créditos por uso.',
            ],
            'Calidad superior para usos exigentes',
            'Cuándo usarlo:'
        ),
    ];

    return (
        <ContainerInfo>
            <div className="information__header">
                <BUttonClosed onClick={() => setModal(false)} />
            </div>
            {groupTypeModelInformation.map((item, index) => (
                <CardModelInfor
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    list={item.list}
                    subTitle={item.subTitle}
                    subTitleDescription={item.subTitleDescription}
                />
            ))}
            <div className="information__footer">
                <ButtonTour textButton="Start Interactive Tour" onClick={() => {}} />
            </div>
        </ContainerInfo>
    );
}
