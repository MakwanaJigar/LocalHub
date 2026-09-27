import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// Splash runs animations and a navigation timer; keep them from outliving the test
jest.useFakeTimers();
