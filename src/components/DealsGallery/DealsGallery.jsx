import { forwardRef } from "react";
import {
  first_img,
  second_img,
  third_img,
  fourth_img,
} from "../../assets/deals";
import {
  Container,
  Image,
  ImageItem,
  ImagesList,
  InfoBlock,
  InfoContainer,
  InfoText,
  InfoTitle,
  NumbersBlock,
  Title,
} from "./DealsGalleryStyle";

const DealsGallery = ({ deals }, ref) => {
  function getImage(number) {
    switch (number) {
      case "1":
        return first_img;

      case "2":
        return second_img;

      case "3":
        return third_img;

      case "4":
        return fourth_img;

      default:
        return first_img;
    }
  }
  return (
    //  <>
    <Container>
      <Title ref={ref}>Open Deals</Title>
      <ImagesList>
        {deals.map((deal) => (
          <ImageItem key={deal.id}>
            <Image src={getImage(deal.image)} alt="" />
            <InfoContainer>
              <InfoTitle>{deal.title}</InfoTitle>
              <NumbersBlock>
                <InfoBlock>
                  <InfoText>{deal.price} Dhs</InfoText>
                  <InfoText>Tiket-{deal.tiket}</InfoText>
                </InfoBlock>
                <InfoBlock>
                  <InfoText>Yield {deal.yield / 100}%</InfoText>
                  <InfoText>Days left {deal.days}</InfoText>
                </InfoBlock>
                <InfoBlock>
                  <InfoText>Sold {deal.sold}%</InfoText>
                </InfoBlock>
              </NumbersBlock>
            </InfoContainer>
          </ImageItem>
        ))}
      </ImagesList>
    </Container>
    //  </>
  );
};

export default forwardRef(DealsGallery);
