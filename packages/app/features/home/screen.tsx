import { View, Text, Pressable } from 'react-native'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <Text style={{ fontWeight: '800' }}>Welcome to Solito.</Text>
      <View style={{ maxWidth: 600 }}>
        <Text style={{ textAlign: 'center' }}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Solito is made by{' '}
          <Pressable
            href="https://twitter.com/fernandotherojo"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            style={{}}
          >
            <Text>Fernando Rojo</Text>
          </Pressable>
          .
        </Text>
      </View>
      <View style={{ height: 32 }} />
      {/* <Row> */}
      <TextLink
        href="/user/fernando"
        textProps={{
          style: { fontSize: 16, fontWeight: 'bold', color: 'blue' },
        }}
      >
        <Text>Regular Link</Text>
      </TextLink>
      <View style={{ width: 32 }} />
      <MotiLink
        href="/user/fernando"
        animate={({ hovered, pressed }) => {
          'worklet'

          return {
            scale: pressed ? 0.95 : hovered ? 1.1 : 1,
            rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
          }
        }}
        from={{
          scale: 0,
          rotateZ: '0deg',
        }}
        transition={{
          type: 'timing',
          duration: 150,
        }}
      >
        <Text
          selectable={false}
          style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
        >
          <Text>Moti Link</Text>
        </Text>
      </MotiLink>
      {/* </Row> */}
    </View>
  )
}
