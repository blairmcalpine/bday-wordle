import Screen from '../components/Screen'

export default function First() {
  return (
    <Screen
      message={"This is isn't a real word but close enough"}
      word={'bday'}
      pushPath={'/3'}
    />
  )
}
