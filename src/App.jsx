import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail';
import App2 from './App2';



function App() {
  // const [변수명, 변경함수] = useState(초기값); 기본 형태
  // usexxx : 리액트 내장 함수(리액트 훅)
  const [title, setTitle] = useState('게시판');

  

  const [boardTitle, setBoardTitle]
         = useState(['React', 'HTML', 'CSS']);
  const [like, setLike] = useState([0,0,0]);
  const [show, setShow] = useState(false);
  const [titleIndex , setTitleIndex] = useState(0);

  //새로운 글을 저장하는 스테이트
  const [newtitle, setNewTitle] = useState('');

  function change () {
    setLike(like+1);
  }


  return (



    <div className='App'>

      <App2 />

      <div className='nav'>
        <h3>{title}</h3>
      </div>
      
      <button onClick={()=>{
        setTitle('상품목록');
      }}>제목바꾸기</button>

      {
        boardTitle.map((title,i)=>{
          return(

         <div className='list' key={i}>
            <h4 onClick={()=>{
              setShow(!show);
              setTitleIndex(i);
            }}>{title} <button onClick={(e)=>{
              let _like = [...like];
              _like[i] = _like[i]+1 
              setLike(_like);
              e.stopPropagation();
            }}>좋아요</button>{like[i]}</h4>
            <p>2025-07-16</p>
            <button onClick={()=>{
              let _boardTitle = [...boardTitle];
              _boardTitle.splice(i,1);
              setBoardTitle(_boardTitle);

              let _like = [...like];
              _like.splice(i,1);
              setLike(_like);

            }}>게시글 삭제</button>
         </div>
          );
        })
      }

      <button onClick={()=>{
        let _boardTitle = [...boardTitle];
        _boardTitle[0]="JAVA";
        setBoardTitle(_boardTitle);
      }}>첫번째 게시물 제목 바꾸기</button>

      {
        show ? <Detail boardTitle = {boardTitle} setBoardTitle = {setBoardTitle} titleIndex = {titleIndex}/> : ""
      }
    

      <input type="text" value = {newtitle} onInput={(e)=>{
        setNewTitle(e.target.value);
      }}/>
      <button onClick={()=>{
        // 내용에 아무것도 적지 않았을 경우.
        if(newtitle ===''){
          alert('제목을 입력하세요.')
          return;
        }

        let _boardTitle = [...boardTitle];
        // unshift  : 배열 맨 앞에 / push : 배열 맨 뒤에 추가
        _boardTitle.push(newtitle)
        setBoardTitle(_boardTitle);

        let _like = [...like];
        _like.push(0);
        setLike(_like);
        
        //추가 된 후 
        setNewTitle('');
      }}>글작성</button>
      




    </div>
  )
}

export default App
