import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Video from 'react-native-video';

import {CustomButton} from '@components/CustomButton';
import {ErrorModal} from '@components/ErrorModal';

import {styles} from './styles';

type VideoPayerProps = {
  title: string;
  url: string;
  onGoBack: () => void;
  error: string;
  setError: (error: string) => void;
};

export const VideoPlayer = ({
  title,
  url,
  error,
  setError,
  onGoBack,
}: VideoPayerProps) => {
  const handleError = () => {
    setError('Ha ocurrido un error al reproducir el video');
  };

  const handleBack = () => {
    setPaused(true);
    setError('');
    onGoBack();
  };
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {loading && <Text>Cargando video...</Text>}
        <Video
          style={styles.video}
          source={{uri: url}}
          paused={paused}
          onLoadStart={() => setLoading(true)}
          onLoad={() => setLoading(false)}
          onError={handleError}
        />

        <CustomButton
          styles={styles.button}
          onPress={handleBack}
          label="Regresar"
        />
      </View>
      <ErrorModal error={error} setShow={handleBack} show={!!error} />
    </SafeAreaView>
  );
};
