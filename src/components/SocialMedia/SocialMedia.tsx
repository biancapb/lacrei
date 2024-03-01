import { Container, SocialImage, SocialItem } from "./SocialMediaStyle";
interface SocialMediaProps {
  redirect: string;

  socialType?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ redirect, socialType }) => {
  const logo = {
    FACEBOOK: "/assets/icons/facebook-logo.svg",
    INSTAGRAM: "/assets/icons/instagram-logo.svg",
    LINKEDIN: "/assets/icons/linkedin-logo.svg",
  };

  return (
    <>
      <Container>
        <SocialItem target="_blank" href={redirect}>
          <SocialImage
            src={
              socialType === "facebook"
                ? logo.FACEBOOK
                : socialType === "instagram"
                ? logo.INSTAGRAM
                : logo.LINKEDIN
            }
          />
        </SocialItem>
      </Container>
    </>
  );
};

export default SocialMedia;
