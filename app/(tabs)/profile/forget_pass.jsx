import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('ro***********@gmail.com');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.description}>
          We have sent a verification code to {'\n'} your email address associated with your account. Please use the code to reset your password.
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            editable={false} // Make the input non-editable
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { router.push('/profile/enter_code'); }}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    position: 'relative', // Enable positioning for header
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#28a745',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginTop: 100, // Add margin to push the container down from the top
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20, // Increase the margin to add space between title and description
  },
  description: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 30, // Add margin to provide space before the input fields
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20, // Add margin to provide space before the button
  },
  inputLabel: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#28a745',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FFF',
    color: '#333',
    textAlign: 'center',
  },
  button: {
    width: '60%', // Increase width
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
