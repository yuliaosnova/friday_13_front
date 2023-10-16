import { Container, Title, Text, TextContainer } from "./HeroStyle";
import { Btn } from "../Button//ButtonStyle";

const Hero = () => {
  return (
    <>
      <Container>
        <Title>The chemical negatively charged</Title>
        <TextContainer>
          <Text>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is{" "}
          </Text>
        </TextContainer>
        <Btn start to="/">
          Get started
        </Btn>
      </Container>
    </>
  );
};

export default Hero;
