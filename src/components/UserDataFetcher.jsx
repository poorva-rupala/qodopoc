import React, { useState, useEffect } from 'react'

/**
 * INTENTIONALLY FLAWED: UserDataFetcher Component
 * 
 * This component demonstrates common code issues that Qodo AI would detect:
 * - No error handling
 * - No loading state
 * - Direct data access without null checks
 * - Excessive console.log usage
 * - Non-optimal state update pattern
 */
function UserDataFetcher() {
  const [user, setUser] = useState({ name: '', email: '', company: { name: '' } })
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    // ISSUE 1: No error handling - fetch() can fail
    // ISSUE 2: No loading state - user won't know data is being fetched
    // ISSUE 3: Direct API call without try-catch
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        console.log('User data received:', data) // ISSUE 4: Excessive logging
        setUser(data)
        
        // ISSUE 5: Non-optimal state update - fetching related data separately
        // This causes multiple renders and race conditions
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`)
          .then(response => response.json())
          .then(posts => {
            console.log('Posts data received:', posts) // ISSUE 4: More logging
            setPosts(posts)
          })
      })
  }, []) // ISSUE 6: Empty dependency array correct here, but the structure is problematic

  const handlePostClick = (postId) => {
    // ISSUE 3: Accessing array without null checks
    const post = posts.find(p => p.id === postId)
    console.log('Selected post:', post) // ISSUE 4: Logging again
    
    // ISSUE 7: Multiple state updates without batching
    setSelectedPost(post)
    setUser({ ...user, lastViewedPost: postId }) // ISSUE 8: Unnecessary spread for single property
  }

  const handleRefresh = () => {
    // ISSUE 7: Multiple separate state updates instead of batching
    setUser({ name: '', email: '', company: { name: '' } })
    setPosts([])
    setSelectedPost(null)
    
    // ISSUE 2: No loading state to show user the refresh is happening
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        setUser(data)
      })
      // ISSUE 1: No error handling
  }

  // ISSUE 3: Direct property access without null checks
  return (
    <div className="user-data-container">
      <div className="user-section">
        <h2>User Information</h2>
        
        {/* ISSUE 3: Will crash if user is null */}
        <div className="user-card">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          {/* ISSUE 3: user.company might be undefined, causing nested null access */}
        </div>

        <button onClick={handleRefresh}>Refresh Data</button>
      </div>

      <div className="posts-section">
        <h2>User Posts ({posts.length})</h2>
        
        {/* ISSUE 2: No loading indicator */}
        <div className="posts-list">
          {posts.map(post => (
            <div
              key={post.id}
              className="post-item"
              onClick={() => handlePostClick(post.id)}
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                marginBottom: '10px',
                cursor: 'pointer',
                backgroundColor: selectedPost?.id === post.id ? '#e3f2fd' : '#fff'
              }}
            >
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ISSUE 3: selectedPost could be null */}
      {selectedPost && (
        <div className="post-detail">
          <h3>Post Details</h3>
          <p><strong>ID:</strong> {selectedPost.id}</p>
          <p><strong>Title:</strong> {selectedPost.title}</p>
          <p><strong>Body:</strong> {selectedPost.body}</p>
          {/* ISSUE 4: Logging inside render */}
          {console.log('Rendering selected post:', selectedPost)}
        </div>
      )}
    </div>
  )
}

export default UserDataFetcher
