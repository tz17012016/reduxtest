// import Counter from './features/counter/Counter';
import './App.css';
import AddPostForm from './features/posts/AddPostForm';
import PostList from './features/posts/PostList';

function App() {
  return (
    <main className='App'>
      {/* <Counter /> */}
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;
