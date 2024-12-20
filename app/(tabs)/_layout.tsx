import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" 
                options={{ 
                    title: 'Home', 
                    headerShown: false, 
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
            }}/>
            <Tabs.Screen name="info" 
                options={{ 
                    title: 'Info', 
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? 'information-circle-sharp' : 'information-circle-outline'} color={color} size={24} />
                    ),
            }}/>
        </Tabs>
    )
}