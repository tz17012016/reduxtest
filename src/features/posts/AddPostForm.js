import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
import { postAdded } from './postsSlice';

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [userId, setUserId] = React.useState('');

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const users = useSelector(selectAllUsers);
  const onSavePostClick = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
    }
    setTitle('');
    setContent('');
  };
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor='postAuthor'>Author:</label>
        <select
          id='postAuthor'
          name='postAuthor'
          value={userId}
          onChange={onAuthorChange}>
          <option value=''>Select an author</option>
          {userOptions}
        </select>
        <label htmlFor='postContent'>Post Content:</label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChange}
        />
        <button type='button' disabled={!canSave} onClick={onSavePostClick}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
