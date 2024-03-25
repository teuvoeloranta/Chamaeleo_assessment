import {Badge, Card} from '@rneui/themed';
import {FlatList, StyleSheet, Text, View} from 'react-native';

type Props = {
  name: string,
  bs: Array<string>,
  cachPhrase: Array<string>,
};

const UserCompany = (props: Props) => {
  return (
    <Card containerStyle={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <View style={styles.cachPhraseContainer}>{props.cachPhrase.map((cachPhrase) => <Text style={styles.cachPhrase}>{cachPhrase}</Text>)}</View>
      <FlatList
        data={props.bs}
        horizontal
        renderItem={({item}) => <Badge status="primary" value={item} badgeStyle={styles.bs}/>}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.bsContainer}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 16,
  },
  cachPhraseContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 15,
    marginBottom: 20,
  },
  cachPhrase: {
    fontSize: 14,
    fontWeight: '600',
  },
  bsContainer: {
    columnGap: 10,
  },
  bs: {
    padding: 5,
    height: 'auto',
    backgroundColor: '#A39DD2',
  },
});

export default UserCompany;
