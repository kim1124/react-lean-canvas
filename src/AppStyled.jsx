import Card from './components/StyledComponents/Card'
import BaseButton from './components/StyledComponents/BaseButton'
import StyledButton from './components/StyledComponents/StyledButton'

export default function AppStyled(props) {
  return (
    <>
      <Card></Card>
      <hr />
      <BaseButton>Base Button</BaseButton>
      <StyledButton>Styled Button</StyledButton>
    </>
  )
}
