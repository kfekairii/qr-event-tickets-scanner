import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { Box, Spinner } from "@gluestack-ui/themed";

const Onboarding = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/Home");
    }, 2000);
  }, []);

  return (
    <Box
      flex={1}
      bgColor="$primary500"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner color={"$primary50"} size={"large"} />
    </Box>
  );
};

export default Onboarding;
