import {useRouter} from 'next/router';
import MainContainer from '../../components/MainContainer';

export default function User({user}) {
    const {query} = useRouter();
    console.log(user); //!!!

  return (
    <MainContainer>
        <div>
            <h1>User with number {query.id}</h1>
            <div>
                Username - {user.name}
            </div>
        </div>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
    const response =  await fetch(`https://jsonplaceholder.typicode.com/users${params.id}`);
    const user = await response.json();
    return {
        props: {user},
    }
}