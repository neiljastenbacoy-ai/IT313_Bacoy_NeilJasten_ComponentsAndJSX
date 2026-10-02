import { useState } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';

import StudentCard from '../components/StudentCard';

const students = [
  {
    id: 's1',
    name: 'Ana Cruz',
    course: 'IT313',
    units: 21,
    isFullLoad: true,
  },
  {
    id: 's2',
    name: 'Bea Santos',
    course: 'IT313',
    units: 15,
    isFullLoad: false,
  },
  {
    id: 's3',
    name: 'Cid Ramos',
    course: 'IT313',
    units: 18,
    isFullLoad: true,
  },
  {
    id: 's4',
    name: 'Dex Alonzo',
    course: 'IT313',
    units: 12,
    isFullLoad: false,
  },
];

export default function StudentRoster() {

  const [roster, setRoster] = useState(students);

  const reverseRoster = () => {
    setRoster([...roster].reverse());
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Student Roster
      </Text>

      <Text style={styles.total}>
        {`Total Students: ${roster.length}`}
      </Text>

      <View style={styles.button}>
        <Button
          title="Reverse Roster"
          onPress={reverseRoster}
        />
      </View>

      {roster.map((student) => (

        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />

      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  total: {
    fontSize: 18,
    marginBottom: 20,
  },

  button: {
    marginBottom: 20,
  },

});