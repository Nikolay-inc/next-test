import {useState, useEffect} from 'react';
import Link from 'next/link';
import MainContainer from '../components/MainContainer';

function Users({users}) {

  return (
    <MainContainer keywords='users page list'>
        <h1>Users list</h1>
        <ul>
            {
              users.map(item => {
                  return (
                        <li key={item.id}>
                            <Link href={`/users/${item.id}`}>
                                <a>
                                    {item.name}
                                </a>
                            </Link>
                        </li>
                  )
              })
            }
        </ul>
    </MainContainer>
  )
}

export default Users;

export async function getStaticProps() {
    const response =  await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return {
        props: {users},
    }
}