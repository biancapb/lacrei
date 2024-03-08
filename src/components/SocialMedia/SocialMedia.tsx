import { Container, SocialImage, SocialItem } from "./SocialMediaStyle";
interface SocialMediaProps {
  redirect: string;

  socialType?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ redirect, socialType }) => {
  const publicUrl = process.env.PUBLIC_URL;
  const logo = {
    FACEBOOK: `${publicUrl}/assets/icons/facebook-logo.svg`,
    INSTAGRAM: `${publicUrl}/assets/icons/instagram-logo.svg`,
    LINKEDIN: `${publicUrl}/assets/icons/linkedin-logo.svg`,
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
