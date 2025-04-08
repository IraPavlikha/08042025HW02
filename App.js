import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://i.pinimg.com/736x/30/b2/1d/30b21d8a232bea115960a9216d65a94f.jpg' }}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Carl</Text>
          <Text style={styles.job}>Software Developer</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: subscribed ? 'red' : 'skyblue' }
          ]}
          onPress={() => setSubscribed(!subscribed)}
        >
          <Text style={styles.buttonText}>
            {subscribed ? 'Unsubscribe' : 'Subscribe'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  job: {
    fontSize: 14,
    color: 'gray',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
