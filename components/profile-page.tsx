import React from 'react'
import { 
  Alert, 
  Image, 
  Platform, 
  StatusBar, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  ScrollView, 
} from 'react-native'
  import { LinearGradient } from 'expo-linear-gradient'
  import { Ionicons } from '@expo/vector-icons'

  type Post = {
    id: string;
    name: string;
    image: string;
  };
const posts: Post[] = [
  {
    id: "1",
    name: "Profile Picture",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900&h=900",
  },
  {
    id: "2",  
    name: "Post 1",
    image: "https://images.pexels.com/photos/936559/pexels-photo-936559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900&h=900",
  },
  { 
    id: "3",
    name: "Post 2",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900&h=900",
  },
  {
    id: "4",
    name: "Post 3",
    image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900&h=900",
  },
  {
    id: "5",
    name: "Post 4",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900&h=900",
  },
  {
    id: "6",
    name: "Post 5",
    image: "https://images.pexels.com/photos/977736/pexels-photo-977736.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900&h=900",
  },
  {
    id: "7",
    name: "Post 6",
    image: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900&h=900",
  },
  {
    id: "8",
    name: "Post 7",
    image: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900&h=900",
  },
  {
    id: "9",
    name: "Post 8",
    image: "https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900&h=900",
  },
  {
    id: "10",
    name: "Post 9",
    image: "https://images.pexels.com/photos/787929/pexels-photo-787929.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900&h=900",
  },
  {
    id: "11",
    name: "Post 10",
    image: "https://images.pexels.com/photos/936559/pexels-photo-936559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900&h=900",
  },
  {
    id: "12",
    name: "Post 11",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900&h=900",
  },
    {
      id: "13",
      name: "Post 12",
      image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=900&h=900",
    },
]

const bar_height = 68


const ProfilePage = () => {
const onAlert = () => Alert.alert("Alert Button Pressed")
const avatar = posts.find(p => p.id === "1");
const gridPosts = posts.filter(p => p.id !== "1").slice(0,12);

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.header}>
          <Ionicons name="chevron-back" size={22} style={styles.iconText} />
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Group Profile</Text>
          <Text style={styles.headerSubTitle}>ootd_everyday</Text>
        </View>
        <Ionicons name="add-circle-outline" size={22}/>
      </View>

      {/* Profile Info Section */}
      <View style={styles.profileHeader}>
        <LinearGradient colors={['#ff4bb2', '#ffa700']}
        style={styles.storyRingOuter}>
          <View style={styles.storyRingInner}>
            <Image 
            style={styles.profilePicture}
            source={{ uri: avatar?.image ?? ''}} />
          </View>
        </LinearGradient>
        {/* Profile info */}
        <View style = {styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoCount}>53</Text>
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
          <Text style={styles.bioLine2}>Fit check!</Text>
          <Text style={styles.bioLine3}>You know we will hype you up</Text>
        </View>
      </View>

      {/* Member button */}
      <TouchableOpacity style={styles.memberButton}>
        <Text style={styles.memberButtonText}>Member</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* 3 by 4 image grid */}
      <View style={styles.grid}>
        {gridPosts.map(item => (
          <View key={item.id} style={styles.gridItem}>
            <Image source={{uri: item.image }} style={styles.gridImage}/>
          </View>
        ))}
      </View>

        {/* Alert Button */}
        <TouchableOpacity style={styles.alertButton} onPress={onAlert}>
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>
      </ScrollView>
      
    </View>
  )
}

export default ProfilePage

const hair = StyleSheet.hairlineWidth
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
    borderBottomWidth: hair,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    height: 60,
  },

  iconText: {
    fontSize: 22,
    width: 30,
    paddingHorizontal: 8,
    textAlign: 'left',
    marginRight: 4,
  },

  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
  },

  headerSubTitle: {
    fontSize: 12,
    color: '#8e8e8e',
    marginTop: 1,
  },

  plusIcon: {
    fontSize: 22,
    width: 30,
    textAlign: 'right',
  },

  //Profile
  profileHeader: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  headerRow: { 
    flexDirection: 'row', 
    alignItems: 'center'},

  storyRingOuter: { 
    width: 88,
    height: 88,
    borderRadius: 44,
    padding: 4, 
    marginRight: 16 },
  
  storyRingInner: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 41,
    padding: 3,
  },

  profilePictureRing: {
    alignSelf: 'flex-start',
    width: 84,
    height: 84,
    borderRadius: 42,
    padding: 3,
    backgroundColor: '#eeeeeeff',
  },

  profilePicture: {
    flex: 1,
    borderRadius: 38,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 6,
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
    marginTop: 6,
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
    marginHorizontal: 16,
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

  grid: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 0,
  },

  gridItem: {
    width: '33.3333%',
    padding: 1.
  },

  gridImage: {
    width: '100%',
    aspectRatio: 1,
  },

  alertButton: {
    marginTop: 16,
    height: 44,
    borderRadius: 0,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'stretch',
  },

  alertButtonText: {
    color: '#fff',
    fontWeight: '700',
  },

  scrollContent: { paddingBottom: 24 },
})