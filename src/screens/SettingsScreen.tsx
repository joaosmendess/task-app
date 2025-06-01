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

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Settings'>;

interface Props {
  navigation: SettingsScreenNavigationProp;
}

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
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
        <Text style={styles.headerTitle}>Configurações</Text>
      </View>

      {/* Settings List */}
      <View style={styles.settingsList}>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="notifications" size={24} color="#667eea" />
          <Text style={styles.settingText}>Notificações</Text>
          <Icon name="chevron-right" size={24} color="#9ca3af" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="palette" size={24} color="#667eea" />
          <Text style={styles.settingText}>Tema</Text>
          <Icon name="chevron-right" size={24} color="#9ca3af" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="language" size={24} color="#667eea" />
          <Text style={styles.settingText}>Idioma</Text>
          <Icon name="chevron-right" size={24} color="#9ca3af" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="info" size={24} color="#667eea" />
          <Text style={styles.settingText}>Sobre</Text>
          <Icon name="chevron-right" size={24} color="#9ca3af" />
        </TouchableOpacity>
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>Sobre o App</Text>
        <Text style={styles.versionText}>Versão 1.0.0</Text>
        <Text style={styles.copyrightText}>© 2024 TaskApp. Todos os direitos reservados.</Text>
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
  settingsList: {
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
    marginLeft: 12,
  },
  aboutSection: {
    padding: 20,
    alignItems: 'center',
    marginTop: 'auto',
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4b5563',
    marginBottom: 8,
  },
  versionText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  copyrightText: {
    fontSize: 12,
    color: '#9ca3af',
  },
});

export default SettingsScreen; 