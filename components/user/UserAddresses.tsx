import {StyleSheet, Text, View} from 'react-native';

type Props = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  phone: string,
};

const UserAddresses = (props: Props) => {
  const renderRow = (label: string, value: string) => {
    return (
      <View style={styles.infoRow}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderRow('Street', props.street)}
      {renderRow('Suite', props.suite)}
      {renderRow('City', props.city)}
      {renderRow('Zip Code', props.zipcode)}
      {renderRow('Phone Number', props.phone.split(' ')[0])}
      <View style={styles.companyContainer}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  infoRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 15,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
  },
  companyContainer: {
    width: '100%',
  },
});

export default UserAddresses;
