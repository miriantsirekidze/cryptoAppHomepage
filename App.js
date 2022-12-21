import { SafeAreaView } from "react-native-safe-area-context"
import Header from "./components/Header"
import Post from "./components/Post";
import PostText from "./components/PostText";

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: "#3a4357", flex: 1}}>
      <Header/>
      <Post/>
      <PostText/>
    </SafeAreaView>
  );
}

export default App;
