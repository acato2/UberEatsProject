import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const topCategories = [
  {
    id: "1",
    title: "Breakfast & brunch",
    image: require("../assets/topcategories/breakfast.png"),
  },
  {
    id: "2",
    title: "Coffee & tea",
    image: require("../assets/topcategories/coffee.png"),
  },
  {
    id: "3",
    title: "Deals",
    image: require("../assets/topcategories/deals.png"),
  },
  {
    id: "4",
    title: "Restaurant Rewards",
    image: require("../assets/topcategories/rewards.png"),
  },
  {
    id: "5",
    title: "Best overall",
    image: require("../assets/topcategories/best.png"),
  },
  {
    id: "6",
    title: "Shipped free",
    image: require("../assets/topcategories/shipped.png"),
  },
];

const allCategories = [
  {
    id: "7",
    title: "Mexican",
    image: require("../assets/allcategories/mexican.png"),
  },
  {
    id: "8",
    title: "Fast Food",
    image: require("../assets/allcategories/fastfood.png"),
  },
  {
    id: "9",
    title: "Healthy",
    image: require("../assets/allcategories/healthy.png"),
  },
  {
    id: "10",
    title: "Pizza",
    image: require("../assets/allcategories/pizza.png"),
  },
  {
    id: "11",
    title: "Asian",
    image: require("../assets/allcategories/asian.png"),
  },
  {
    id: "12",
    title: "Bakery",
    image: require("../assets/allcategories/bakery.png"),
  },
  {
    id: "13",
    title: "Sandwich",
    image: require("../assets/allcategories/sandwich.png"),
  },
  {
    id: "14",
    title: "Sushi",
    image: require("../assets/allcategories/sushi.png"),
  },
  {
    id: "15",
    title: "Korean",
    image: require("../assets/allcategories/korean.png"),
  },
  {
    id: "16",
    title: "Vietnamese",
    image: require("../assets/allcategories/vietnamese.png"),
  },
  {
    id: "17",
    title: "Vegan",
    image: require("../assets/allcategories/vegan.png"),
  },
  {
    id: "18",
    title: "Bubble Tea",
    image: require("../assets/allcategories/bubbletea.png"),
  },
  {
    id: "19",
    title: "Juice & Smoothies",
    image: require("../assets/allcategories/juice.png"),
  },
  {
    id: "20",
    title: "Burgers",
    image: require("../assets/allcategories/burgers.png"),
  },
];

const CategoryItem = ({ title, image, navigation }) => (
  <TouchableOpacity
    style={styles.categoryItem}
    onPress={() => {
      if (title === "Deals" && navigation) {
        navigation.navigate("OffersScreen");
      }
    }}
  >
    <Image source={image} style={styles.categoryImage} />
    <View style={styles.textContainer}>
      <Text style={styles.categoryText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const SearchCategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchContainer}
        onPress={() => navigation.navigate("SearchScreen")}
      >
        <Icon name="search" size={20} color="black" style={styles.searchIcon} />
        <TextInput
          placeholder="Food, shopping, drinks, etc"
          style={styles.searchInput}
          editable={false}
        />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Top categories</Text>
        <View style={styles.categoriesGrid}>
          {topCategories.map((item) => (
            <CategoryItem
              key={item.id}
              title={item.title}
              image={item.image}
              navigation={navigation}
            />
          ))}
        </View>

        <Text style={styles.sectionTitle}>All categories</Text>
        <View style={styles.categoriesGrid}>
          {allCategories.map((item) => (
            <CategoryItem key={item.id} title={item.title} image={item.image} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "400",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 15,
    marginBottom: 5,
  },
  searchIcon: { marginRight: 5 },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  categoryItem: {
    width: "49%",
    marginBottom: 15,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  categoryImage: {
    width: "100%",
    height: 100,
  },
  textContainer: {
    backgroundColor: "white",
    paddingVertical: 10,
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default SearchCategoriesScreen;
