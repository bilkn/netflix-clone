import styled, { createGlobalStyle } from 'styled-components/macro';

export const LockBody = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

export const ReleaseBody = createGlobalStyle`
    body {
        overflow: visible;
    }
`;

export const Spinner = styled.div`
  background-color: black;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 999;
  :after {
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background-image: url(/images/misc/spinner.png);
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    height: 150px;
    left: 50%;
    margin-left: -75px;
    margin-top: -150px;
    position: absolute;
    top: 50%;
    width: 150px;
  }
  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Picture = styled.img`
  height: 50px;
  left: 50%;
  margin-left: -22px;
  margin-top: -100px;
  position: absolute;
  top: 50%;
  width: 50px;
`;
