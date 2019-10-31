import React from 'react';
import ReactDOM from 'react-dom';


const TodoList=()=>{

    const items =['Первая строка1','Вторая строка'];

    return(
        <ul>
            <li> { items[0] }</li>
            <li> { items[1] }</li>
        </ul>
    );
};

const AppHeader=()=>{
    return(
        <h1>My Todo list</h1>
    );
};

const SearchPanel=()=>{
    return(
        <input placeholder="search"/>
    );
};

//компаненты должны писаться с большой буквы
//таким образом React отличает наши собственные компаненты от HTML тегов
const App=()=>{

    //элемент может быть нулевым
    const loginBox=null;

    // элемент задействуется как  { loginBox } а компонент должен быть со стрелками <AppHeader/>
    return(
        <div>
            { loginBox }
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};

// В React передается  элемент <App/> а не компонент App
ReactDOM.render(<App/>, document.getElementById('root'));