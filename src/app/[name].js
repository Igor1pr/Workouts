import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from '../../assets/data/exercises.json'

// O nome do arquivo entre colchetes faz com que ele seja um parâmetro de caminho dinâmico
// Isso serve para que essa página receba dados de forma dinâmica (por ser a página de detalhes de cada exercício, ela recebe o nome de cada exercício)

export default function ExerciseDetailsScreen() {

    const params = useLocalSearchParams();

    // encontrar o exercicio se o item.name for igual a params.name
    // isso significa que esse é o exercicio a ser mostrado
    const exercise = exercises.find((item) => item.name == params.name);

    // se o exercicio for nulo ou indefinido
    if (!exercise) {
        return (
            <Text>Exercise not found</Text>
        )
    }

    return  (
        <View style={styles.container}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseSubtitle}>
                    <Text style={styles.subValue}>{exercise.muscle}</Text> | <Text style={styles.subValue}>{exercise.equipment}</Text>
                </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    exerciseName: {
        fontSize: 20, 
        fontWeight: '500',
    },
    exerciseSubtitle: {
        color: 'dimgray',
    },
    subValue: {
        textTransform: 'capitalize'
    }
})