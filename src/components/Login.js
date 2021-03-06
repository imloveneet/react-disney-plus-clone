import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg' />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png' />
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('/images/login-background.jpg');
    z-index: -1;
    opacity: 0.7;
  }
`
const CTA = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  align-items: center;
  
`

const CTALogoOne = styled.img``
const CTALogoTwo = styled.img`
  width: 90%;
`

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e4;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 20px;
  margin-bottom: 10px;
  &:hover {
    background-color: #0483ee;
  }
`

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`
