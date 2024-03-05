import { FlatList, Image, Pressable, ScrollView, Text } from "react-native";
import { styles } from "./styles";
import { Ingredient } from "../Ingredient";

export function Ingredients() {
  return(
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.ingredientsContent}
      showsHorizontalScrollIndicator={false}
    >
      
        <Ingredient />
      

  </ScrollView>
  )}