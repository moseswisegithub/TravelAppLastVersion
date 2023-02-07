/* eslint-disable prettier/prettier */
import { SafeAreaView, View } from 'react-native';
import React,{ useState } from 'react';
import Title from '../../Title';
import styles from './styles';
import Categories from '../../Categories';

const Home = () => {
  const [selectedCategory,setSelectedCategory] = useState('All');

  return (
    <SafeAreaView>
        <View style={styles.container}>
        <Title text="where do" style={{ fontWeight: 'normal' }}/>
        <Title text="you want to go"/>

        <Title text="Explore Attractions" style={styles.subtitle} />

        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={['All','Popular','Historical','Random','Trending','Exclusive','Others']}/>
        </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);

