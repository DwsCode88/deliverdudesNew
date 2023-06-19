import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabs from "../../components/HeaderTabs";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "lightgrey", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
      </View>
    </SafeAreaView>
  );
}
