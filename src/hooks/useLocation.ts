import { useState, useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import GetLocation, {
  GeoError,
  GeoPosition,
} from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';
import { addLocation } from '../store/location/locationSlice';

export const useLocation = () => {
  const [location, setLocation] = useState<GeoPosition>();
  const dispatch = useDispatch();

  useEffect(() => {
    requestPermission();
  }, []);

  useEffect(() => {
    if (location) {
      dispatch(addLocation(location));
    }
  }, [location]);

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location',
          message: 'SmartSpacial would like to use your location',
          buttonPositive: 'Grant',
        },
      );
      if (!granted) {
        console.log('Location permission denied');
      }
      return getCurrentPosition();
    } else if (Platform.OS === 'ios') {
      request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
        if (result === 'granted') {
          return getCurrentPosition();
        }
      });
    }
  };

  const handleLocationSuccess = (position: GeoPosition) => {
    setLocation(position);
  };

  const handleLocationError = (error: GeoError) => {
    console.log('GeoLocation Error: ', error);
  };

  const getCurrentPosition = () => {
    try {
      GetLocation.getCurrentPosition(
        handleLocationSuccess,
        handleLocationError,
        {
          enableHighAccuracy: true,
          timeout: 15000,
        },
      );
    } catch (e) {
      console.log('GeoLocation Error: ', e);
    }
  };
  return { location, getCurrentPosition, requestPermission };
};
