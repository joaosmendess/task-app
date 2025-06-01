import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Share,
  Alert
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTasks } from '../contexts/TaskContext';
import { RouteProp } from '@react-navigation/native';

type TaskDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TaskDetails'>;
type TaskDetailsScreenRouteProp = RouteProp<RootStackParamList, 'TaskDetails'>;

interface Props {
  navigation: TaskDetailsScreenNavigationProp;
  route: TaskDetailsScreenRouteProp;
}

const TaskDetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  const { tasks, toggleTask, deleteTask } = useTasks();
  const task = tasks.find(t => t.id === route.params.taskId);

  if (!task) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detalhes da Tarefa</Text>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Tarefa não encontrada</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Tarefa: ${task.title}\nDescrição: ${task.description}\nStatus: ${task.completed ? 'Concluída' : 'Pendente'}\nData: ${task.createdAt.toLocaleDateString('pt-BR')}`,
        title: 'Compartilhar Tarefa'
      });
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível compartilhar a tarefa');
    }
  };

  const handleDelete = () => {
    Alert.alert(
      'Confirmar exclusão',
      'Tem certeza que deseja excluir esta tarefa?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            deleteTask(task.id);
            navigation.goBack();
          }
        }
      ]
    );
  };

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
        <Text style={styles.headerTitle}>Detalhes da Tarefa</Text>
        <TouchableOpacity
          style={styles.shareButton}
          onPress={handleShare}
        >
          <Icon name="share" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Task Content */}
      <View style={styles.content}>
        <View style={styles.statusContainer}>
          <TouchableOpacity
            style={styles.checkButton}
            onPress={() => toggleTask(task.id)}
          >
            <Icon
              name={task.completed ? "check-circle" : "radio-button-unchecked"}
              size={32}
              color={task.completed ? "#4ade80" : "#9ca3af"}
            />
          </TouchableOpacity>
          <Text style={styles.statusText}>
            {task.completed ? 'Concluída' : 'Pendente'}
          </Text>
        </View>

        <Text style={styles.title}>{task.title}</Text>
        {task.description && (
          <Text style={styles.description}>{task.description}</Text>
        )}
        <Text style={styles.date}>
          Criada em: {task.createdAt.toLocaleDateString('pt-BR')}
        </Text>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDelete}
        >
          <Icon name="delete" size={20} color="#ef4444" />
          <Text style={styles.deleteButtonText}>Excluir Tarefa</Text>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
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
  shareButton: {
    padding: 8,
  },
  content: {
    padding: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkButton: {
    marginRight: 12,
  },
  statusText: {
    fontSize: 16,
    color: '#6b7280',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 20,
    lineHeight: 24,
  },
  date: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 30,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fee2e2',
    padding: 16,
    borderRadius: 12,
  },
  deleteButtonText: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#6b7280',
  },
});

export default TaskDetailsScreen; 