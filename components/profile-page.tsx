import React from 'react'
import { Alert, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const posts = [
  {
    id: "1",
    name: "Profile Picture",
    image: "",
  },
  {
    id: "2",  
    name: "Post 1",
    image: "",
  },
  { 
    id: "3",
    name: "Post 2",
    image: "",
  },
  {
    id: "4",
    name: "Post 3",
    image: "",
  },
  {
    id: "5",
    name: "Post 4",
    image: "",
  },
  {
    id: "6",
    name: "Post 5",
    image: "",
  },
  {
    id: "7",
    name: "Post 6",
    image: "",
  },
  {
    id: "8",
    name: "Post 7",
    image: "",
  },
  {
    id: "9",
    name: "Post 8",
    image: "",
  },
  {
    id: "10",
    name: "Post 9",
    image: "",
  },
  {
    id: "11",
    name: "Post 10",
    image: "",
  },
  {
    id: "12",
    name: "Post 11",
    image: "",
  },
    {
      id: "13",
      name: "Post 12",
      image: "",
    }
]


const ProfilePage = () => {
const onAlert = () => Alert.alert("Alert was pressed! ")

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.header}>
        <Text style ={styles.iconText}>‹</Text>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Group Profile</Text>
          <Text style={styles.headerSubTitle}>ootd_everyday</Text>
        </View>
        <Text style ={styles.plusIcon}>＋</Text>
      </View>

      {/* Profile Info Section */}
      <View style={styles.profileHeader}>
        <View style={styles.profilePictureRing}>
          <Image
            style={styles.profilePicture}
            source={{ uri: " " }}
          />
        </View>
        {/* Profile info */}
        <View style = {styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoCount}>150</Text>
            <Text style={styles.infoLabel}>Posts</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoCount}>12</Text>
            <Text style={styles.infoLabel}>Members</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoCount}>1</Text>
            <Text style={styles.infoLabel}>Admins</Text>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.bioSection}>
          <Text style={styles.groupName}>OOTD Everyday</Text>
          <Text style={styles.bioLine2}>Fit check!👕</Text>
          <Text style={styles.bioLine3}>You know we will hype you up</Text>
        </View>
      </View>

      {/* Member button */}
      <TouchableOpacity style={styles.memberButton}>
        <Text style={styles.memberButtonText}>Member⮟</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default ProfilePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS !== "ios" ? StatusBar.currentHeight ?? 0 : 0,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    height: 60,
  },

  iconText: {
    fontSize: 26,
    width: 30,
    paddingHorizontal: 12,
    flexDirection: 'row',
    textAlign: 'left',
    marginRight: 8,
  },

  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  headerSubTitle: {
    fontSize: 12,
    color: '#8e8e8e',
    marginTop: 2,
  },

  plusIcon: {
    fontSize: 24,
    width: 30,
    textAlign: 'right',
  },

  profileHeader: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flexDirection: 'row',          
    alignItems: 'center',
  },

  profilePictureRing: {
    width: 84,
    height: 84,
    borderRadius: 42,
    padding: 3,
    backgroundColor: '#eeeeeeff',
    marginRight: 24,
  },

  profilePicture: {
    width: "100%",
    height: "100%",
    borderRadius: 42,
    borderColor: '#fff',
    borderWidth: 3,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginLeft: 12,                
    marginTop: 0,  
  },

  infoItem: {
    alignItems: 'center',
  },

  infoCount: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  infoLabel: {
    fontSize: 12,
    color: '#8e8e8e',
  },

  bioSection: {
    marginTop: 70,
    paddingLeft: 16,
  },

  groupName: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  bioLine2: {
    fontSize: 13,
    marginTop: 2,
  },

  bioLine3: {
    fontSize: 13,
    marginTop: 2,
  },

  memberButton: {
    marginTop: 14,
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  memberButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
})
