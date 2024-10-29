import { StyleSheet} from "react-native";
import { ModalPortal } from "react-native-modals";
import StackNavigator from "./Navigation/StackNavigator";
import { UserContext } from "./hook/context";


export default function App() {
  return (
        <>
        <UserContext>
          <StackNavigator />
          <ModalPortal />
          </UserContext>
        </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
