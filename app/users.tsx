import {Card, Icon} from '@rneui/themed';
import {Link} from 'expo-router';
import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getUsers, User} from '../apis/user';
import FullPageLoading from '../components/base/FullPageLoading';
import UserAvatar from '../components/user/UserAvatar';

const Cards = () => {
  const [users, setUsers] = useState<Array<User>>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error({err});
      })
      .finally(() => setLoading(false));
  }, []);

  const renderItem = (user: User) => {
    return (
      <Card wrapperStyle={styles.cardContainer}>
        <View style={styles.main}>
          <UserAvatar name={user.name}/>
          <View style={styles.infoContainer}>
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <Link
          href={`/user/${user.id}`}
        >
          <View style={styles.button}>
            <Icon name="chevron-right" color="#FFF" size={25}/>
          </View>
        </Link>
      </Card>
    );
  };

  return (
    loading ? <FullPageLoading/> : (
      <FlatList
        data={users}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={user => user.id.toString()}
      />
    )
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  infoContainer: {
    paddingLeft: 7,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
  },
  email: {
    fontSize: 13,
    opacity: 0.7,
  },
  button: {
    borderRadius: 200,
    backgroundColor: '#6F65B8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cards;
