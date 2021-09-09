import React from 'react';
import logo from './logo.svg';
import './App.css';
import {comments} from './data/comments';

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/picturepost.jpg"></img>
            <span className='font-semibold text-lg'>Jongkonrat Pisitnawakun 630610722</span>
          </div>

          {/* status message */}
          <p>Quiz ทำเอาลนไปหมดเลยค่า ไม่ไหวแล้ว</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>100k คน</p>
          </div>

        </div>

        {/* comments section */}
        {comments.map(user1 => <div className="" key={user1.username}>

          {/* normal comment */}
          <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src={user1.userImagePath}></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">{user1.username}</p>
              <p>{user1.commentText}</p>

              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}

              {user1.likeNum > 0 ?
                <div className='flex items-center'>
                  <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                  <p className='text-gray-500'>{user1.likeNum} คน</p>
                </div> : null}
            </div>
          </div>

          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          {user1.replies.map(user2 => <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src={user2.userImagePath}></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">{user2.username}</p>
              <p>{user2.commentText}</p>

              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}

              {user2.likeNum > 0 ?
                <div className='flex items-center'>
                  <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                  <p className='text-gray-500'>{user2.likeNum} คน</p>
                </div> : null}
            </div>
          </div>)}
        </div>)}
      </div>
    </div>
  );
}

export default App;