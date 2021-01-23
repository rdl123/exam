import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const [prix, setPrix] = useState('');
  const [quantite, setQuantite] = useState('');
  const onChange = textValue => setText(textValue);
  const onChange1 = prixValue => setPrix(prixValue);
  const onChange2 = quantiteValue => setQuantite(quantiteValue);
  return (
    <View>
     
      <TextInput
        placeholder="Article"
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
       <TextInput
        placeholder="prix"
        style={styles.input}
        onChangeText={onChange1}
        value={prix}
      />
       <TextInput
        placeholder="quantite"
        style={styles.input}
        onChangeText={onChange2}
        value={quantite}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text,prix,quantite);
        
          setText('');
          setPrix('');
          setQuantite('');

        }}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Article
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: 'orange',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
