import { ContainerImage, Image } from "./ImageLayoutStyle";

interface ImageLayoutProps {
  imageType: string;
}

const layout = {
  HOME: "/assets/home-image.svg",
  USER: "/assets/user-image.svg",
  PRO: "/assets/pro-image.svg",
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
