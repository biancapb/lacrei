import { ContainerImage, Image } from "./ImageLayoutStyle";

interface ImageLayoutProps {
  imageType: string;
}

const publicUrl = process.env.PUBLIC_URL;

const layout = {
  HOME: `${publicUrl}/assets/home-image.svg`,
  USER: `${publicUrl}/assets/user-image.svg`,
  PRO: `${publicUrl}/assets/pro-image.svg`,
};

const ImageLayout: React.FC<ImageLayoutProps> = ({ imageType }) => {
  return (
    <>
      <ContainerImage>
        <Image
          src={
            imageType === "home"
              ? layout.HOME
              : imageType === "user"
              ? layout.USER
              : layout.PRO
          }
        />
      </ContainerImage>
    </>
  );
};

export default ImageLayout;
