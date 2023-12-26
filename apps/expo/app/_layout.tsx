import { Provider } from 'app/provider'
import { Stack } from 'expo-router'
import { Drawer } from 'expo-router/drawer'

export default function Root() {
  return (
    <Provider>
      {/* <Stack /> */}
      <Drawer />
    </Provider>
  )
}
