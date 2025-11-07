import { Stack } from 'expo-router'; // Importem el component Stack d'expo-router
import { StatusBar } from 'expo-status-bar'; // Importem el component StatusBar


export default function RootLayout() {
  return (
    <>
    <StatusBar style="light"/>  
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found.tsx" options={{}} />
    </Stack>   
    </> 
  );
}
