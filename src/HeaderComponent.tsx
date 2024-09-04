import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, Animated} from 'react-native';

const HeaderComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(prev => !prev);
  };

  // Animated value for the shadow
  const shadowOpacity = new Animated.Value(0);

  const handleSwitchChange = (value: boolean) => {
    Animated.timing(shadowOpacity, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}></View>
      <View style={styles.middleContent}>
        <Text style={styles.title}>SHIELD</Text>
      </View>
      <View style={styles.rightContent}>
        <Switch
          value={isDarkMode}
          onValueChange={value => {
            handleSwitchChange(value);
            handleDarkModeToggle();
          }}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor="#f4f3f4"
        />
        {isDarkMode ? (
          <Animated.View
            style={[
              styles.iconContainer,
              {shadowOpacity, backgroundColor: '#ffdb58'},
            ]}></Animated.View>
        ) : (
          <Animated.View
            style={[
              styles.iconContainer,
              {shadowOpacity, backgroundColor: '#f4f3f4'},
            ]}></Animated.View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#00712D',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#00712D',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4.65,
    elevation: 8,
  },
  leftContent: {
    flex: 1,
    alignItems: 'flex-start',
  },
  middleContent: {
    flex: 2,
    alignItems: 'center',
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
  },
  iconContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 15,
    marginHorizontal: 5,
    padding: 8,
  },
});

export default HeaderComponent;
