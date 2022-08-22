import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1F1F29',
    padding: 24
  },
  eventName: {
    color: '#F6F7EE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#4F5D93',
    borderBottomStartRadius: 20,
    borderTopLeftRadius: 20,
    color: '#F6F7EE',
    padding: 16,
    fontSize: 16,
    marginRight: 7
  },
  buttonText: {
    color: "#EEFC7A",
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderTopEndRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: '100%',
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42
  }

})