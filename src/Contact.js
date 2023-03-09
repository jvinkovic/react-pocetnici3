import { Form, Outlet, useParams, useLoaderData } from "react-router-dom";

export function contactLoader({ params }) {
  const contact = {
                  first: 'name', 
                  last: 'surname',
                  avatar: "https://placekitten.com/g/200/200", 
                  id: params.contactId};
  return contact;
}

export default function Contact() {
  const contact = useLoaderData();
  console.log(contact);

  let { contactId } = useParams();
  console.log(contactId);

  // const contact = {
  //   first: "Your",
  //   last: "Name",
  //   avatar: "https://placekitten.com/g/200/200",
  //   twitter: "your_handle",
  //   notes: "Some notes",
  //   favorite: true,
  // };

  return (
    <div id="contact">
      <div>
        <img
        alt="avatar"
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div>
        <h1>
            {contact.first} {contact.last}: {contactId}

          <Favorite contact={contact} />
        </h1>        
      </div>
      <Outlet />
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}