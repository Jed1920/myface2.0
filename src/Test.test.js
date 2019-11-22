import React, {useState, useEffect} from 'react';
// import Link from '../Link.react';
// import renderer from 'react-test-renderer';
import {IndivUser} from './User';
// import {SingleUser} from './Users';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

it('renders correctly', () => {
  const tree = SingleUser();
  expect(tree).toMatchSnapshot();
});


function Simple(){
  return <div>Hello World</div>
}

function SingleUser(){
  const [user, setUser] = useState([]);

  useEffect(() => {
      fetchAPI("http://localhost:8080/api/users/5")
          .then((json) => setUser(json));
  } ,[]);

  if (user.length === 0){
      return ('Blah');
  }

  return (
      <div>
          <IndivUser data = {user}/>
      </div>
  );
}
