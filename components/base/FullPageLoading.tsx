import {LinearProgress} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

const FullPageLoading = () => {
  return (
    <View style={styles.container}>
      <LinearProgress color="#6F65B8"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    opacity: 0.8,
    paddingHorizontal: 50,
  },
});

export default FullPageLoading;
