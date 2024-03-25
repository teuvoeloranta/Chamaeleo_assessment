import {Button, Icon} from '@rneui/themed';
import {useLocalSearchParams, useNavigation} from 'expo-router';
import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {getUser, User} from '../../apis/user';
import FullPageLoading from '../../components/base/FullPageLoading';
import UserAddresses from '../../components/user/UserAddresses';
import UserCompany from '../../components/user/UserCompany';
import UserPersonalInfo from '../../components/user/UserPersonalInfo';

const CardPage = () => {
  const {id} = useLocalSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  const {goBack} = useNavigation();

  useEffect(() => {
    if (id) {
      const idNumber = parseInt(id as string);
      if (idNumber) {
        setLoading(true);
        getUser(idNumber)
          .then((res) => setUser(res.data))
          .catch((err) => console.error({err}))
          .finally(() => setLoading(false));
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <FullPageLoading/> : (user
        ? (
          <>
            <View style={styles.header}>
              <Button radius={10} style={styles.backButton} color="#52489C" onPress={goBack}>
                <Icon name="chevron-left" color="#FFF"/>
              </Button>
            </View>
            <View style={styles.infoItem}>
              <UserPersonalInfo
                email={user.email}
                name={user.name}
                username={user.username}
              />
            </View>
            <View style={styles.infoItem}>
              <UserAddresses
                city={user.address.city}
                street={user.address.street}
                suite={user.address.suite}
                zipcode={user.address.zipcode}
                phone={user.phone}
              />
            </View>
            <View style={styles.infoItem}>
              <UserCompany
                bs={user.company.bs.split(' ')}
                name={user.company.name}
                cachPhrase={user.company.catchPhrase.split(' ')}
              />
            </View>
          </>
        )
        : null)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 30,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backButton: {
    marginBottom: 20,
  },
  infoItem: {
    marginBottom: 30,
  },
});

export default CardPage;
