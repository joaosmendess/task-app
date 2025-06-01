import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTasks } from '../contexts/TaskContext';
import { RootStackParamList } from '../navigation/AppNavigator';

type AddTaskScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddTask'>;

interface Props {
  navigation: AddTaskScreenNavigationProp;
}

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Título deve ter pelo menos 3 caracteres')
    .required('Título é obrigatório'),
  description: Yup.string()
    .max(200, 'Descrição deve ter no máximo 200 caracteres')
});

const AddTaskScreen: React.FC<Props> = ({ navigation }) => {
  const { addTask } = useTasks();

  const handleSubmit = (values: { title: string; description: string }) => {
    addTask(values.title.trim(), values.description.trim());
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Nova Tarefa</Text>
        </View>

        {/* Form */}
        <Formik
          initialValues={{ title: '', description: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Título da Tarefa *</Text>
                <TextInput
                  style={[styles.input, errors.title && touched.title && styles.inputError]}
                  placeholder="Ex: Estudar React Native"
                  value={values.title}
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                />
                {errors.title && touched.title && (
                  <Text style={styles.errorText}>{errors.title}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Descrição (opcional)</Text>
                <TextInput
                  style={[styles.textArea, errors.description && touched.description && styles.inputError]}
                  placeholder="Adicione mais detalhes sobre a tarefa..."
                  value={values.description}
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                />
                <View style={styles.counterContainer}>
                  {errors.description && touched.description && (
                    <Text style={styles.errorText}>{errors.description}</Text>
                  )}
                  <Text style={styles.counter}>{values.description.length}/200</Text>
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.submitButton, (!isValid || !dirty) && styles.submitButtonDisabled]}
                  onPress={() => handleSubmit()}
                  disabled={!isValid || !dirty}
                >
                  <Icon name="add" size={20} color="white" style={styles.buttonIcon} />
                  <Text style={styles.submitButtonText}>Adicionar Tarefa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => navigation.goBack()}
                >
                  <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>

              {/* Tips */}
              <View style={styles.tipsContainer}>
                <Text style={styles.tipsTitle}>💡 Dicas</Text>
                <Text style={styles.tipsText}>• Use títulos claros e objetivos</Text>
                <Text style={styles.tipsText}>• Adicione detalhes na descrição se necessário</Text>
                <Text style={styles.tipsText}>• Divida tarefas grandes em subtarefas menores</Text>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  keyboardContainer: {
    flex: 1,
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
  form: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4b5563',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  textArea: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    height: 120,
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 14,
    marginTop: 4,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  counter: {
    fontSize: 12,
    color: '#9ca3af',
  },
  buttonContainer: {
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#667eea',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  submitButtonDisabled: {
    backgroundColor: '#9ca3af',
  },
  buttonIcon: {
    marginRight: 8,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    padding: 16,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#6b7280',
    fontSize: 16,
  },
  tipsContainer: {
    marginTop: 40,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 16,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4b5563',
    marginBottom: 12,
  },
  tipsText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
});

export default AddTaskScreen; 