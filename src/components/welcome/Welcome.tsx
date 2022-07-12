import React, { FC } from 'react';
import styled from '@emotion/styled';
import foto from '../assets/img/main-foto-crop.jpg';
import Button from '../common/Button'

const WelcomeBlockStyled = styled.div({
    width: '470px',
    backgroundImage: `url(${foto})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '470px 700px',
    position: 'relative',
    boxShadow: '20px 7px 60px 21px rgba(234,190,140,0.65)',
    borderLeft: '1px solid #aaa',
})

const ButtonBlock = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: '20px',
})

const WelcomeTitle = styled.p({
    fontFamily: 'CaveatRegular',
    fontSize: '2.3rem',
    textTransform: 'uppercase',
    marginTop: '370px',
    fontWeight: 'bold',
    backgroundColor: 'rgba(224,212,190,0.7)',
    color: 'black',
    zIndex: '10',
    display: 'block',
    width: '500px',
    padding: '2px 13px',
    borderBottomRightRadius: '5px',
    borderTopRightRadius: '5px',
})

const WelcomeSubtitle = styled.p({
    fontFamily: 'NeuchaRegular',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    backgroundColor: 'rgba(224,212,190,0.7)',
    whiteSpace: 'nowrap',
    display: 'block',
    padding: '5px 13px',
    color: 'black',
    marginTop: '4px',
    width: 'max-content',
    borderBottomRightRadius: '5px',
    borderTopRightRadius: '5px',
    letterSpacing: '1px',
})


const WelcomeBlock: FC = () => {
    return (
        <WelcomeBlockStyled>
            <div>
                <WelcomeTitle>Добро пожаловать в Хюгге</WelcomeTitle>
                <WelcomeSubtitle>Мы не поем Ом</WelcomeSubtitle>
                <WelcomeSubtitle>Не посадим на шпагат за 7 дней</WelcomeSubtitle>
                <WelcomeSubtitle>Нас любят за душевное тепло, уют, заботу и профессионализм</WelcomeSubtitle>
            </div>
            <ButtonBlock>
                <Button>Записаться на йогу</Button>
                <Button>Хочу консультацию</Button>
            </ButtonBlock>
        </WelcomeBlockStyled>
    )
}

export default WelcomeBlock;