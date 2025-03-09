import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const rewardsData = [
  {
    id: "1",
    name: "Ice Cream Bar",
    image: require("../assets/rewards/icecream.jpg"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
  },
  {
    id: "2",
    name: "Coco Restaurant",
    image: require("../assets/rewards/coco.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
  },
  {
    id: "3",
    name: "Cherrp",
    image: require("../assets/rewards/cherrp.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
  },
  {
    id: "4",
    name: "Lizzy’s Home",
    image: require("../assets/rewards/lizzy.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
  },
  {
    id: "5",
    name: "Iguanas",
    image: require("../assets/rewards/iguanas.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
  },
  {
    id: "6",
    name: "Shrippy Cos",
    image: require("../assets/rewards/shrippy.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
  },
];

const RewardsScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <TouchableOpacity
        style={styles.heartButton}
        onPress={() => toggleFavorite(item.id)}
      >
        <Ionicons
          name={favorites.includes(item.id) ? "heart" : "heart-outline"}
          size={24}
          color={favorites.includes(item.id) ? "red" : "white"}
        />
      </TouchableOpacity>

      <View style={styles.rating}>
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.deliveryInfo}>
          {item.deliveryFee} Delivery Fee • {item.time}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Earn restaurant rewards</Text>

      <FlatList
        data={rewardsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "500",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: "white",
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
  },
  heartButton: {
    position: "absolute",
    top: 10,
    right: 5,
    padding: 8,
    borderRadius: 20,
  },
  rating: {
    position: "absolute",
    bottom: 25,
    right: 10,
    backgroundColor: "#EDEDED",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  ratingText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "black",
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 15,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  deliveryInfo: {
    fontSize: 14,
    color: "gray",
  },
});

export default RewardsScreen;
