import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

import SearchBox from "../components/SearchBox";
import { useRoute } from "@react-navigation/native";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartReducer";

const ProductInfoScreen = () => {
  const route = useRoute(); //NOTE if we pass something while navigating we can get that data by this .
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100;
  const cart = useSelector((state) => state.cart.cart);
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };
  console.log(cart);
  return (
    <ScrollView
      style={{ marginTop: 45, flex: 1, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      {/* Search box */}
      <SearchBox />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            style={{ marginTop: 25, width: width, height: height }}
            resizeMode="contain"
            source={{ uri: item }}
            key={index}
          >
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#C60C30",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "600",
                    fontSize: 12,
                  }}
                >
                  40% off
                </Text>
              </View>
              {/* share Icon */}
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#E0E0E0",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <MaterialCommunityIcons
                  name="share-variant"
                  size={25}
                  color="black"
                />
              </View>
            </View>
            {/* Heart icon */}
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#E0E0E0",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: "auto",
                marginLeft: 25,
                marginBottom: 20,
              }}
            >
              <AntDesign name="hearto" size={24} color="black" />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>

      {/* Title & price */}
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>
          {route?.params.title}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 6 }}>
          ₹{route?.params.price}
        </Text>
      </View>

      {/* border */}
      <Text
        style={{ height: 1, borderWidth: 1, borderColor: "#D0D0D0" }}
      ></Text>

      {/* color */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          gap: 10,
        }}
      >
        <Text>Color:</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {route?.params.color}
        </Text>
      </View>

      {/* size */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          gap: 10,
        }}
      >
        <Text>Size:</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {route?.params.size}
        </Text>
      </View>
      {/* border */}
      <Text
        style={{ height: 1, borderWidth: 1, borderColor: "#D0D0D0" }}
      ></Text>

      {/* Total & location */}
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginVertical: 5 }}>
          Total : ₹{route?.params.price}
        </Text>
        <Text style={{ color: "#00CED1" }}>
          FREE Delivery Tomorrow by 3PM Order within 2hrs 30 mins
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 5,
            alignItems: "center",
            gap: 5,
          }}
        >
          <Ionicons name="location" size={24} color="black" />
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            Deliver To Awesh - Amravati
          </Text>
        </View>
      </View>

      {/* In Stock */}
      <Text style={{ color: "green", marginHorizontal: 10, fontWeight: "500" }}>
        In Stock{" "}
      </Text>

      {/* Add to cart */}
      <Pressable
        onPress={() => addItemToCart(route?.params.item)}
        style={{
          backgroundColor: "#FFC72C",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        {addedToCart ? (
          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
              Added to Cart
            </Text>
          </View>
        ) : (
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            Add to Cart
          </Text>
        )}
      </Pressable>

      {/* Buy Now */}
      <Pressable
        style={{
          backgroundColor: "#FFAC1C",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
          Buy Now
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({});
