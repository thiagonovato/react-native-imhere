import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  function handleParticipantAdd() {
    console.log('Voce clicou...');
  }

  function handleParticipantRemove(name: string) {
    console.log('removeu', name);
  }

  const participants = [
    'Thiago',
    'Novato',
    'Marques',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Home</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Setembro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Name'
          placeholderTextColor={'#6B6B6B'}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
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
