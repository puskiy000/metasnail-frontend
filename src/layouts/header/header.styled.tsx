import styled from "styled-components";

export const HeaderDiv = styled.div`
  top: 0;
  transition: all 0.3s;
  .header-play-btn {
    :hover {
      filter: brightness(115%) contrast(100%) saturate(140%) blur(0px)
        hue-rotate(0deg);
      animation-name: elementor-animation-pulse-grow;
      animation-duration: 0.6s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
  @keyframes elementor-animation-pulse-grow {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .menu-item {
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
    :hover {
      color: #9ddddd !important;
    }
    :before {
      right: 0;
      left: auto;
      position: absolute;
      height: 5px;
      width: 0%;
      bottom: -3px;
      background: #00c3ff;
      content: "";
      display: block;
      transition: all 0.3s linear;
      border-top-left-radius: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 0;
    }
    :after {
      position: absolute;
      height: 5px;
      width: 0%;
      bottom: -3px;
      left: 0;
      right: auto;
      background: #00c3ff;
      content: "";
      display: block;
      border-top-left-radius: 5px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 5px;
      transition: all 0.3s linear;
    }
    :hover {
      :before {
        right: auto;
        left: 50%;
        width: 50%;
      }
      :after {
        left: auto;
        right: 50%;
        width: 50%;
      }
    }
  }
  .sub-show {
    transition: all 0.5s;
    top: 80px;
    opacity: 1;
    z-index: 3;
    visibility: visible;
  }

  .sub-hide {
    transition: all 0.5s;
    opacity: 0;
    top: 120px;
    z-index: -9999;
    visibility: hidden;
  }

  .menu-hover {
    transition: 0.3s all;
    :hover {
      padding-left: 15px;
      color: #00c3ff;
      :before {
        left: 0;
        opacity: 1;
      }
    }
    position: relative;

    display: flex;
    align-items: center;
    :before {
      transition: 0.3s all;
      position: absolute;
      opacity: 0;
      content: "";
      left: -15px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #00c3ff;
    }
  }
`;
