import React, { useState, useRef, useLayoutEffect } from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

import { CardInfo } from "../../../types/CommonTypes";

import {
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardName,
  CardNetwork,
  CardStartDate,
  IconWrapper,
  CardTags,
  TagItem,
  TagTitle,
  ActionButtons,
} from "./ContentCard.styled";

const verifiedLogo = require("../../../shared/images/checked.png").default;

const DUMMY_DATA: CardInfo = {
  name: "Tomb Fork",
  image: "https://assets.duelistking.com/metadata/horus--rage.jpg",
  description:
    "This is an innovatinve farmining protocol This is an innovatinve farmining protocol This is an innovatinve farmining protocol This is an innovatinve farmining protocol This is an innovatinve farmining protocolThis is an innovatinve farmining protoco This is an innovatinve farmining protocol This is an innovatinve farmining protocol s is",
  startDate: "Tue Mar 22 2022 09:35:40 GMT+0000",
  network: "Fantom",
  verified: true,
  added: "Tue Mar 20 2022 09:35:40 GMT+0000",
  viewCount: 13,
  tags: ["KYC", "Audited", "Promoted", "Verified", "Renounced"],
  socials: {
    discord: "www.onet.pl",
    twitter: "",
    website: "",
    telegram: "",
  },
};

const MAX_DESCRIPTION_HEIGHT = 50;

const ContentCard = () => {
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0);

  const descriptionRef = useRef<HTMLDivElement>(null);

  const tags = DUMMY_DATA.tags.map((tag: string, index: number) => (
    <TagItem key={index} className={tag}>
      {tag}
    </TagItem>
  ));

  const animateCardDescription = descriptionHeight >= MAX_DESCRIPTION_HEIGHT;

  const getDescriptionHeight = () => {
    setDescriptionHeight(descriptionRef.current?.clientHeight || 0);
  };

  useLayoutEffect(() => {
    getDescriptionHeight();
  }, [descriptionRef.current?.clientHeight]);

  return (
    <Card>
      <CardImage src={DUMMY_DATA.image} alt={DUMMY_DATA.name} />
      <CardContent>
        <CardName>
          {DUMMY_DATA.name}
          <IconWrapper>
            {DUMMY_DATA.verified && (
              <Image
                src={verifiedLogo}
                alt={DUMMY_DATA.name}
                width="16"
                height="16"
              />
            )}
          </IconWrapper>
        </CardName>
        <CardNetwork>{DUMMY_DATA.network}</CardNetwork>
        <CardDescription
          ref={descriptionRef}
          animateCardDescription={animateCardDescription}
        >
          {DUMMY_DATA.description}
        </CardDescription>
        {/*Format date if needed*/}
        <CardStartDate>{DUMMY_DATA.startDate.slice(0, 16)}</CardStartDate>
        <CardTags>
          <TagTitle>Tags</TagTitle>
          {tags}
        </CardTags>
        <ActionButtons>
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: 12 }}
            endIcon={<ArrowForwardIcon />}
            className="btn_details"
          >
            View Details
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: 12 }}
            color="success"
          >
            View website
          </Button>
        </ActionButtons>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
