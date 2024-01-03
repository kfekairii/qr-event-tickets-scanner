import { HStack, Icon, Text, useToken } from "@gluestack-ui/themed";
import { Tabs } from "expo-router";
import { HistoryIcon, HomeIcon } from "../../utils/icons";
import { Touchable } from "../../components";
import { StatusBar } from "expo-status-bar";

const AppTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-around"
      px={16}
      py={8}
      bg="$blueGray200"
      borderTopWidth={"$1"}
      borderTopColor="$blueGray300"
    >
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Touchable
            alignItems="center"
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
          >
            <Icon
              as={getIcon(route.name)}
              color={isFocused ? "$primary500" : "$blueGray500"}
            />
            <Text
              color={isFocused ? "$primary500" : "$blueGray500"}
              bold={!!isFocused}
            >
              {label}
            </Text>
          </Touchable>
        );
      })}
    </HStack>
  );
};

const Root = () => {
  const primary500 = useToken("colors", "primary500");
  return (
    <>
      <StatusBar backgroundColor={primary500} />
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <AppTabBar {...props} />}
      >
        <Tabs.Screen name="Home" />
      </Tabs>
    </>
  );
};

// helper
const getIcon = (key: string) => {
  switch (key) {
    case "Home":
      return HomeIcon;
    case "History":
      return HistoryIcon;
    default:
      break;
  }
};

export default Root;
