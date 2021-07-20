import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`;

export const slideUp = keyframes`
    from{
        transform:scale(.5) translateY(20rem)
    }
    to{
        transform:scale(1) translateY(0)
    }
`;

export const slideDown = keyframes`
    from{
        transform:scale(1) translateY(0)
    }
    to{
        transform:scale(.5) translateY(20rem)
    }
`;

export const breath = keyframes`
    0%{
        transform:scale(1)
    }
    40%{
        transform:scale(1) rotate(1deg)
    }
    100%{
        transform:scale(1.1) rotate(-1deg)
    }
`;
