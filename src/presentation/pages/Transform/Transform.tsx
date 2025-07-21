import { ButtonLogOut, NavBar, PrimaryButton } from '@/presentation/components';
import { PreviewImage, SelectImage } from '@/presentation/components/organisms';
import { LayoutTransform, PrimaryContainerContentLayout } from '@/presentation/layouts';

function Transform() {
    const urlFetchPost = `http://localhost:8000/test`;

    const handleGet = async () => {
        const response = await fetch(urlFetchPost);
        const data = await response.json();
        console.log(data);
    };

    return (
        <LayoutTransform>
            <NavBar>
                <h2 style={{ color: '#ffffff' }}>Logo</h2>
                <ButtonLogOut onClick={() => {}} />
            </NavBar>
            <PrimaryContainerContentLayout>
                <SelectImage />
                <PreviewImage />
            </PrimaryContainerContentLayout>
            {/* <PrimaryButton textButton="get" onClick={handleGet} /> */}
        </LayoutTransform>
    );
}

export default Transform;
