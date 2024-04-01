import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';

export default function App() {

  return (
    <View style={styles.container}>
      {/* Este é um comentário dentro do retorno */}
      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Text style={styles.exerciseSubtitle}>
              {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
            </Text>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    padding: 10,
    justifyContent: 'center',
  },
  exerciseContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciseName: {
    fontSize: 20, 
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'dimgray',
  }
});
