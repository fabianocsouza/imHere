import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles'

interface ParticipantProps {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onRemove}
      >
        <Text style={styles.buttonText}>
          <MaterialIcons name="delete-outline" size={27} color="#EEFC7A" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}