import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {DummyPhoto} from '../../assets';
import {getDatabase, ref, child, get, onValue} from 'firebase/database';
import {Loading} from '../../components/molecules';

const Home = ({route}) => {
  const [photo, setPhoto] = useState(DummyPhoto);
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const {uid} = route.params;
  useEffect(() => {
    setLoading(true);
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${uid}`))
      .then(snapshot => {
        setLoading(false);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setPhoto({uri: data.photo});
          setFullName(data.fullName);
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
      });
  }, []);
  return (
    <>
      <View style={styles.pageContainer}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.appTitle}>{`Hi, ${fullName}`}</Text>
            <Text style={styles.appSubTitle}>
              Have you track your money today?
            </Text>
          </View>
          <Image source={photo} style={styles.photo} />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.subTitle}>Your Balance</Text>
          <Text style={styles.totalBalance}>Rp. 10.000.000</Text>
          <View style={styles.line} />
          <View style={styles.subTotalWrapper}>
            <Text style={styles.subTotal}>Cash On Hand</Text>
            <Text style={styles.subTotal}>Rp. 4.000.000</Text>
          </View>
          <View style={styles.subTotalWrapper}>
            <Text style={styles.subTotal}>Cash On Bank</Text>
            <Text style={styles.subTotal}>Rp. 6.000.000</Text>
          </View>
          <Text style={styles.subTitle}>Add Transaction</Text>
          <Button text="Cash On Hand" />
          <Gap height={10} />
          <Button text="Cash On Bank" />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    flex: 1,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 16,
    marginVertical: 12,
  },
  totalBalance: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    fontSize: 24,
    textAlign: 'center',
  },
  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 18,
  },
  subTotalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTotal: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  appSubTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  photo: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
});
