import React, { Fragment, useContext } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Home = () => {
  const { notes, removeNote } = useContext(FirebaseContext);

  return (
    <Fragment>
      <Form />
      <hr />
      : <Notes notes={notes} onRemove={removeNote} />
    </Fragment>
  );
};
