import React, { FC } from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button({
    width: '200px',
    padding: '10px',
    color: 'black',
    fontFamily: 'NeuchaRegular',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    marginTop: '10px',
    fontWeight: 'bold',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    background: 'rgba(240,193,137,0.9)',
    border: 'none',
    marginRight: '10px',
    cursor: 'pointer',
    letterSpacing: '1px',
})

interface buttonProps {
    children?: string;
  }

const Button: FC<buttonProps> = ({children}) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button;