import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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

const hair = StyleSheet.hairlineWidth

const ProfilePage = () => {

  const avatar = posts.find(p => p.id === '1')
  // Render twelve posts (4 rows) – change to .slice(0, 9) for 3×3, or remove slice to show all
  const gridPosts = posts.filter(p => p.id !== '1').slice(0, 12)

  const onAlert = () =>
  Platform.OS === 'web'
    ? window.alert('Alert Button pressed')
    : Alert.alert('Alert Button pressed');

  return (
    <View style={[styles.container, Platform.OS === 'web' && styles.webPhone]}>
      {/* Top Bar */}
      <View style={styles.header}>
        <Feather name="chevron-left" size={26} color="#000" />
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Group Profile</Text>
          <Text style={styles.headerSubTitle}>ootd_everyday</Text>
        </View>
        <Feather name="plus-square" size={24} color="#000" />
      </View>

    {/* Profile Info Section */}
    <View style={styles.profileHeader}>
    {/* LEFT: Profile picture + bio */}
      <View style={styles.leftColumn}>
        <View style={styles.profilePictureRing}>
          <Image
            style={styles.profilePicture}
            source={{ uri: " " }}
          />
        </View>
        
        {/* Profile info */}
         <View style={styles.rightColumn}>
          <View style={styles.infoRow}>
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
    </View>
</View>

        {/* Bio */}
        <View style={styles.bioSection}>
          <Text style={styles.groupName}>OOTD Everyday</Text>
          <Text style={styles.bioLine2}>Fit check!👕</Text>
          <Text style={styles.bioLine3}>You know we will hype you up</Text>
          <Text style={styles.bioLine3}>You know we will hype you up.</Text>
          <Text style={styles.bioLine3}>You know we'll hype you up.</Text>
        </View>

        {/* Member button */}
        <TouchableOpacity style={styles.memberButton}>
          <Text style={styles.memberButtonText}>Member⮟</Text>
        </TouchableOpacity>
      </View>

      {/* Member button */}
      <TouchableOpacity style={styles.memberButton}>
        <Text style={styles.memberButtonText}>Member⮟</Text>
      </TouchableOpacity>
      
      {/* Grid Scroll */}
      <ScrollView
        style={styles.gridScroll}
        contentContainerStyle={styles.gridScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Grid */}
        <View style={styles.grid}>
          {gridPosts.map(item => (
            <View key={item.id} style={styles.gridItem}>
              <Image source={{ uri: item.image }} style={styles.gridImage} />
            </View>
          ))}
        </View>

        
      </ScrollView>
      {/**Bottom Nav & Alert Button */}
      <View style={styles.bottomArea}>
        <View style={styles.bottomNav}>
          <Feather name="home" size={26} color="#000" />
          <Feather name="search" size={26} color="#000" />
          <MaterialCommunityIcons name="movie-play-outline" size={26} color="#000" />
          <Feather name="shopping-bag" size={26} color="#000" />
          <Feather name="user" size={26} color="#000" />
        </View>
        
        {/* Alert */}
        <TouchableOpacity style={styles.alertButton} onPress={onAlert}>
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfilePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS !== 'ios' ? StatusBar.currentHeight ?? 0 : 0,
  },
  webPhone: {
    maxWidth: 390,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderLeftWidth: hair,
    borderRightWidth: hair,
    borderColor: '#e5e5e5',
  },

  leftColumn: {
    alignItems: 'flex-start',
  },

  rightColumn: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 10,
  },

  /* Top bar */
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
  },

  iconText: { fontSize: 22, width: 30, textAlign: 'left', marginRight: 4, paddingHorizontal: 8 },
  headerTitleContainer: { flex: 1, alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: '700' },
  headerSubTitle: { fontSize: 12, color: '#8e8e8e', marginTop: 1 },
  plusIcon: { fontSize: 22, width: 30, textAlign: 'right' },

  /* Non-scrolling top section */
  topSection: { paddingHorizontal: 16, paddingTop: 10 },
  headerRow: { flexDirection: 'row', alignItems: 'center' },


  storyRingOuter: { width: 88, height: 88, borderRadius: 44, padding: 3, marginRight: 16 },
  storyRingInner: { flex: 1, backgroundColor: '#fff', borderRadius: 41, padding: 3 },
  profilePicture: { flex: 1, borderRadius: 38 },


  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
  infoRow: { flex: 1, flexDirection: 'row', justifyContent: 'space-around' },
  infoItem: { alignItems: 'center', marginHorizontal: 16},
  infoCount: { fontWeight: '700', fontSize: 18 },
  infoLabel: { fontSize: 12, color: '#8e8e8e', marginTop: 2 },


  bioSection: { marginTop: 8 },
  groupName: { fontWeight: '700', fontSize: 15 },
  bioLine2: { fontSize: 13, marginTop: 2 },
  bioLine3: { fontSize: 13, marginTop: 2 },

  memberButton: {
    marginTop: 10,
    height: 30,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  memberButtonText: { fontSize: 14, fontWeight: '600' },

  /* Grid-only scroll area */
  gridScroll: { flex: 1, marginTop: 10 },
  gridScrollContent: { paddingBottom: 90 },

  /* Grid */
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  gridItem: { width: '33.3333%', padding: 1 },
  gridImage: { width: '100%', aspectRatio: 1 },

  /* Bottom Nav & Alert Button */
  bottomArea: {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#fff",
  borderTopColor: "#e6e6e6",
  borderTopWidth: StyleSheet.hairlineWidth,
},
bottomNav: {
  height: 56,
  paddingHorizontal: 22,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},

  /* Alert */
  alertButton: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertButtonText: { color: '#fff', fontWeight: '700' },
})
