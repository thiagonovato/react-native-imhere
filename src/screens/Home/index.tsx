import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
  function handleParticipantAdd() {
    console.log('Voce clicou...');
  }

  function handleParticipantRemove(name: string) {
    console.log('removeu', name);
  }

  const participants = ['Thiago', 'Novato', 'Marques'];

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
      {participants.map((participant) => (
        <Participant
          key={participant}
          name={participant}
          onRemove={() => handleParticipantRemove(participant)}
        />
      ))}
    </View>
  );
}
