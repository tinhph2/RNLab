import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import {styles} from './styles';
const ListUser = ({navigation}) => {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  const getAPI = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };

  const handleDelete = async id => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(`${url}/${id}`, {
      method: 'Delete',
    });
    result = await result.json();
    if (result) {
      getAPI();
    }
  };

  const handleUpdate = data => {
    setOpenDialog(true);
    setSelectedUser(data);
    console.log(data);
  };

  React.useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      getAPI();
    });
    return focusHandler;
  }, [navigation]);

  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.buttonNew}
        onPress={() => navigation.navigate('AddUser')}>
        <Text style={styles.buttonText}>Thêm mới</Text>
      </TouchableOpacity>

      {data.length
        ? data.map((item, index) => (
            <View style={styles.container} key={index}>
              <View style={styles.containerText}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.birthday}>{item.birthday}</Text>
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                  <Text
                    style={styles.buttonText}
                    onPress={() => handleUpdate(item)}>
                    Sửa thông tin
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleDelete(item.id)}>
                  <Text style={styles.buttonText}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        : null}
      <Modal visible={openDialog} transparent={true}>
        <UpdateModel
          setOpenDialog={setOpenDialog}
          selectedUser={selectedUser}
          getAPIData={getAPI}></UpdateModel>
      </Modal>
    </ScrollView>
  );
};

const UpdateModel = props => {
  const [name, setName] = useState(undefined);
  const [birthday, setBirthday] = useState(undefined);
  useEffect(() => {
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setBirthday(props.selectedUser.birthday);
    }
  }, [props.selectedUser]);

  const updateUser = async () => {
    const url = 'http://10.0.2.2:3000/users';
    const id = props.selectedUser.id;
    let result = await fetch(`${url}/${id}`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, birthday}),
    });
    result = await result.json();
    if (result) {
      props.getAPIData();
      props.setOpenDialog(false);
    }
  };

  return (
    <View style={styles.modalContent}>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter birthday"
        value={birthday}
        onChangeText={text => setBirthday(text)}
      />
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={updateUser}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => props.setOpenDialog(false)}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ListUser;
