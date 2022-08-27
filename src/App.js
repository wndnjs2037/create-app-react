import React from 'react';
import { dummy } from './movieDummy';
import Movie from './components/Movie';

function App() {
  return (
    // 최상위 컨테이너
    <div> 
      <div className='app-container'>
        {
          //map을 통해 dummy 데이터를 순회하며 화면에 return해줌
          dummy.results.map((item) => {
            return(
              <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                />

            )
          })
        }

      </div>
    </div>
  );
}

export default App;
