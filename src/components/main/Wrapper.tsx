import React, { FC } from 'react';
import styled from '@emotion/styled';

const StyledWrapper = styled.div({
    width: '100%',
    background: 'rgba(242,214,185,0.6)',
    position: 'relative',
    zIndex: '-10',
})

const MainWrapper: FC = () => {
    return (
        <StyledWrapper />
    )
}

export default MainWrapper;