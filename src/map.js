import { View, StyleSheet } from 'react-native';
import React from 'react';
import MapboxGl from '@rnmapbox/maps';

MapboxGl.setAccessToken(
  'sk.eyJ1Ijoic2l2YXJhbWFuNyIsImEiOiJjbTBqaXB6c3IwbTRyMmlzYXdhNDE1eXY3In0.zE8Q2Z_e70_nRF_kgvzZUA',
);
MapboxGl.setTelemetryEnabled(false);

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapboxGl.MapView
        style={styles.map}
        zoomEnabled={true}
        styleURL="mapbox://styles/mapbox/satellite-streets-v12"
        rotateEnabled={true}
      >
        <MapboxGl.Camera
          zoomLevel={15}
          centerCoordinate={[76.949156, 10.936923]}
          pitch={60}
          animationMode={'flyTo'}
          animationDuration={6000}
        />
        <MapboxGl.PointAnnotation
          id="marker"
          coordinate={[76.949156, 10.936923]}
        >
          <View style={styles.annotation} />
        </MapboxGl.PointAnnotation>
      </MapboxGl.MapView>
    </View>
  );
};

// Define the styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  annotation: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
});

export default MapScreen;
