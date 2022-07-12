import React, { FC } from 'react';
import styled from '@emotion/styled';

const StyledLi = styled.li({
    label: 'StyledLi',
    marginTop: '17%',
    fontSize: '1rem',
    color: '#FEFFF3',
    fontFamily: 'NeuchaRegular',
    cursor: 'pointer',
    textAlign: 'left',
    letterSpacing: '0.1rem',
})

const StyledNavMenu = styled.div({
    label: 'StyledNavMenu',
    backgroundColor: '#38412E',
    height: '77.5vh',
    display: 'flex',
    justifyContent: 'center',
    width: '150px',
    marginTop: '-4px',
})

const NavMenu: FC = () => {
    return (
            <StyledNavMenu>
                <ul>
                    <StyledLi>Команда</StyledLi>
                    <StyledLi>Занятия</StyledLi>
                    <StyledLi>Расписание</StyledLi>
                    <StyledLi>Контакты</StyledLi>
                    <StyledLi>Абонементы</StyledLi>
                    <StyledLi>Наш блог</StyledLi>
                </ul>
            </StyledNavMenu>
    )
}

export default NavMenu;