import styled from 'styled-components'

const CardContainer = styled.div.attrs({
  className: 'card-container',
})`
  border: 2px solid #393939;
  padding: 24px;
  border-radius: 6px;

  ${props =>
    props.$dark &&
    `
        background-color: black;
        color: white;
        border: none;
      `}
`

export default function Card(props) {
  return (
    <>
      <CardContainer $dark>
        <h2>Styled Component</h2>
        <p>이것은 styled-components 모듈로 만든 컴포넌트입니다.</p>
      </CardContainer>
    </>
  )
}
