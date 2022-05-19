import Form from './Form';
import Contacts from './Contacts';
import Container from './Container';
import Filter from './Filter';

export default function App() {
  return (
    <>
      <Container title="Phonebook">
        <Form />
      </Container>
      <Container title="Contacts">
        <Filter />
        <Contacts />
      </Container>
    </>
  );
}

// {/* <Container title="Contacts"> */}
// {/* <Form /> */}
// {/* {isFetching && <h2>Loading...</h2>} */}
// {/* {data && <Contacts contacts={data} />} */}
// {/* </Container> */}
