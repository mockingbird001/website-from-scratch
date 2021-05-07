import styled from "styled-components";
import bg from "../images/bg.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
import img1 from "../images/img1.jpg";
import menu1 from "../images/menu1.jpg";
import menu2 from "../images/menu2.jpg";
import menu3 from "../images/menu3.jpg";
import menu4 from "../images/menu4.jpg";
import menu5 from "../images/menu5.jpg";
import menu6 from "../images/menu6.jpg";
import expert1 from "../images/expert1.jpg";
import expert2 from "../images/expert2.jpg";
import expert3 from "../images/expert3.jpg";
import expert4 from "../images/expert4.jpg";
import testi1 from "../images/testi1.jpg";
import testi2 from "../images/testi2.jpg";
import testi3 from "../images/testi3.jpg";

export default function Home() {
  return (
    <>
      <Header>
        <a href="" className="Logo">
          Food<span>.</span>
        </a>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Expert</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </Header>

      <Section>
        <Content>
          <h2>Always Choose Good</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            doloremque repellendus vero! Saepe vero accusamus dolore sed aliquam
            cumque, mollitia.
          </p>
          <a href="">Our Menu</a>
        </Content>
      </Section>

      <Section2>
        <Row>
          <Col50>
            <h2>
              <span>A</span>bout Us
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              exercitationem, quae autem aspernatur, beatae, minima nihil totam
              odio consequuntur magni ratione laudantium. Sequi maxime possimus
              officiis, tenetur numquam iusto repudiandae?
            </p>
          </Col50>
          <Col50>
            <ImgBx>
              <img src={img1} alt="img1" />
            </ImgBx>
          </Col50>
        </Row>
      </Section2>

      <Section3>
        <Title>
          <h2>
            Our <span>M</span>enu
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel hic
          </p>
        </Title>
        <Content1>
          <Box>
            <ImgBx2>
              <img src={menu1} alt="menu1" />
            </ImgBx2>
            <Text>
              <h3>Special Salads</h3>
            </Text>
          </Box>
          <Box>
            <ImgBx2>
              <img src={menu2} alt="menu2" />
            </ImgBx2>
            <Text>
              <h3>Special Soup</h3>
            </Text>
          </Box>
          <Box>
            <ImgBx2>
              <img src={menu3} alt="menu3" />
            </ImgBx2>
            <Text>
              <h3>Special Pasta</h3>
            </Text>
          </Box>
          <Box>
            <ImgBx2>
              <img src={menu4} alt="menu4" />
            </ImgBx2>
            <Text>
              <h3>Special Salads</h3>
            </Text>
          </Box>
          <Box>
            <ImgBx2>
              <img src={menu5} alt="menu5" />
            </ImgBx2>
            <Text>
              <h3>Special Soup</h3>
            </Text>
          </Box>
          <Box>
            <ImgBx2>
              <img src={menu6} alt="menu6" />
            </ImgBx2>
            <Text>
              <h3>Special Pasta</h3>
            </Text>
          </Box>
        </Content1>
        <Button>
          <a href="">View All</a>
        </Button>
      </Section3>

      <Section3>
        <Title>
          <h2>
            Our Kitchen <span>E</span>xpert
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel hic
          </p>
        </Title>
        <Content2>
          <Box2>
            <ImgBx2>
              <img src={expert1} alt="expert1" />
            </ImgBx2>
            <Text>
              <h3>Someone Famouse</h3>
            </Text>
          </Box2>
          <Box2>
            <ImgBx2>
              <img src={expert2} alt="expert2" />
            </ImgBx2>
            <Text>
              <h3>Someone Famouse</h3>
            </Text>
          </Box2>
          <Box2>
            <ImgBx2>
              <img src={expert3} alt="expert3" />
            </ImgBx2>
            <Text>
              <h3>Someone Famouse</h3>
            </Text>
          </Box2>
          <Box2>
            <ImgBx2>
              <img src={expert4} alt="expert4" />
            </ImgBx2>
            <Text>
              <h3>Someone Famouse</h3>
            </Text>
          </Box2>
        </Content2>
      </Section3>

      <Section4>
        <Title1>
          <h2>
            They <span>S</span>aid About Us
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel hic
          </p>
        </Title1>
        <Content3>
          <Box3>
            <ImgBx3>
              <img src={testi1} alt="testi1" />
            </ImgBx3>
            <Text2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum soluta quasi, perspiciatis ipsum nisi fugit cumque
                obcaecati rerum in, tempora exercitationem ea! Consectetur
                assumenda, quibusdam ab facere officiis modi ducimus?
              </p>
              <h3>Someone Famouse</h3>
            </Text2>
          </Box3>
          <Box3>
            <ImgBx3>
              <img src={testi2} alt="testi2" />
            </ImgBx3>
            <Text2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum soluta quasi, perspiciatis ipsum nisi fugit cumque
                obcaecati rerum in, tempora exercitationem ea! Consectetur
                assumenda, quibusdam ab facere officiis modi ducimus?
              </p>
              <h3>Someone Famouse</h3>
            </Text2>
          </Box3>
          <Box3>
            <ImgBx3>
              <img src={testi3} alt="testi3" />
            </ImgBx3>
            <Text2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum soluta quasi, perspiciatis ipsum nisi fugit cumque
                obcaecati rerum in, tempora exercitationem ea! Consectetur
                assumenda, quibusdam ab facere officiis modi ducimus?
              </p>
              <h3>Someone Famouse</h3>
            </Text2>
          </Box3>
        </Content3>
      </Section4>

      <Section5>
        <Title>
          <h2>
            <span>C</span>ontact Us
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel hic
          </p>
        </Title>
        <ContentForm>
          <h3>Send Message</h3>
          <InputBox>
            <input type="text" placeholder="Name" />
          </InputBox>
          <InputBox>
            <input type="text" placeholder="Email" />
          </InputBox>
          <InputBox>
            <textarea placeholder="Name" />
          </InputBox>
          <InputBox>
            <input type="submit" value="Send" />
          </InputBox>
        </ContentForm>
      </Section5>
      <CopyrightText>
        <p>
          Copyright 2020 <a>Online Tutorials</a>. All Right Reserved
        </p>
      </CopyrightText>
    </>
  );
}

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 0px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: 0.5s;

  .Logo {
    color: #fff;
    font-weight: 700;
    font-size: 2em;
    text-decoration: none;
  }

  span {
    color: #ff0157;
  }

  ul {
    position: relative;
    display: flex;
  }

  ul li {
    list-style: none;
    margin-left: 30px;
  }
  ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: 300;
  }
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bg});
  background-size: cover;
`;

const Content = styled.div`
  max-width: 900px;
  text-align: center;

  p {
    font-size: 1em;
    color: #fff;
  }

  h2 {
    font-size: 5em;
    color: #fff;
  }

  a {
    font-size: 1em;
    color: #fff;
    background: #ff0157;
    display: inline-block;
    padding: 10px 30px;
    margin-top: 20px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    transition: 0.5s;

    &:hover {
      letter-spacing: 6px;
    }
  }
`;

const Section2 = styled.section`
  padding: 100px;
`;

const Row = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Col50 = styled.div`
  position: relative;
  width: 48%;

  h2 {
    color: #111;
    font-size: 2em;
    font-weight: 300;
  }

  span {
    color: #dd0157;
    font-weight: 700;
    font-size: 1.5em;
  }
`;

const ImgBx = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
  }
`;

const Section3 = styled.section`
  margin-top: 180px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: #111;
    font-size: 2em;
    font-weight: 300;
  }

  span {
    color: #dd0157;
    font-weight: 700;
    font-size: 1.5em;
  }
`;

const Content1 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const Box = styled.div`
  width: 340px;
  margin: 20px;
  border: 15px solid #fff;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.08);
`;

const ImgBx2 = styled.div`
  position: relative;
  width: 100%;
  height: 300px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.div`
  padding: 15px 0 5px;

  h3 {
    font-weight: 400;
    color: #111;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 1em;
    color: #fff;
    background: #ff0157;
    display: inline-block;
    padding: 10px 30px;
    margin-top: 20px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    transition: 0.5s;

    &:hover {
      letter-spacing: 6px;
    }
  }
`;

const Content2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const Box2 = styled.div`
  width: 250px;
  margin: 15px;
`;

const Section4 = styled.section`
  margin-top: 120px;
  background: url(${bg2});
  background-size: cover;
`;

const Title1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: #fff;
    font-size: 2em;
    font-weight: 300;
  }

  p {
    color: #fff;
  }

  span {
    color: #dd0157;
    font-weight: 700;
    font-size: 1.5em;
  }
`;

const Content3 = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 40px;
`;

const Box3 = styled.div`
  width: 340px;
  margin: 20px;
  padding: 40px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImgBx3 = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Text2 = styled.div`
  text-align: center;

  p {
    color: #666;
    font-style: inherit;
  }

  h3 {
    margin-top: 20px;
    color: #111;
    font-size: 1em;
    color: #ff0157;
    font-weight: 600;
  }
`;

const Section5 = styled.section`
  background: url(${bg3});
  background-size: cover;
`;

const ContentForm = styled.div`
  padding: 75px 50px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin-top: 50px;

  h3 {
    color: #111;
    font-size: 1.2em;
    margin-bottom: 20px;
    font-weight: 500;
  }
`;

const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  input {
    width: 100%;
    border: 1px solid #555;
    padding: 10px;
    color: #111;
    outline: none;
    font-size: 16px;
    font-weight: 300;
  }

  textarea {
    width: 100%;
    border: 1px solid #555;
    padding: 10px;
    color: #111;
    outline: none;
    font-size: 16px;
    font-weight: 300;
    resize: none;
  }

  input[type="submit"] {
    font-size: 1em;
    color: #fff;
    background: #ff0157;
    display: inline-block;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    transition: 0.5s;
    max-width: 100px;
    font-weight: 500;
    border: none;
    cursor: pointer;
  }
`;

const CopyrightText = styled.div`
  padding: 8px 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;

  p {
    color: #333;
  }
  a {
    color: #ff0157;
  }
`;
