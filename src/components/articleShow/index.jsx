
import styled from "styled-components";

const ArticleContainer = styled.div`
  width: 100%;
  min-height: 8em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;


const Title = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;

const Url = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.2;
`;

export function ArticleShow(props) {
  const { title, author, url } = props;

  return (
    <ArticleContainer>
      <Title>{title} - {author}</Title>
      <Url>Url: {url} </Url>
    </ArticleContainer>
  );
}
