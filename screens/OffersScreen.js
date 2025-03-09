import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const offersData = [
  {
    id: "1",
    name: "Papos Burgers",
    image: require("../assets/offers/burger.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.3",
    deal: "Spend US$20, save US$5",
  },
  {
    id: "2",
    name: "Zizza Italiano",
    image: require("../assets/offers/pizza.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
    deal: "Save on selected items",
  },
  {
    id: "3",
    name: "Zizzy and Friends",
    image: require("../assets/offers/zizzy.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
    deal: "Spend US$20, save US$5",
  },
  {
    id: "4",
    name: "Quernos",
    image: require("../assets/offers/quernos.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
    deal: "Save on selected items",
  },
  {
    id: "5",
    name: "Leny Foods",
    image: require("../assets/offers/leny.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
    deal: "Save on selected items",
  },
  {
    id: "6",
    name: "Crop Rool Restaurant",
    image: require("../assets/offers/croprool.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
  },
  {
    id: "7",
    name: "Slads Place",
    image: require("../assets/offers/slads.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
    deal: "Save on selected items",
  },
  {
    id: "8",
    name: "Pie Retreat",
    image: require("../assets/offers/pie.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
    deal: "Save on selected items",
  },
  {
    id: "9",
    name: "Mirashe",
    image: require("../assets/offers/mirashe.png"),
    deliveryFee: "$0.35",
    time: "30-35 min",
    rating: "4.1",
  },
];
const OffersScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      {item.deal && (
        <View style={styles.dealTag}>
          <Text style={styles.dealText}>{item.deal}</Text>
        </View>
      )}

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
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
      >
        {[
          { icon: "filter" },
          { label: "Pick-up", icon: "walk" },
          { label: "Sort" },
          { label: "Best Overview" },
        ].map((filter, index) => (
          <TouchableOpacity key={index} style={styles.filterButton}>
            {filter.icon && (
              <Ionicons
                name={filter.icon}
                size={16}
                color="black"
                style={filter.label ? null : styles.iconOnly}
              />
            )}
            {filter.label && (
              <Text style={styles.filterText}>{filter.label}</Text>
            )}
            {filter.label === "Sort" && (
              <Ionicons name="chevron-down" size={16} color="black" />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={offersData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListFooterComponent={
          <View style={styles.comebackContainer}>
            <Image
              source={require("../assets/offers/comeback.png")}
              style={styles.comebackImage}
            />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  filtersContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    marginLeft: 15,
    marginVertical: 10,
    marginBottom: 20,
    minHeight: 35,
  },

  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 6,
  },

  iconOnly: {
    alignSelf: "center",
  },

  filterText: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
    marginLeft: 5,
    marginRight: 3,
  },

  list: {
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: "white",
    marginBottom: 15,
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
    padding: 10,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  deliveryInfo: {
    fontSize: 14,
    color: "gray",
  },

  dealTag: {
    position: "absolute",
    top: 20,
    backgroundColor: "#34A853",
    padding: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: "60%",
  },
  dealText: {
    color: "white",
    fontSize: 14,
    paddingHorizontal: 15,
    fontWeight: "500",
  },

  comebackContainer: {
    alignItems: "center",
  },
  comebackImage: {
    width: "100%",
    resizeMode: "contain",
  },
});

export default OffersScreen;
