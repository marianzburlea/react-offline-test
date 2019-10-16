import styled from 'styled-components'

export const StyledWind = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  border-top: 4px solid black;
  border-bottom: 4px solid black;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 14px;
    position: absolute;
    border-top: 4px solid black;
    border-bottom: 4px solid black;
  }

  &::before {
    top: 5px;
    bottom: -5px;
    left: 20px;
  }

  &::after {
    top: 15px;
    left: 9px;
  }
`

export const StyledSolar = styled.div`
  width: 40px;
  height: 40px;
  position: relative;

  border-radius: 50%;
  background-color: #FDB813;
  border: 2px solid transparent;
  box-shadow: inset 0 0 0 1px #f7a51d;
  margin: 13px;

  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #FDB813;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 27px 0 #FDB813, 33px 0 #FDB813, -27px 0 #FDB813, -33px 0 #FDB813, 0 27px #FDB813, 0 33px #FDB813, 0 -27px #FDB813, 0 -33px #FDB813;
  }
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #FDB813;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    box-shadow: 27px 0 #FDB813, 33px 0 #FDB813, -27px 0 #FDB813, -33px 0 #FDB813, 0 27px #FDB813, 0 33px #FDB813, 0 -27px #FDB813, 0 -33px #FDB813;
  }
`

export const StyledOther = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  background-color: transparent;
  border: 4px solid transparent;

  &::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border: 4px solid #c00;
    border-bottom-color: transparent;
    border-radius: 50%;
    box-shadow: 14px 17px 0 -10px #c00;
    top: 2px;
    left: 8px;
    transform: rotate(45deg); 
  }

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 7px;
    background-color: #c00;
    top: 24px;
    left: 17px;
    border-radius: 2px 0 0;
  }
`

export const StyledHydro = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  background-color: #0077be;
  border-radius: 50%;

  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 2px;
    transform: rotateZ(45deg);
    background-color: #0077be;
    top: -3px;
    left: 8px;
  }
`

export const StyledNuclear = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 50%;
  border: 1px solid #409400;
  background-color: transparent;
  overflow: hidden;
  background-image: radial-gradient(circle at 50% 50%, 
      #409400 0, #409400 12px, transparent 0);
  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 0px;
    border-radius: 50%;
    border: 25px solid #409400;
    border-color: transparent #409400;
    top: 33%;
    left: 50%;
    transform: translate(-50%, -50%) scaleX(0.7);
    clip: rect(0 80px 32px 0);
  }
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 0px;
    border-radius: 50%;
    border: 25px solid #409400;
    border-color: transparent transparent #409400 transparent;
    top: 67%;
    left: 50%;
    transform: translate(-50%, -50%) scaleX(0.7);
  }
`

export const StyledGas = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin: .4em .5em 0 .15em;

  &:before {
    content: '';
    position: absolute;
    width: 32px;
    height: 32px;
    background-color: #000;
    border-radius: 50%;
    left: 0.55em;
    box-shadow: 1.45em 0, -0.6em 0.06em 0 -0.08em, 0.2em -0.53em 0 0.03em, 0.52em 0.02em; 
  }
`

export const StyledImports = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 4px solid #409400;
  background-color: transparent;
  margin: 0;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    border: 4px solid #409400;
    border-color: #409400 #409400 transparent transparent;
    top: 50%;
    left: 50%;
    transform: translate(-30%,-50%) rotate(-135deg);
  }
`

export const StyledCoal = styled.div`
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  height: 40px;
  width: 40px;
  background-color: #222224;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    width: 80%;
    height: 100%;
    bottom: -10%;
  }

  &::before {
    background-color: #403f44;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transform: rotateZ(-10deg)
  }

  &::after {
    top: -20%;
    background-color: #313133;
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    transform: rotateZ(40deg)
  }
`

export const StyledBiomass = styled.div`
  border: 2px solid #f1d25a;
  width: 20px;
  height: 40px;
  background-color: #feea9e;
  border-radius: 50%;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    width: 80%;
    height: 100%;
    bottom: -10%;
  }

  &::before {
    background-color: #5aa952;
    left: -20%;
    border-bottom-left-radius: 50%;
    border-top-right-radius: 90%;
    border-top-left-radius: 20%;
    border-bottom-right-radius: 20%;
    transform: rotateZ(-10deg)
  }

  &::after {
    border-top-left-radius: 90%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 20%;
    border-top-right-radius: 20%;
    background-color: #80c56e;
    right: -20%;
    transform: rotateZ(10deg)
  }
`
