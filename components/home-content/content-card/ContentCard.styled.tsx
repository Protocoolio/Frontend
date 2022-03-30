import styled, { css } from "styled-components";
import { breakpoints, customStyle } from "../../../styles/constants";

export const Card = styled.div`
  background-color: ${customStyle.colors.white};
  height: 640px;
  margin: 10px;
  padding: 10px;
  transition: 0.2s;
  width: 320px;
  border: none;
  position: relative;

  @media (max-width: ${breakpoints.mobile}px) {
    position: static;
  }

  @media (max-width: ${breakpoints.xxs}px) {
    width: 280px;
  }

  .btn_details {
    visibility: hidden;

    @media (max-width: ${breakpoints.mobile}px) {
      visibility: visible;
    }
  }

  &:hover {
    box-shadow: ${customStyle.boxShadow};
    cursor: pointer;
    transform: translateY(-2px);

    .btn_details {
      visibility: visible;
      transition: 0.2s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 280px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background-color: ${customStyle.colors.white};

  @media (max-width: ${breakpoints.mobile}px) {
    position: static;
  }
`;

export const CardName = styled.div`
  font-family: ${customStyle.fonts.lato};
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

export const IconWrapper = styled.div`
  margin-left: 5px;
`;

export const CardNetwork = styled.div`
  font-family: ${customStyle.fonts.roboto};
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

export const CardDescription = styled.div<{ animateCardDescription?: boolean }>(
  ({ animateCardDescription }) => css`
    font-family: ${customStyle.fonts.roboto};
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 5px;
    font-size: 12px;
    max-height: 50px;
    overflow-y: hidden;
    transition: max-height 0.4s;
    position: relative;

    ${animateCardDescription &&
    css`
      @media (max-width: ${breakpoints.mobile}px) {
        overflow-y: scroll;
        max-height: 50px;
      }

      &:hover {
        max-height: 300px;
        transition: max-height 0.4s ease-in;
        overflow-y: none;

        @media (max-width: ${breakpoints.mobile}px) {
          overflow-y: scroll;
          max-height: 50px;
        }

        &:after {
          height: 0;
          transition: 0.4s;
        }
      }

      &:after {
        @media (max-width: ${breakpoints.mobile}px) {
          display: none;
        }

        content: "";
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1)
        );
        bottom: 0;
        height: 30px;
        left: 0;
        position: absolute;
        right: 0;
        transition: 2s;
      }
    `};
  `
);

export const CardStartDate = styled.div`
  font-family: ${customStyle.fonts.roboto};
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 5px;
  font-size: 12px;
`;

export const CardTags = styled.div`
  background-color: ${customStyle.colors.secondary};
  width: 100%;
  display: flex;
  margin-top: 5px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TagItem = styled.div<{ className?: string }>(
  ({ className }) => css`
    font-size: 10px;
    padding: 5px 10px;
    margin: 5px;
    //change later as per className
    background-color: ${customStyle.colors.border};
  `
);

export const TagTitle = styled.div`
  font-size: 12px;
  width: 100%;
  text-align: center;
`;

export const ActionButtons = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  padding: 10px 0;
  gap: 10px;
`;
