import { PrimaryButton } from '@/presentation/components';
import { PreviewImage, SelectImage } from '@/presentation/components/organisms';

function Transform() {
    const urlFetchPost = `http://localhost:8000/test`;

    const handleGet = async () => {
        const response = await fetch(urlFetchPost);
        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <SelectImage />
            <PreviewImage />
            <PrimaryButton textButton="get" onClick={handleGet} />
        </div>
    );
}

export default Transform;
