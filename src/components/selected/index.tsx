import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, Text } from "react-native";
import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated";

import { styles } from "./styles";

import { Button } from "@/components/Button";
import { theme } from "@/theme";

type Props = {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
};

export function Selected({ quantity, onClear, onSearch }: Props) {
  return (
    <Animated.View
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>

        <MaterialIcons
          name="close"
          size={24}
          color={theme.colors.gray_400}
          onPress={onClear}
        />
      </View>

      <Button title="Encontrar" onPress={onSearch} />
    </Animated.View>
  );
}
