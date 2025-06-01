import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Task } from '../types/Task';

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<Props> = ({ task, onToggle, onDelete }) => {
  return (
    <View style={[styles.container, task.completed && styles.completedContainer]}>
      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => onToggle(task.id)}
      >
        <Icon
          name={task.completed ? "check-circle" : "radio-button-unchecked"}
          size={24}
          color={task.completed ? "#4ade80" : "#9ca3af"}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={[styles.title, task.completed && styles.completedText]}>
          {task.title}
        </Text>
        {task.description && (
          <Text style={[styles.description, task.completed && styles.completedText]}>
            {task.description}
          </Text>
        )}
        <Text style={styles.date}>
          {task.createdAt.toLocaleDateString('pt-BR')}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(task.id)}
      >
        <Icon name="delete" size={20} color="#ef4444" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  completedContainer: {
    backgroundColor: '#f9fafb',
    opacity: 0.7,
  },
  checkButton: {
    marginRight: 12,
    marginTop: 2,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: '#9ca3af',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#9ca3af',
  },
  deleteButton: {
    padding: 4,
  },
});

export default TaskItem; 