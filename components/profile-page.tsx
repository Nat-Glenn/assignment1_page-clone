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

const hair = StyleSheet.hairlineWidth

const ProfilePage = () => {
  const onAlert = () => Alert.alert('Alert Button pressed')

  const avatar = posts.find(p => p.id === '1')
  // Render twelve posts (4 rows) – change to .slice(0, 9) for 3×3, or remove slice to show all
  const gridPosts = posts.filter(p => p.id !== '1').slice(0, 12)

  return (
    <View style={[styles.container, Platform.OS === 'web' && styles.webPhone]}>
      {/* Top Bar */}
      <View style={styles.header}>
        <Text style={styles.iconText}>‹</Text>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Group Profile</Text>
          <Text style={styles.headerSubTitle}>ootd_everyday</Text>
        </View>
        <Text style={styles.plusIcon}>＋</Text>
      </View>

      {/* Non scrolling sectionn*/}
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <LinearGradient colors={['#ff4bb2', '#ffa700']} style={styles.storyRingOuter}>
            <View style={styles.storyRingInner}>
              <Image style={styles.profilePicture} source={{ uri: avatar?.image ?? '' }} />
            </View>
          </LinearGradient>

          {/* Stats */}
          <View style={styles.infoRow}>
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
        </View>

        {/* Bio */}
        <View style={styles.bioSection}>
          <Text style={styles.groupName}>OOTD Everyday</Text>
          <Text style={styles.bioLine2}>Fit check!</Text>
          <Text style={styles.bioLine3}>You know we'll hype you up.</Text>
        </View>

        {/* Member button */}
        <TouchableOpacity style={styles.memberButton}>
          <Text style={styles.memberButtonText}>Member</Text>
        </TouchableOpacity>
      </View>

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

        {/* Alert */}
        <TouchableOpacity style={styles.alertButton} onPress={onAlert}>
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>
      </ScrollView>
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

  /* Top bar */
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: hair,
    borderBottomColor: '#ddd',
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


  infoRow: { flex: 1, flexDirection: 'row', justifyContent: 'space-around' },
  infoItem: { alignItems: 'center' },
  infoCount: { fontWeight: '700', fontSize: 18 },
  infoLabel: { fontSize: 12, color: '#8e8e8e', marginTop: 2 },


  bioSection: { marginTop: 8 },
  groupName: { fontWeight: '700', fontSize: 15 },
  bioLine2: { fontSize: 13, marginTop: 2 },
  bioLine3: { fontSize: 13, marginTop: 2 },

  memberButton: {
    marginTop: 10,
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
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