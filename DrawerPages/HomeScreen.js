import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState } from "react";
import {
  SimpleLineIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Layout = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const Colors = {
  theme: "#24685b",
  white: "#fff",
  greyish: "#a4a4a4",
};

// const SkillsIcon = [
//   "language-html5",
//   "language-css3",
//   "language-javascript",
//   "language-java",
// ];

const HomeScreen = ({ navigation }) => {
  const [details, setDetails] = useState(false);
  const [bio, setBio] = useState(false);
  const [contact, setContact] = useState(false);
  const [data, setData] = useState([
    {
      title: "Muhammad Saqib Khan",
      subtitle: "Mobile Application",
      profile: require("../assets/rrr.jpg"),
      cv: "https://drive.google.com/file/d/12K00Vf44Djn9VGOqCVzXU10V0bykoJCL/view?usp=sharing",

      bio: [
        {
          title:
            "I am Muhammad Saqib khan. Freshly Graduated from KUST in BSCS. My specialization is in Mobile Applicaton. I am Very hardworking and I always give my 100 percent in every work.",
          mobile: "0313-1669889",
          email: "muhammadsaqibkhan01@gmail.com",
        },
      ],

      language: [
        {
          bgimage:
            "https://tse4.mm.bing.net/th?id=OIP.5yzx8kgRA4WA9yKoYHagPwAAAA&pid=Api&P=0",
          id: "1",
          title: "HTML",
          licon: "language-html5",
          page: "https://www.w3schools.com/html/",
        },
        {
          bgimage:
            "https://tse3.mm.bing.net/th?id=OIP.3ZzgCdy_Jkjo17ro3VyG6gHaEP&pid=Api&P=0",
          id: "2",
          title: "CSS",
          licon: "language-css3",
          page: "https://www.w3schools.com/css/",
        },
        {
          bgimage: "https://react-etc.net/files/2016-06/javascript-logo.png",
          id: "3",
          title: "javaScript",
          licon: "language-javascript",
          page: "https://www.w3schools.com/js/default.asp",
        },
        {
          bgimage:
            "https://tse3.mm.bing.net/th?id=OIP.RKCj1RbBjB3wS7SmFdqOuAHaEo&pid=Api&P=0",
          id: "4",
          title: "Java",
          licon: "language-java",
          page: "https://www.w3schools.com/java/",
        },
      ],
      project: [
        {
          title: "Pharmacoz",
          profile: require("../assets/project.png"),
          btnname: "View Project",
          seeproject: "https://github.com/saqibkhan01/Pharmacoz.git",
        },
        {
          title: "Khanu Teach",
          profile: require("../assets/project2.png"),
          btnname: "View Project",
          seeproject:
            "https://expo.dev/accounts/saqibkhanu/projects/DrawerNavigation",
        },
        {
          title: "Chat App",
          profile: require("../assets/chat.png"),
          btnname: "View Project",
          seeproject:
            "https://github.com/saqibkhan01/myChatApp/tree/master",
        },
        {
          title: "Shop App",
          profile: require("../assets/shop.jpg"),
          btnname: "View Project",
          seeproject:
            "https://github.com/saqibkhan01/myshop/tree/master",
        },
      ],
    },
  ]);
  const openEmail = email => {
    Linking.openURL(`mailto:${email}`);
  };
  const openPhone = mobile => {
    Linking.openURL(`tel:${mobile}`);
  };

  const ViewDetail = (item, index) => (
    <View style={styles.detail} key={index}>
      <View>
        {bio ? (
          <Text style={{ color: Colors.greyish }}>{item.title}</Text>
        ) : null}
      </View>
      {contact ? (
        <View>
          <View style={{flexDirection:"row"}}> 
            <Text style={{color: Colors.greyish}}>Mobile :</Text>
          <TouchableOpacity onPress={() => openPhone(item.mobile)}>
          <Text style={{fontWeight:"bold",color:"blue", marginLeft:5 }}>{item.mobile}</Text>
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row"}}> 
            <Text style={{color: Colors.greyish}}>Email :</Text>
          <TouchableOpacity onPress={() => openEmail(item.email)}>
          <Text style={{fontWeight:"bold",color:"blue", marginLeft:5 }}>{item.email}</Text>
          </TouchableOpacity> 
          </View>
          
        </View>
      ) : null}
    </View>
  );
  const ViewSkill = (item, index) => (
    <View key={index} style={styles.skillbtn}>
      <TouchableOpacity
        onPress={() => navigation.navigate("skilldetail", { item })}
      >
        <MaterialCommunityIcons
          name={item.licon}
          size={30}
          style={{ color: Colors.theme }}
        />
      </TouchableOpacity>
    </View>
  );

  const ViewProject = (item, index) => (
    <View key={index}>
      <View style={styles.project}>
        <Text style={{ fontSize: 20, color: Colors.white }}>{item.title}</Text>
        <Image
          style={{
            color: Colors.white,
            height: 100,
            width: 100,
            marginVertical: 20,
          }}
          source={item.profile}
        />
        <TouchableOpacity onPress={() => Linking.openURL(item.seeproject)}>
          <View
            style={{
              backgroundColor: Colors.white,
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginBottom: 7,
            }}
          >
            <Text>{item.btnname}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <View style={styles.container} key={index}>
          <StatusBar
            translucent={false}
            barStyle="light-content"
            backgroundColor={Colors.theme}
          />
          <View
            style={{
              backgroundColor: Colors.theme,
              paddingBottom: Layout.height * 0.2,
              borderBottomLeftRadius: Layout.width * 0.1,
              borderBottomRightRadius: Layout.width * 0.1,
            }}
          >
            <View
              style={{
                alignItems: "flex-end",
                paddingHorizontal: 32,
                marginVertical: 20,
              }}
            >
              <TouchableOpacity onPress={() => setDetails(!details)}>
                <SimpleLineIcons
                  name="equalizer"
                  size={20}
                  style={{ color: Colors.white }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 20 }}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={item.profile}
              />

              <View style={{ paddingLeft: 10 }}>
                <Text
                  style={{ textTransform: "uppercase", color: Colors.white }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: Colors.greyish }}>{item.subtitle}</Text>
              </View>
              <TouchableOpacity
                onPress={() => Linking.openURL(item.cv)}
                style={styles.resumebtn}
              >
                <Text style={styles.resumetext}>resume</Text>
              </TouchableOpacity>
            </View>
          </View>

          {details ? (
            <View>
              <View style={styles.bio}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <TouchableOpacity onPress={() => setBio(!bio)}>
                    <Text>Bio</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setContact(!contact)}>
                    <AntDesign name="user" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
              <FlatList
                data={item.bio}
                renderItem={({ item, index }) => ViewDetail(item, index)}
              />
              <View style={styles.skill}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <Text>Skills</Text>
                  <MaterialCommunityIcons name="pen" size={20} />
                </View>
                <ScrollView
                  // horizontal
                  // showsHorizontalScrollIndicator={false}
                  style={{ marginVertical: 8 }}
                >
                  <FlatList
                    horizontal
                    keyExtractor={(key) => key.id}
                    data={item.language}
                    renderItem={({ item }) => ViewSkill(item, index)}
                  />
                </ScrollView>
              </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={item.project}
                //listKey={(item, index) => "D" + index.toString()}
                renderItem={({ item, index }) => ViewProject(item, index)}
              />
            </View>
          ) : null}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  bio: {
    paddingHorizontal: 32,
    marginHorizontal: 32,
    backgroundColor: Colors.white,
    padding: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: 20,
    elevation: 0,
    marginBottom: 15,
    marginTop: -Layout.height * 0.15,
  },
  detail: {
    paddingHorizontal: 32,
    marginHorizontal: 32,
    backgroundColor: Colors.white,
    padding: 20,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderRadius: 20,
    elevation: 0,
    marginBottom: 15,
    marginTop: -Layout.height * 0.02,
  },
  skill: {
    paddingHorizontal: 32,
    marginHorizontal: 32,
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 20,
    elevation: 20,
    marginBottom: 15,
  },
  skillbtn: {
    width: 48,
    height: 48,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.theme,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  project: {
    backgroundColor: Colors.theme,
    paddingHorizontal: 32,
    marginHorizontal: 32,
    borderRadius: 20,
    marginBottom: 16,
    width: Layout.width * 0.85,
    alignItems: "center",
    elevation: 20,
  },
  resumebtn: {
    marginLeft: 50,
    paddingTop: 15,
    borderBottomWidth: 2,
    borderColor: "blue",
  },
  resumetext: {
    textAlign: "center",
    color: "blue",
    fontSize: 20,
  },
});

export default HomeScreen;
