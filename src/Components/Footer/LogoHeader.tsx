import { Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const LogoHeader = () => {
  const { t } = useTranslation();
  return (
    <Heading
      as="h2"
      fontFamily="Inter-800"
      fontSize="36px"
      lineHeight="44px"
      color="white"
      textAlign="center"
    >
      {t("logo")}
    </Heading>
  );
};
