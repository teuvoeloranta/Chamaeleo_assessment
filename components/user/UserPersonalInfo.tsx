import {StyleSheet, Text, View} from 'react-native';
import UserAvatar from './UserAvatar';

type Props = {
  name: string,
  email: string,
  username: string,
};

const UserPersonalInfo = (props: Props) => {
  return (
    <View style={styles.container}>
      <UserAvatar name={props.name} size="large"/>
      <View style={styles.info}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.username}>{props.username}</Text>
        <Text style={styles.email}>{props.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    columnGap: 20,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    rowGap: 10,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
  },
  username: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
  email: {
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
    opacity: 0.8,
  },
});

export default UserPersonalInfo;
