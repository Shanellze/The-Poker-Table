import { StyleSheet, Text, View } from "react-native";
import { RULES } from "../utils/rule";

export function RuleList() {
  return (
    <View style={styles.ruleContainer}>
      {RULES.map((rule) => (
        <View key={rule.name} style={styles.rule}>
          <Text>{rule.name}</Text>
          <Text>{rule.multiplier}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ruleContainer: {
    flexDirection: "row",
    width: "90%",
    height: "20%",
    marginHorizontal: 4,
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  rule: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
