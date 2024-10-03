import React from 'react'
import PostList from '../forum/PostList'
import UserPostList from './UserPostList'

export default function UserAllPosts() {
  return (
    <div className='w-full mt-3 custom-glass rounded-md'>
        <UserPostList />
    </div>
  )
}
