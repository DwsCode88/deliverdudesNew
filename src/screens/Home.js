import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabs from "../../components/HeaderTabs";
import SearchBar from "../../components/SearchBar";
import Categories from "../../components/Categories";
import RestaurantItem from "../../components/RestaurantItem";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "lightgrey", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
}
