import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

interface ITypeProps {
  type?: string;
}

interface IColorProps {
  color?: string;
}

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button<ITypeProps>`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 1;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div<IColorProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div<ITypeProps>`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://cafe24.poxo.com/ec01/yimaida/2OMm5gLLSI+40BfdB9P7bO7jvAtQG00tLsA5BHwaGfewgNviTJZM4Bvm40nXM8ZDBH6QxxH5xBJzvnPLxYRPpw==/_/web/product/big/202303/a039dbf268669d0a09b20dedc7c0e649.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b>Color OnePiece
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>934955432252
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 90</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName>
                    <b>Product:</b>short sleeve t-shirt
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>9349345667
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 25</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 115</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 115</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
