import { StyleSheet, Text, View } from 'react-native';

type StudentCardProps = {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
};

export default function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.meta}>{course}</Text>
      <Text style={styles.meta}>{`Units: ${units}`}</Text>
      <Text style={[styles.status, isFullLoad ? styles.fullLoad : styles.partTime]}>
        {isFullLoad ? 'Full Load' : 'Part Time'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#111827',
  },
  meta: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
  },
  status: {
    marginTop: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '600',
  },
  fullLoad: {
    backgroundColor: '#dcfce7',
    color: '#166534',
  },
  partTime: {
    backgroundColor: '#fef3c7',
    color: '#92400e',
  },
});
