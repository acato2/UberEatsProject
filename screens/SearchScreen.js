import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const recentSearches = ["Cafe", "Irish"];
const topCategoriesSearch = [
  "Breakfast and Brunch",
  "Coffee and Tea",
  "Chinese",
  "Indian",
  "Latest Deals",
  "Restaurant Rewards",
  "Best Overall",
  "Nationwide Shipping",
  "Mexican",
  "Fast Food",
  "Healthy",
  "Pizza",
  "Sandwich",
  "Asian",
  "Bakery",
];

const SearchScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const tabRefs = useRef({});

  useEffect(() => {
    if (tabRefs.current["All"]) {
      tabRefs.current["All"].measureLayout(
        tabRefs.current.container,
        (x, y, width) => {
          setIndicatorPosition(0);
          setIndicatorWidth(x + width);
        }
      );
    }
  }, []);

  const handleTabPress = (tab) => {
    setActiveTab(tab);

    tabRefs.current[tab]?.measureLayout(
      tabRefs.current.container,
      (x, y, width) => {
        if (tab === "All") {
          setIndicatorPosition(0);
          setIndicatorWidth(x + width);
        } else {
          setIndicatorPosition(x);
          setIndicatorWidth(width);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back"
            size={24}
            color="black"
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Food, shopping, drinks, etc"
          style={styles.searchInput}
          autoFocus
        />
      </View>
      <View style={styles.navBarContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={styles.navBar}
            ref={(el) => (tabRefs.current.container = el)}
          >
            {["All", "Restaurants", "Grocery", "Convenience"].map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => handleTabPress(tab)}
                ref={(el) => (tabRefs.current[tab] = el)}
                style={styles.navItem}
              >
                <Text
                  style={[
                    styles.navText,
                    activeTab === tab && styles.activeNavText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View style={styles.navBarUnderline}>
          <View
            style={[
              styles.activeIndicator,
              {
                left: indicatorPosition,
                width: indicatorWidth,
              },
            ]}
          />
        </View>
      </View>
      <ScrollView>
        <Text style={styles.sectionTitleSearch}>Recent searches</Text>
        {recentSearches.map((item, index) => (
          <View key={index} style={styles.searchItemContainer}>
            <Icon
              name="search"
              size={16}
              color="black"
              style={styles.searchIconSmall}
            />
            <Text style={styles.searchItem}>{item}</Text>
          </View>
        ))}
        <Text style={styles.sectionTitleSearch}>Top Categories</Text>
        {topCategoriesSearch.map((item, index) => (
          <View key={index} style={styles.searchItemContainer}>
            <Icon
              name="search"
              size={16}
              color="black"
              style={styles.searchIconSmall}
            />
            <Text style={styles.searchItem}>{item}</Text>
          </View>
        ))}
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
  navBarContainer: {
    position: "relative",
  },

  navBar: {
    flexDirection: "row",
    paddingBottom: 15,
    paddingTop: 5,
    paddingHorizontal: 20,
  },

  navItem: {
    paddingHorizontal: 12,
  },

  navText: {
    fontSize: 16,
    color: "#000000",
  },

  activeNavText: {
    fontWeight: "bold",
    color: "black",
  },

  navBarUnderline: {
    height: 4,
    backgroundColor: "lightgray",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  activeIndicator: {
    position: "absolute",
    bottom: 0,
    width: 100,
    height: 4,
    backgroundColor: "black",
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
  sectionTitleSearch: {
    fontSize: 14,
    color: "#6B6B6B",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  searchItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginHorizontal: 15,
    marginLeft: 20,
  },
  searchIconSmall: {
    marginRight: 10,
  },
  searchItem: {
    fontSize: 16,
    fontWeight: "500",
    borderBottomWidth: 1,
    borderColor: "#eee",
    flex: 1,
    marginLeft: 5,
    paddingBottom: 5,
  },
});

export default SearchScreen;
