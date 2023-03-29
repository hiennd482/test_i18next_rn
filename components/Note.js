import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
const SIGN_IN = "SIGN_INn";
const GET_STARTED = "GET_STARTED";
const NEW = "NNEW";
const YellowComponents = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t("key")}</Text>
    </View>
  );
};
const Redcomponent = ({ page, setPage }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <View style={{ width: "100%", height: "100%" }}>
        <View
          style={{
            width: "100%",
            flex: 1,
            backgroundColor: "#4D8D6E",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 50, fontWeight: "700", color: "white" }}>
            Wasty
          </Text>
          <Text style={{ color: "white" }}>think for nature</Text>
        </View>
        <View
          style={{ height: 50, flexDirection: "row", backgroundColor: "white" }}
        >
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setPage(SIGN_IN);
            }}
            disabled={page === SIGN_IN ? true : false}
          >
            <Text style={{ fontSize: 20, color: "red" }}>Sign in</Text>
            {page === SIGN_IN ? (
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 3,
                  width: "100%",
                  backgroundColor: "#4D8D6E",
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setPage(GET_STARTED);
            }}
            disabled={page === GET_STARTED ? true : false}
          >
            <Text style={{ fontSize: 20, color: "#4D8D6E" }}>Get started</Text>
            {page === GET_STARTED ? (
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 3,
                  width: "100%",
                  backgroundColor: "#4D8D6E",
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setPage(NEW);
            }}
            disabled={page === NEW ? true : false}
          >
            <Text style={{ fontSize: 20, color: "#4D8D6E" }}>Get new</Text>
            {page === NEW ? (
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  height: 3,
                  width: "100%",
                  backgroundColor: "#4D8D6E",
                }}
              ></View>
            ) : null}
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};
const Greencomponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdhidden, setPwdhidden] = useState(true);
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 24 }}>LOgin your account</Text>
      {/* email */}
      <View
        style={{
          width: 360,
          height: 45,
          marginTop: 20,
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        <AntDesign
          name="mail"
          size={24}
          color="black"
          style={{ marginLeft: 10 }}
        />
        <TextInput
          style={{ flex: 1, height: "100%", marginLeft: 10, fontSize: 16 }}
          autoCapitalize={false}
          placeholder="Email"
        ></TextInput>
      </View>
      {/* pass */}
      <View
        style={{
          width: 360,
          height: 45,
          marginTop: 20,
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        <AntDesign
          name="lock"
          size={28}
          color="black"
          style={{ marginLeft: 10 }}
        />
        <TextInput
          style={{ flex: 1, height: "100%", marginLeft: 10, fontSize: 15 }}
          autoCapitalize={false}
          placeholder="Password"
          secureTextEntry={pwdhidden ? true : false}
        ></TextInput>
        <TouchableOpacity
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setPwdhidden(!pwdhidden)}
        >
          <AntDesign
            name="eye"
            size={20}
            color="black"
            style={{ padding: 10 }}
          />
        </TouchableOpacity>
      </View>
      {/* forgot pass */}
      <View style={{ margin: 10 }}>
        <TouchableOpacity>
          <Text style={{ color: "gray", right: 0, position: "absolute" }}>
            forgot passs ?
          </Text>
        </TouchableOpacity>
      </View>
      {/* btn */}
      <TouchableOpacity
        style={{
          marginTop: 30,
          backgroundColor: "#4D8D6E",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          borderRadius: 50,
        }}
      >
        <Text style={{ color: "white" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// footer
const Bluecomponents = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ height: 1, width: "30%", backgroundColor: "#707070" }}
        ></View>
        <Text> OR connect with </Text>
        <View
          style={{ height: 1, width: "30%", backgroundColor: "#707070" }}
        ></View>
      </View>
      <View style={styles.logoWrapper}>
        <Image
          source={require("../assets/img/google.png")}
          resizeMode="contain"
          style={styles.logo}
        ></Image>
        <Image
          source={require("../assets/img/apple2.jpg")}
          resizeMode="contain"
          style={styles.logo}
        ></Image>
      </View>
      <View style={styles.logoWrapper}>
        <Image
          source={require("../assets/img/fb.png")}
          resizeMode="contain"
          style={styles.logo}
        ></Image>
        <Image
          source={require("../assets/img/twitter.png")}
          resizeMode="contain"
          style={styles.logo}
        ></Image>
      </View>
    </View>
  );
};
const Note = () => {
  const [page, setPage] = useState(SIGN_IN);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={{ height: "25%", width: "100%" }}>
        <Redcomponent page={page} setPage={setPage}></Redcomponent>
      </View>
      <View
        style={{ height: "40%", width: "100%", backgroundColor: "#f5f5f5" }}
      >
        {page === SIGN_IN ? (
          <YellowComponents></YellowComponents>
        ) : (
          <Greencomponent></Greencomponent>
        )}
      </View>
      <View style={{ flex: 1 }}>
        <Bluecomponents></Bluecomponents>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "50%",
    borderRadius: 60,
    height: "100%",
  },
  logoWrapper: {
    height: 50,
    width: "89%",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Note;
