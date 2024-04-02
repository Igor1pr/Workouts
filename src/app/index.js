import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from '../.././assets/data/exercises.json';
import ExerciseListitem from '../components/ExerciseListItem';

export default function App() {

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        contentContainerStyle={{ gap: 5 }}
        // Se a database tivesse uma key ou id para cada item, o KeyExtractor não seria necessário
        // Caso necessário, é possível passar um index junto com o item, e somar com o item.name para que não corra o risco de haver um nome repetido
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <ExerciseListitem item={item}/> }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
  },
});
