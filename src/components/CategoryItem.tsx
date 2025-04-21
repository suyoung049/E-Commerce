import { FC } from "react";
import styled from "styled-components";

interface ICategoryItem {
  id: number;
  img: string;
  title: string;
}

interface ICategoryItemProps {
  item: ICategoryItem;
  // noticeId: number;
  // setNoticeId: React.Dispatch<React.SetStateAction<number>>;
  // postSuccess: () => void;
}

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 80vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem: FC<ICategoryItemProps> = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
