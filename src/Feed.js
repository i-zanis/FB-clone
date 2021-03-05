import './Feed.css';
import MessageSender from './MessageSender';
import Post from './components/post/Post';
import StoryReel from './StoryReel';


function Feed() {
    const [posts, setPosts] = useState([]);
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {posts.map(post => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    );
}

export default Feed;
