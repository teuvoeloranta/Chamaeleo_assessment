import {Avatar, AvatarProps} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {nameToInitials} from '../../utils/user';

type Props = {
  name: string,
  size?: AvatarProps['size'],
};

const UserAvatar = (props: Props) => {
  return (
    <Avatar
      rounded
      title={nameToInitials(props.name)}
      containerStyle={styles.avatar}
      titleStyle={styles.initials}
      size={props.size}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#52489C',
    color: '#FFFFFF',
    padding: 3,
  },
  initials: {
    fontSize: 15,
  },
});

export default UserAvatar;
