import { StyleSheet, Platform, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  ArrowLeftIcon,
  Box,
  Button,
  ButtonIcon,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import CustomFrame from "../components/CustomFrame";
import { StatusBar, setStatusBarHidden } from "expo-status-bar";
import { useRouter } from "expo-router";
import { height, width } from "../utils/consttants";

const Scanner = () => {
  const router = useRouter();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ data }: any) => {
    setScanned(true);
    router.replace({ pathname: "/ScannedDetails", params: { visitor: data } });
  };

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  useEffect(() => {
    setStatusBarHidden(true, "none");
    return () => setStatusBarHidden(false, "none");
  }, []);

  useEffect(() => {
    if (hasPermission === false) {
      router.back();
    }
  }, []);

  return (
    <Box flex={1}>
      <Box position="absolute" top={16} left={16} zIndex={999}>
        <Button
          variant="outline"
          borderColor="$blueGray300"
          onPress={() => router.back()}
        >
          <ButtonIcon as={ArrowLeftIcon} color="$blueGray300" />
        </Button>
      </Box>

      {hasPermission && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={
            Platform.OS === "android"
              ? {
                  position: "absolute",
                  top: 0,
                  transform: [
                    { translateX: Dimensions.get("window").width / 2 },
                  ],
                  right: 0,
                  bottom: 0,
                  width: width * 2.5,
                  height: height * 1.5,
                }
              : StyleSheet.absoluteFillObject
          }
        />
      )}
      <CustomFrame />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        py={32}
        px={16}
        zIndex={999}
        bg="$blueGray100"
        width={"$full"}
        borderTopRightRadius={"$xl"}
        borderTopLeftRadius={"$xl"}
      >
        <VStack alignItems="center">
          <Text color="$blueGray700" bold size="lg">
            Scan the QR code
          </Text>
          <Text color="$blueGray700" size="md">
            You have to scan the Badge QR code
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Scanner;
