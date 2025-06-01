import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTasks } from '../contexts/TaskContext';

type StatsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Stats'>;

interface Props {
  navigation: StatsScreenNavigationProp;
}

const StatsScreen: React.FC<Props> = ({ navigation }) => {
  const { tasks } = useTasks();
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = tasks.filter(t => !t.completed).length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Estatísticas</Text>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.statsCard}>
          <Icon name="check-circle" size={32} color="#4ade80" />
          <Text style={styles.statsNumber}>{completedTasks}</Text>
          <Text style={styles.statsLabel}>Tarefas Concluídas</Text>
        </View>

        <View style={styles.statsCard}>
          <Icon name="schedule" size={32} color="#f59e0b" />
          <Text style={styles.statsNumber}>{pendingTasks}</Text>
          <Text style={styles.statsLabel}>Tarefas Pendentes</Text>
        </View>

        <View style={styles.statsCard}>
          <Icon name="trending-up" size={32} color="#667eea" />
          <Text style={styles.statsNumber}>{completionRate.toFixed(1)}%</Text>
          <Text style={styles.statsLabel}>Taxa de Conclusão</Text>
        </View>
      </View>

      {/* Additional Stats */}
      <View style={styles.additionalStats}>
        <Text style={styles.sectionTitle}>Resumo</Text>
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>Total de Tarefas</Text>
          <Text style={styles.statsValue}>{totalTasks}</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>Média de Tarefas por Dia</Text>
          <Text style={styles.statsValue}>3</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>Dias Mais Produtivos</Text>
          <Text style={styles.statsValue}>Segunda e Quarta</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#667eea',
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  statsCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 6,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginVertical: 8,
  },
  statsLabel: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
  additionalStats: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  statsText: {
    fontSize: 16,
    color: '#4b5563',
  },
  statsValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
});

export default StatsScreen; 