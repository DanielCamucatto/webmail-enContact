import React from 'react'
import Brand from '../../components/Brand'
import {
  SectionLogin,
  ContainerLogin,
  WrapperLogin,
  BoxLogin,
  FlexWrapContainer,
  BoxLoginLeft,
  BoxLoginLeftItem,
  BoxLoginRight,
  BoxLoginRightItem,
} from './style'
import Form from '../../sections/Form'

const Login: React.FC = () => {
  return (
    <SectionLogin>
      <ContainerLogin>
        <WrapperLogin>
          <BoxLogin>
            <FlexWrapContainer>
              <BoxLoginLeft>
                <BoxLoginLeftItem>
                  <Brand
                    title={'Construa relações mais fortes'}
                    alt={'Brand EnContact'}
                    src={
                      'https://www.encontact.com.br/wp-content/uploads/2022/08/cropped-img-logo-enContact.png'
                    }
                  />

                  <Form />
                </BoxLoginLeftItem>
              </BoxLoginLeft>
              <BoxLoginRight>
                <BoxLoginRightItem>
                  <Brand
                    src={
                      'https://www.encontact.com.br/wp-content/uploads/2022/08/img-header-home.png'
                    }
                    title={'Nós somos mais que uma companhia'}
                    alt={'logo da empresa'}
                  />
                </BoxLoginRightItem>
              </BoxLoginRight>
            </FlexWrapContainer>
          </BoxLogin>
        </WrapperLogin>
      </ContainerLogin>
    </SectionLogin>
  )
}

export default Login
