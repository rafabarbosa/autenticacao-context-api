import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  textContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
  },
  text: {
    paddingTop: 10,
    paddingHorizontal: 20,
    textAlign: 'justify',
  },
  button: {
    borderRadius: 5,
    padding: 20,
    backgroundColor: '#000066',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Styles;
