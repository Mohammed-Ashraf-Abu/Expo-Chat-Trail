import { ImageSourcePropType } from "react-native";

type cardProps = {
  title: string;
  description: string;
  image: ImageSourcePropType;
  onPress: () => void;
};

export type { cardProps };
