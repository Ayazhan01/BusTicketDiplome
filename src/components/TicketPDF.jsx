
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import { Font } from '@react-pdf/renderer';


Font.register({
  family: 'Roboto',
  fonts: [
    { src: '/fonts/Roboto-Regular.ttf' }, 
    { src: '/fonts/Roboto-Bold.ttf', fontWeight: 'bold' }, 
  ],
});


const styles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto', 
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30
  },
  header: {
    fontFamily: 'Roboto', 
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#e53e3e',
    fontWeight: 'bold'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  label: {
    fontSize: 12,
    color: '#718096'
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  divider: {
    borderBottom: '1px solid #e2e8f0',
    marginVertical: 10
  },
  ticketInfo: {
    border: '1px solid #e53e3e',
    borderRadius: 5,
    padding: 15,
    marginTop: 15
  },
  ticketNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    backgroundColor: '#f8f9fa',
    padding: 5
  }
});

const TicketPDF = ({ bus, passenger }) => {
  if (!bus || !passenger) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text>Данные не загружены</Text>
        </Page>
      </Document>
    );
  }
   return (
 
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>АВТОБУСНЫЙ БИЛЕТ</Text>
      
      <Text style={styles.ticketNumber}>
        Номер билета: {Math.random().toString(36).substring(2, 10).toUpperCase()}
      </Text>
      
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Дата бронирования:</Text>
          <Text style={styles.value}>{new Date().toLocaleDateString()}</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.row}>
          <Text style={styles.label}>Пассажир:</Text>
          <Text style={styles.value}>
            {passenger.lastName} {passenger.firstName}
          </Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Место:</Text>
          <Text style={styles.value}>{passenger.seatNumber}</Text>
        </View>
        
        <View style={styles.ticketInfo}>
          <View style={styles.row}>
            <Text style={styles.label}>Автобусная компания:</Text>
            <Text style={styles.value}>{bus.company}</Text>
          </View>
          
          <View style={styles.row}>
            <Text style={styles.label}>Номер автобуса:</Text>
            <Text style={styles.value}>{bus.busNumber}</Text>
          </View>
          
          <View style={styles.row}>
            <Text style={styles.label}>Класс:</Text>
            <Text style={styles.value}>{bus.type}</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={{...styles.row, alignItems: 'flex-start'}}>
            <View>
              <Text style={styles.label}>Отправление:</Text>
              <Text style={styles.value}>{bus.departure.time}</Text>
              <Text style={styles.value}>{bus.departure.city}</Text>
              <Text style={styles.label}>{bus.departure.station}</Text>
            </View>
            
            <View style={{alignItems: 'center'}}>
              <Text style={styles.label}>Время в пути:</Text>
              <Text style={styles.value}>{bus.duration}</Text>
            </View>
            
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.label}>Прибытие:</Text>
              <Text style={styles.value}>{bus.arrival.time}</Text>
              <Text style={styles.value}>{bus.arrival.city}</Text>
              <Text style={styles.label}>{bus.arrival.station}</Text>
            </View>
          </View>
        </View>
        
        <View style={{...styles.row, marginTop: 20}}>
          <Text style={styles.label}>Стоимость:</Text>
          <Text style={{...styles.value, fontSize: 18}}>{bus.price.toLocaleString()} ₸</Text>
        </View>
        
        <View style={{marginTop: 30, borderTop: '1px dashed #ccc', paddingTop: 15}}>
          <Text style={{fontSize: 10, textAlign: 'center'}}>
            Предъявите этот билет при посадке в автобус. Билет действителен только при наличии документа, удостоверяющего личность.
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);}

export default TicketPDF;