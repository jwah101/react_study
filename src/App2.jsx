import { useState } from "react";
import './App.css'

function App2() {
  const [board , setBoard] = useState([
    {
      title :  "React",
      date : "2025-07-15",
      like : 0
    },
    {
      title :  "HTML",
      date : "2025-07-17",
      like : 0
    },
    {
      title :  "CSS",
      date : "2025-07-13",
      like : 0
    }
  ])

    const [newTitle , setNewTitle] = useState('');
    // const refNew = uesRef();
  return(
    
    <div> 
        <div>
          {board.map((data,i)=>{
           return(
            <div className="list" key={i}>
            <h4>{data.title} <button onClick={()=>{
              let _board = [...board];
              _board[i].like = _board[i].like + 1;
              setBoard(_board);
            }}>👍</button>{data.like}</h4>
            <p>{data.date}</p>
            <button onClick={() =>{
              let _board = [...board];
              _board.splice(i,1);
              setBoard(_board);
            }}>게시글 삭제</button>
            </div>
          );
        })
      }
      </div>
      <input type="text" value={newTitle} onChange={(e)=>{
        setNewTitle(e.target.value)
      }}/>
      <button onClick={()=>{
        if(newTitle===''){
          alert('글 제목을 입력하세요.')
          return
        }
        //날짜 생성기
        let now = new Date();
        let date = now.getFullYear()+ '-' + (now.getMonth()+1) + '-' + now.getDate();

        let _board = [...board];
        _board.push({title : newTitle, date: date , like :0});
        setBoard(_board);
        // 게시글 추가후 내용 삭제 방법
        // refNew.current.value = '';
        setNewTitle('');
      }}>게시글 추가</button>

    </div>

  );
}

export default App2;