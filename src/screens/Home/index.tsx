import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export function Home() {
  const [content, setContent] = useState<string[]>([]);
  const [name, setName] = useState<string>('');

  function handleParticipantAdd(name: string) {
    console.log(name);
    if (content.includes(name)) {
      return Alert.alert('Error', `${name} already exists.`);
    }
    setName('');
    setContent((prevState) => [...prevState, name]);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Confirm?', `Do you really want to remove ${name}?`, [
      {
        text: 'Yes',
        onPress: () => {
          setContent((prevState) =>
            prevState.filter((participant) => participant !== name)
          );
          setName('');
        },
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>List</Text>
      <Text style={styles.eventDate}>ToDo List</Text>
      <View style={styles.form}>
        <TextInput
          value={name}
          style={styles.input}
          placeholder='Name'
          placeholderTextColor={'#6B6B6B'}
          onChangeText={setName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd(name)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={content}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => {
          return <Text style={styles.listEmptyText}>Empty list</Text>;
        }}
      />
    </View>
  );
}
