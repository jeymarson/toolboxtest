import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '@config/router';

import {VideoPlayer as VideoPlayerLayout} from './VideoPlayer.dumb';

type VideoPlayerProps = NativeStackScreenProps<
  RootStackParamList,
  'VideoPayer'
>;

export const VideoPlayer = ({route, navigation}: VideoPlayerProps) => {
  const {title, url} = route.params;
  const [error, setError] = useState('');

  const handleGoBack = () => {
    navigation.replace('Home');
  };
  return (
    <VideoPlayerLayout
      error={error}
      setError={setError}
      title={title}
      url={url}
      onGoBack={handleGoBack}
    />
  );
};
